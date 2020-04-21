FROM node:alpine

WORKDIR /usr/app

COPY package.json ./
COPY package-lock.json ./

RUN npm install

COPY ./ ./

# Add bash
RUN apk add --no-cache bash

CMD ["node", "server.js"]