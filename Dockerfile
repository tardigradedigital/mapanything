FROM stefanscherer/node-windows:10.15.0-nanoserver-1803
ENV NODE_ENV production
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install --production --silent
COPY . .
EXPOSE 443
CMD npm start