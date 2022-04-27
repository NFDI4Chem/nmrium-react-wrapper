FROM node:18-alpine3.14

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent
RUN npm install react-scripts@latest -g --silent

COPY . ./

CMD ["npm", "run" , "serve"]