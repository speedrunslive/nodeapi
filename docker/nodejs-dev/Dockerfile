FROM node:7.4

ENV NODE_ENV development

RUN mkdir /app
COPY package.json /app
WORKDIR /app

RUN npm install -g nodemon
RUN npm install

ADD ./src /app/src

EXPOSE 3000

CMD npm start
