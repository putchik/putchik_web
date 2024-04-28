FROM node:20-alpine

WORKDIR /app

COPY . .
RUN pnpm install

RUN pnpm run build

EXPOSE 3000

CMD pnpm run serve