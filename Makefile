# docker
client-run:
	cd client && yarn && yarn remix build && yarn remix

client-docker-build:
	cd client && docker build -t toy-robot-web . && cd -

client-docker-run: client-docker-build client-docker-down
	cd client && docker run --name toy-robot-web -dp 3000:3000 toy-robot-web && cd -

client-docker-down:
	-docker stop toy-robot-web
	-docker rm toy-robot-web

server-lint:
	cd server && golangci-lint run --timeout 3m && cd -

server-run:
	cd server && go run *.go serve && cd -

server-test:
	cd server && ./coverage.sh $(coverage) & cd -

server-docker-build: 
	cd server && docker build -t toy-robot-api . && cd -

server-docker-run: server-docker-build server-docker-down
	cd server && docker run --name toy-robot-api -dp 3100:3100 toy-robot-api && cd -

server-docker-down:
	-docker stop toy-robot-api
	-docker rm toy-robot-api

dockerize: client-docker-run server-docker-run

# docker-compose
compose-build: 
	docker-compose build

compose-up:
	docker-compose up -d

compose-run: compose-build compose-up