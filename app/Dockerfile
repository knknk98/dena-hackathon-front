FROM node:12.13.0-alpine
RUN apk update && \
    apk add --no-cache python make g++
ENV LANG C.UTF-8
ENV TZ Asia/Tokyo
RUN npm uninstall -g yarn && \
    npm install -g yarn && \
    yarn install && \
    yarn global add @vue/cli nuxt create-nuxt-app
RUN yarn
EXPOSE 5000
CMD sh -c "yarn install && yarn run dev"
ENV CHOKIDAR_USEPOLLING=true