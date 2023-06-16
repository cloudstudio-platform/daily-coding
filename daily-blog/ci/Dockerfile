FROM node:16.20.0-buster AS downloader

WORKDIR /app
ADD package.json package-lock.json /app/
RUN npm ci --only=production

FROM downloader AS builder

WORKDIR /app
RUN npm ci
ADD / /app
RUN npm run build

FROM downloader

COPY --from=builder /app/.next /app/.next
ADD next.config.js /app/
CMD ["npm", "run", "serve"]
