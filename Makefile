lint:
	golangci-lint run --timeout 3m

run:
	go run main.go serve

test:
	./coverage.sh $(coverage)