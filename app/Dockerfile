# Use Node.js LTS
FROM node:18-alpine

# Set working directory
WORKDIR /app

#ARG VITE_API_BASE_URL


# Copy package files first (for better caching)
COPY package.json /app

# Install dependencies
RUN npm install

# Copy source code
COPY . .
RUN echo "VITE_API_BASE_URL=/api" > .env
RUN npm run build 
# Expose port 3000 (Vite default)
EXPOSE 3000

# Start development server with host 0.0.0.0 for Docker
CMD ["npm", "run", "dev"]
