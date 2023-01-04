# The instructions for the first stage
FROM node:16-alpine

RUN mkdir -p /opt/app
WORKDIR /opt/app

COPY . .
RUN yarn --network-timeout 100000


ENV PORT 9000
EXPOSE 9000
ENV NODE_ENV production
RUN yarn build

CMD [ "yarn", "serve" ]
