FROM node:20-slim AS base

WORKDIR /app

COPY ./server/ /app/
COPY ./dist /app/dist

RUN npm i

EXPOSE 3000

CMD node server.js