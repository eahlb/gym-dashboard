FROM node:16
LABEL author="Erik Ahlberg"

ENV NODE_ENV=production

WORKDIR /var/www
COPY package*.json ./
RUN npm install

COPY . ./
EXPOSE $PORT

ENTRYPOINT [ "npm", "start" ]