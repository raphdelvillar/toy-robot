# Name the node stage "builder"
FROM node:alpine as builder

# Set working directory
WORKDIR /app

COPY package.json ./
COPY yarn.lock ./

ENV NODE_ENV=production
RUN yarn install

ADD . .

ARG TOY_ROBOT_API_BASE_URL

ENV TOY_ROBOT_API_BASE_URL $TOY_ROBOT_API_BASE_URL

RUN yarn remix build

ARG USER=deployment
ARG GROUP=deployment

# This is to create a non-privilege user
RUN addgroup -S $GROUP && adduser -S $USER -G $GROUP

# Set the permissions for the non-privileged user
RUN chmod 700 /app/public && \
    chmod 700 /app/build && \
    chmod 700 /app/.cache && \
    chown -R $USER:$GROUP /app/public /app/build /app/.cache

# set current user as the non-privilege user
USER $USER

CMD ["yarn", "remix-serve", "/app/build/index.js"]