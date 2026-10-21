FROM node:24-alpine

WORKDIR /app

# Accept APP_VERSION build argument and expose it as an environment variable
ARG APP_VERSION=local
ENV APP_VERSION=$APP_VERSION
ENV NODE_ENV=production
ENV PORT=3000

# Copy package manifests
COPY package*.json ./

# Install only production dependencies
RUN npm ci --omit=dev

# Copy application source
COPY src/ ./src/

# Set ownership of the application directory to the non-root node user
RUN chown -R node:node /app

# Run as the non-root node user
USER node

# Expose the application port
EXPOSE 3000

# Docker health check using the existing /health endpoint
HEALTHCHECK --interval=30s --timeout=5s --start-period=5s --retries=3 \
  CMD wget -qO- http://127.0.0.1:3000/health > /dev/null || exit 1

# Start the application using the existing npm start script
CMD ["npm", "start"]

