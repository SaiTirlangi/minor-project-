FROM node:16
WORKDIR /usr
COPY package.json ./
COPY package-lock.json ./
COPY ./ ./
RUN npm install
CMD [ "npm","start" ]
EXPOSE 3000