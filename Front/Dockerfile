FROM node:12.16.3-alpine3.11

WORKDIR /app/Front/client

ENV PATH /app/Front/client/node_modules/.bin:$PATH

COPY ./client/package.json /app/Front/client/package.json
COPY ./client/yarn.lock /app/Front/client/yarn.lock
RUN yarn

CMD ["yarn", "start"]