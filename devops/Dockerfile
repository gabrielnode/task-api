FROM node:16 AS installer
WORKDIR /app
COPY . .
RUN rm -rf node_modules
RUN npm install
RUN npm run build
EXPOSE 3000

CMD ["npm", "run", "start:debug"]