# --- Build Stage ---
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
# Use 'npm ci' for clean installs if a package-lock.json is present,
# otherwise 'npm install' is fine.
RUN npm ci 
COPY . .
# Compile TypeScript to JavaScript (requires a "build" script in package.json)
RUN npm run build 

# --- Production Stage ---
FROM node:20-alpine AS production
WORKDIR /app

# Copy only production dependencies from the build stage
COPY package*.json ./
RUN npm ci --only=production

# Copy the compiled output (usually in a 'dist' folder)
COPY --from=build /app/dist ./dist

EXPOSE 3000

# Command to run the compiled JavaScript application
CMD ["node", "dist/server.js"] 
