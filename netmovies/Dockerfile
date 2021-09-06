FROM node:14-alpine

WORKDIR /app

COPY package*.json ./

ENV PATH /app/node_modules/.bin:$PATH

RUN npm install
RUN npm install react-scripts@3.3.1 -g --silent

COPY . .

CMD ["npm", "start"]