FROM golang:alpine AS build_base

RUN apk add --no-cache git build-base

ENV GO111MODULE=on

# Set the Current Working Directory inside the container
WORKDIR /app

# We want to populate the module cache based on the go.{mod,sum} files.
COPY go.mod .
COPY go.sum .

RUN go mod download

COPY . .

# Build the Go app
RUN go build -o ./out/go-app .

# Start fresh from a smaller image
FROM alpine:3.9
RUN apk add ca-certificates build-base

ARG USER=deployment

# This is to create a non-privilege user
RUN adduser -D $USER && \
    mkdir -p /etc/sudoers.d && \
    echo "$USER ALL=(ALL) NOPASSWD: ALL" > /etc/sudoers.d/$USER && \
    chmod 0440 /etc/sudoers.d/$USER

COPY --from=build_base /app/out/go-app /home/$USER/app/go-app

RUN mkdir -p /app/config
RUN touch /app/config/.env

# only provide read and execute access to directory for non-privilege user
RUN chmod 500 /home/$USER

# set current user as the non-privilege user
USER $USER

# Set working directory for app
WORKDIR /home/$USER/app

# This container exposes this port to the outside world
EXPOSE 3100

# Run the binary program produced by `go install`
# and start the server by adding ` serve` arg
CMD ["./go-app", "serve"]
