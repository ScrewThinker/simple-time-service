# ----------------------------------------------------------
# Stage 1: Build stage (compile TypeScript to JavaScript)
# ----------------------------------------------------------
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

COPY package*.json ./

# Install all dependencies (dev + prod)
RUN npm install

# Copy the entire project (including src/)
COPY . .

# Compile TypeScript -> JavaScript (to dist/)
RUN npm run build


# ----------------------------------------------------------
# Stage 2: Runtime stage (smaller image)
# ----------------------------------------------------------
FROM node:18-alpine

# Create non-root user
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

WORKDIR /app

# Copy only compiled JS
COPY --from=builder /app/dist ./dist
COPY package*.json ./

# Install ONLY production dependencies
RUN npm install --only=production

# Set proper ownership
RUN chown -R appuser:appgroup /app

# Switch to non-root user
USER appuser

# Expose service port
EXPOSE 3000

# Start the service
CMD ["node", "dist/index.js"]
