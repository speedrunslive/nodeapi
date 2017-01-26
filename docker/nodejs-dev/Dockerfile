FROM node:7.4

ENV NODE_ENV development

RUN mkdir -p /app/config
COPY ./package.json /app
COPY ./config/config.json /app/config
WORKDIR /app

RUN npm install -g nodemon
RUN npm install

ADD ./src /app/src

EXPOSE 3000

CMD npm run dev
