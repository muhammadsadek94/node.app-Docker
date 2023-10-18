FROM node:18  as base

FROM base  as development

WORKDIR /usr/src/app

COPY package*.json ./


RUN npm install

COPY . .

EXPOSE 4000

CMD [ "node" , "server.js" ]



FROM base as production

WORKDIR /usr/scr/app         #create dir in container 

COPY package*.json .

RUN npm install     --only=production 

COPY . .

EXPOSE 4000

CMD [ "node" , "server.js" ]







#ARG NODE_ENV
#RUN if ["$NODE_ENV" = "production" ]; \
#    then npm install --only=production; \
#    else npm install; \
#    fi

