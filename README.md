How to use Docker to dockerize a React app, Nodejs and Nginx reverse proxy - step by step tutorial

## Description

Welcome to Codeching channel! In this tutorial I will show you how to use Docker to dockerize a React application with Nodejs backend and Nginx proxy. It is a  step by step video where first we will write a minimalist webserver app using Express. We will extend our previous docker-compose file to create a backend container and using nginx proxy for the backend.

### Video

https://www.youtube.com/watch?v=7MlsbzJy8_8

### How to run

docker-compose -f .\docker-compose.yaml up --build

### Api endpoint:

http://localhost:8000/api

### Front-end:

http://localhost:3000