FROM node:16.18-alpine3.16

EXPOSE 10001

WORKDIR /app
COPY package.json .
RUN yarn
COPY . .

CMD ["yarn", "dev", "--host"]