FROM node:alpine AS node-builder

WORKDIR /backend

COPY package*.json ./
RUN npm install

COPY tsconfig.json ./

COPY src/ ./src
COPY types/ ./types
RUN npx tsc

FROM registry.heroiclabs.com/heroiclabs/nakama:3.17.0

COPY --from=node-builder /backend/build/*.js /nakama/data/modules/
COPY data/local.yml /nakama/data/
