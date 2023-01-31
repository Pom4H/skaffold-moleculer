FROM node:18-alpine

WORKDIR /usr/app

RUN chown -R node:node /usr/app

USER node

COPY --chown=node:node package-lock.json .
COPY --chown=node:node package.json .
COPY --chown=node:node services services

RUN npm ci

ENV NODE_ENV production
