FROM node:16-buster AS builder

WORKDIR /app
ADD package.json package-lock.json /app/
RUN npm ci
ADD / /app
RUN npm run build

FROM nginx:1.24.0-bullseye

EXPOSE 3000
ADD ci/ /
COPY --from=builder /app/out /usr/local/share/nginx
