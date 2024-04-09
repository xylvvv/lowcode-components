FROM node:16-alpine

WORKDIR /app
COPY package.json .
RUN npm i --registry=https://registry.npmmirror.com/
COPY . .
RUN npm run build:docs