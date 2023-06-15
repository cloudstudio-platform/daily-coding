FROM node:16-buster AS downloader

WORKDIR /app
ADD package.json package-lock.json /app/
RUN npm ci --only=production

FROM node:16-buster AS builder

WORKDIR /app
ADD / /app
RUN set -eux; \
    npm ci; \
    npm run build

FROM node:16-buster

WORKDIR /app
ADD package.json /app/
COPY --from=downloader /app/node_modules /app/node_modules
COPY --from=builder /app/.next /app/.next

CMD ["npm", "run", "serve"]
