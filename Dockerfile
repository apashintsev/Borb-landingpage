FROM node:18.14-alpine
LABEL traefik.enable="true"
LABEL traefik.http.routers.land-app-https.rule="Host(`borb.fi`)"
LABEL traefik.http.routers.land-app-https.tls="true"
LABEL traefik.http.routers.land-app-https.entrypoints="https"
LABEL traefik.http.routers.land-app-https.tls.certresolver="le"
LABEL traefik.http.middlewares.land-app-compress.compress="true"
LABEL traefik.http.routers.land-app-https.middlewares="land-app-compress"
WORKDIR /app
COPY . .
RUN yarn && yarn build
CMD ["yarn", "start"]
