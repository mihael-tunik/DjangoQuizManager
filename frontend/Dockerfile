FROM node:18-alpine3.18

WORKDIR /usr/src/app

COPY ./react_frontend/package.json .

RUN npm install

COPY ./react_frontend .

EXPOSE 3000
