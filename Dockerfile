FROM node:18.14-alpine
WORKDIR /app
COPY . .
RUN yarn && yarn build
CMD ["yarn", "start"]