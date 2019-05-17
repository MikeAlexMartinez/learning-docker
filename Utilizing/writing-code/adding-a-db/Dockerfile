FROM node:8.16.0-alpine

WORKDIR /node/project/app

COPY . .

RUN npm install \
  && npm run build

CMD npm run prod:start