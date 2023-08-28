<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest


## NestJS with CQRS Design Pattern

### Architecture

CQRS design pattern in DDD with [Nest](https://github.com/nestjs/nest), PostgreSQL, and Docker.

### Technologies Used

- Programming Language: `NestJS` with CQRS design pattern. Only one domain (User) is implemented for both Commands and Queries. `Typescript` used in implementation.
- Containerization: `PostgreSQL` database is used as `Docker` container.
- Cloud Computing: `AWS Lambda` function behind `AWS API Gateway` is used to trigger `REST` APIs.
-  `Serverless Framework` used for (local) cloud deployment.

### Instructions

```
# Download or pull Postgres Docker image and start the container
docker pull postgres
docker run --name <CONTAINER_NAME> -e POSTGRES_PASSWORD=<PASSWORD> -p 5432:5432 -d postgres
```


```
# Interact with Postgres in Terminal

docker exec -it <CONTAINER_NAME> psql -U <USERNAME>
CREATE DATABASE <DATABASE_NAME>;

CREATE TABLE UserTable(
 Id SERIAL PRIMARY KEY NOT NULL,
 Name Text NULL,
 Age INT NULL
)

INSERT INTO UserTable(Name, Age) VALUES('Bob', 29);
select * from UserTable;
```

- Run as a local Nest app: Use commane `nest start` and open `http://localhost:3000/user/all` to get the list of users or use Postman and create a POST request to `http://localhost:3000/user/add` to add a new user.
- Run as a local cloud lambda application: Use command `sls offline start` and follow the generated urls to communicate with the app, e.g. open `http://localhost:3000/dev/user/all` to get the list of users. 
