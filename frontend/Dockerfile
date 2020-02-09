FROM node:8-alpine
ENV NPM_CONFIG_LOGLEVEL warn

RUN mkdir -p /frontend
WORKDIR /frontend

COPY package.json ./

RUN apk add --no-cache --virtual .gyp \
        python \
        make \
        g++ \
    && yarn \
    && apk del .gyp

COPY ./ ./
RUN yarn build

CMD ["yarn", "--chw", "/fronted", "start"]