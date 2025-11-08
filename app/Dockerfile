# Use Node.js LTS
FROM node:18-alpine AS build

# Set working directory
WORKDIR /app

# Copy package files first (for better caching)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .
ARG VITE_API_BASE_URL=https://api.kaiftech.xyz
ENV VITE_API_BASE_URL=${VITE_API_BASE_URL}

# Build the app
RUN npm run build 

# ---- Production Stage ----
FROM nginx:alpine

# IMPORTANT: Copy custom nginx config BEFORE copying dist files
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy build output to Nginx's html folder
COPY --from=build /app/dist /usr/share/nginx/html

# Expose HTTP port
EXPOSE 80

# Run Nginx in foreground
CMD ["nginx", "-g", "daemon off;"]