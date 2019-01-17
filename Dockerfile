FROM node:10.13-alpine
ENV NODE_ENV production
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install --production --silent
COPY . .
EXPOSE 80
CMD node index.js