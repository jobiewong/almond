FROM node:lts-alpine
RUN apk add --no-cache git npm
WORKDIR /app
COPY package.json package-lock.json /app
RUN npm install --force
COPY . /app
RUN npm run build

EXPOSE 5000
CMD ["npm", "run", "start"]