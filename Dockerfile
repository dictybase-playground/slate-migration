FROM node:14.17.0-slim
WORKDIR /app
COPY package.json yarn.lock ./
RUN npm install
ADD *.js ./
CMD ["node", "index.js"]