FROM node:16-alpine

WORKDIR /app

ARG OSS_ACCESS_KEY_ID
ARG OSS_ACCESS_KEY_SECRET
ARG OSS_ENDPOINT

RUN wget https://gosspublic.alicdn.com/ossutil/1.7.13/ossutil64 -O /usr/local/bin/ossutil \
  && chmod 755 /usr/local/bin/ossutil \
  && ossutil config -i $OSS_ACCESS_KEY_ID -k $OSS_ACCESS_KEY_SECRET -e $OSS_ENDPOINT

COPY package.json .

RUN npm i --registry=https://registry.npmmirror.com/

COPY . .

ARG OSS_BUCKET
ARG OBJECT_NAME

RUN npm run build:docs \
  && ossutil cp -rf --meta Cache-Control:max-age=31536000 dumi/dist oss://$OSS_BUCKET/$OBJECT_NAME