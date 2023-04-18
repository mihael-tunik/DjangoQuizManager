FROM node:14-alpine3.16

WORKDIR /usr/src/app

COPY ./react_frontend/package.json .

RUN npm install

COPY ./react_frontend .

EXPOSE 3000
