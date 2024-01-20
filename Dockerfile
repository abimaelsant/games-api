FROM node:18-alpine

RUN npm install -g npm@9.6.7

WORKDIR /usr/app

COPY package.json ./

RUN npm install --legacy-peer-deps

COPY . .

EXPOSE 5000

CMD ["npm", "run", "start"]