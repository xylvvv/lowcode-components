FROM node:18-alpine

WORKDIR /app

ARG OSS_ACCESS_KEY_ID \
  OSS_ACCESS_KEY_SECRET \
  OSS_ENDPOINT \
  OSS_BUCKET \
  OBJECT_NAME

RUN wget https://gosspublic.alicdn.com/ossutil/1.7.13/ossutil64 -O /usr/local/bin/ossutil \
  && chmod 755 /usr/local/bin/ossutil \
  && ossutil config -i $OSS_ACCESS_KEY_ID -k $OSS_ACCESS_KEY_SECRET -e $OSS_ENDPOINT

COPY package.json .

RUN corepack enable pnpm && pnpm i --registry=https://registry.npmmirror.com/

COPY . .

RUN pnpm build-storybook \
  && ossutil cp -rf --meta Cache-Control:max-age=31536000 storybook-static oss://$OSS_BUCKET/$OBJECT_NAME