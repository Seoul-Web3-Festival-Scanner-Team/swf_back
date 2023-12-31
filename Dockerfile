FROM node:14

WORKDIR /app
COPY . .

RUN npm install

RUN npm run build

EXPOSE 80:80

CMD ["npm", "run", "start:prod"]