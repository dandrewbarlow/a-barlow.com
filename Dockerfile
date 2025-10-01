# latest alpine node release
FROM node:current-alpine as build

# create a dir for node_modules in node user's home dir owned by node
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

# set working directory
WORKDIR /home/node/app

# copy dependencies info
COPY --chown=node:node package*.json ./

# switch to non-root user
USER node

# install dependencies
RUN npm install

# copy code
COPY --chown=node:node . .

# build project
RUN npm run build


# Prod settings
FROM nginx:stable-alpine as production

COPY --from=build /home/node/app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
