FROM node:16
LABEL author="Erik Ahlberg"

ENV NODE_ENV=production

WORKDIR /var/www
COPY package*.json ./
RUN npm install && \
    npm install -g nodemon && \
    npm install mongoose
COPY . ./
EXPOSE 3000

ENTRYPOINT [ "npm", "run" ]
CMD [ "prod" ]