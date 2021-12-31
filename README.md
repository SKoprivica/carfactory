
# Car Factory
Application for entering and viewing vehicle data
### Tehnologies used:
FE:
- JavaScript
- ReactJS

BE:
- Java 8
- Maven
- Spring Boot

Database
- MySQL

How to start aplication:

Get MySQL Docker image
```sh 
sudo docker pull mysql/mysql-server:latest
```

Start Docker Container
```sh
docker run --name car-factory-mysql -e MYSQL_ROOT_PASSWORD=my-secret-pw -d --restart=always -p 3306:3306  mysql
```
Setup username and pass form application.yaml
Start BE:
```sh
mvn spring-boot:run
```
Start FE:
```sh
cd carfaactory-fe
npm start
```







