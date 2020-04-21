FROM node:alpine

WORKDIR /usr/app

COPY package.json ./

COPY package-lock.json ./

COPY ./ ./

# Add bash
RUN apk add --no-cache bash

RUN chmod +x ./env.sh

CMD ["npm", "start"]