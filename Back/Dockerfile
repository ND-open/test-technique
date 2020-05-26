FROM node:12.16.3-alpine3.11

WORKDIR /app/Back

COPY package.json /app/Back/package.json

RUN yarn
RUN yarn global add nodemon

EXPOSE 8800

CMD ["nodemon", "-L", "./server.js"]