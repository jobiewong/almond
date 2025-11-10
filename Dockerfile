FROM node:lts-alpine
RUN apk add --no-cache git npm
WORKDIR /app
COPY package.json package-lock.json /app
RUN npm install --force
COPY . /app
RUN npm run build

EXPOSE 3030 
CMD ["npm", "run", "start"]