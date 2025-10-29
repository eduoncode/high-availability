# Build stage
FROM node:22-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN npm ci --omit=dev && npm install --omit=dev

COPY . .

RUN npm run build

# Production stage
FROM node:22-alpine AS production

# Install wget for health checks
RUN apk add --no-cache wget

WORKDIR /app

COPY package*.json ./

RUN npm ci --omit=dev

COPY --from=builder /app/dist ./dist

# Create non-root user for security
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nestjs -u 1001

USER nestjs

EXPOSE 3001

CMD [ "node", "dist/main.js" ]
