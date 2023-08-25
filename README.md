<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest


## Description

CQRS design pattern in DDD with [Nest](https://github.com/nestjs/nest), PostgreSQL, and Docker.

```
# Download or pull Postgres Docker image and start the container
docker pull postgres
docker run --name mypostgres -e POSTGRES_PASSWORD=secret -p 5432:5432 -d postgres
```


```
# Interact with Postgres in Terminal

docker exec -it mypostgres psql -U postgres
CREATE DATABASE mydatabase;

CREATE TABLE UserTable(
 Id SERIAL PRIMARY KEY NOT NULL,
 Name Text NULL,
 Age INT NULL
)

INSERT INTO UserTable(Name, Age) VALUES('Bob', 29);
select * from UserTable;
```

