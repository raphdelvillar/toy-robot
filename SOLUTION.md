## Composition

Backend - Golang
Frontend - React/Remix

# About my solution

For the backend, I've used Golang with the design I followed being controller, service, repository pattern.
For the frontend, I've used React/Remix

# How to run?
I've created a makefile and a docker file

Just execute `make dockerize` you may have to run `sudo make dockerize` depending on the machine you are using

You can also run `make compose-run` provided you have docker-compose installed

You should then be able to see `localhost:3000` for the client and `localhost:3100` for the server

# What am I seeing?
- The center stage is the way to display the toy robot navigating the platform
- Below the stage is the user input where the user can input [PLACE X,Y,F] [MOVE] [LEFT] [RIGHT]
- Above the user input are little helpers for the commands that are available and there is a report that updates when a user input is entered

# Final notes
Thank you for your time with reviewing this. Any feedback is also appreciated :)