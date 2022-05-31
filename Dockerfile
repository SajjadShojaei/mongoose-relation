FROM node:12.19.0-alpine3.9 AS development

# Create app directory and copy source code into it
RUN mkdir -p /app

COPY . /app

WORKDIR /app

COPY ./package.json ./package-lock.json /app/

RUN npm install --only=development

COPY . .

ENV PORT 4000

EXPOSE 4000

CMD ["npm", "run", "start:dev"]


FROM node:12.19.0-alpine3.9 AS production

# Create app directory and copy source code into it
RUN mkdir -p /app

COPY . /app

WORKDIR /app

COPY ./package.json ./package-lock.json /app/

RUN npm install --only=production

COPY . .

COPY --from=development /app/dist ./dist

ENV PORT 4000

EXPOSE 4000

CMD ["node", "dist/main"]