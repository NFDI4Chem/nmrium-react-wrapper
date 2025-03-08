FROM node:22-alpine3.18

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json ./
RUN npm i --silent
RUN npm i react-scripts@latest -g --silent

COPY . ./
