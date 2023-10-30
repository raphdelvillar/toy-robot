## Composition

Backend - Golang
Frontend - React/Remix

# About my solution

### For the backend, I've used Golang with the design I followed being controller, service, repository pattern.

The controller is supposed to not have any business logic, the controller can call a service and a repository but cannot call other controllers.

The repository is the one that is in contact with the database / storage layer, for this exercise I've used a singleton design pattern since I only need one instance of the toy robot -- which only has 2 function Get and Set, one to retrieve the instance and one to set the instance. If you connect this to the database you can create a different repository which has the normal functions of a database e.g. Get, Find, Create, Update Delete. A repository cannot call controller, services and other repository.

The service is the one that contains the application business logic, In order to not make the controller hard to read and maintain the service will be the one to deal with additional logic while the controller will only handle parameter validation and returning the result. a service can call other services and repositories but cannot call controllers. 

### For the frontend, I've used React/Remix

It is my first time using Remix but I wanted to try and test my skills if I was able to understand it while doing this project. I did not choose to create additional routes as I think for this project only the index page is enough. Initially I've thought of using astillectron and webui but found it too complicated for this project so I opted to use react/remix instead. 

Since I've wanted the toy robot to automatically be updated on the screen after you enter the commands I've used actionData and loaderData. The loaderData being similar to componentDidMount or useEffect and opted to just display the report instead of the user opting to type it in.

I've initially tried to use my go to design framework which is ant-design but I've found bugs so I opted to use a different one. The design framework I've used is nextui which is a react ui library.

### Overall design:

I initially thought of just doing everything in the backend and just show an ASCII version of the current UI, but thought that a project that has a UI is easy to explain not just to other developers but is most appreciated by stakeholders so I opted to create a UI using react/remix.

# How to run?
I've created a makefile and a docker file

Just execute `make dockerize` you may have to run `sudo make dockerize` depending on the machine you are using

You can also run `make compose-run` provided you have docker-compose installed

You should then be able to see `localhost:3000` for the client and `localhost:3100` for the server

# What am I seeing?
- The center stage is the way to display the toy robot navigating the platform
- Below the stage is the user input where the user can input [PLACE X,Y,F] [MOVE] [LEFT] [RIGHT]
- Above the user input are little helpers for the commands that are available and there is a report that updates when a user input is entered
- Error is also displayed when there are errors, I've tried to look for a toast but not sure if there is anything compatible with remix

# Final notes
Thank you for your time with reviewing this. Any feedback is also appreciated. Thanks