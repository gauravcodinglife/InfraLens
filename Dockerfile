# Use Node.js 22 Alpine image

FROM node:22-alpine

# Set working directory

WORKDIR /app

# Copy package files

COPY package*.json ./

# Install dependencies

RUN npm install

# Copy application source code

COPY . .

# Build Next.js application

RUN npm run build

# Expose application port

EXPOSE 3000

# Start Next.js application

CMD ["npm", "start"]
