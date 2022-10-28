# ecommerce-orm-challenge
Challenge (ORM) Object-Relational Mapping - build the back end for an e-commerce site. By taking a working Express.js API and configuring it to use Sequelize to interact with a MySQL database

## User Story

AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies

## Acceptance Criteria

GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete data in my database

## Installation

In terminal run  npm i  to install all dependencies, open mysql with  mysql -u root -p  command, connect to database with  source schema.sql  command, then seed database  npm run seed  and you can start app  npm start 

## Built With
- JavaScript
- Express
- MySQL2
- Sequelize

## Questions

Austin Poland
- Github: https://github.com/ausbosspoland 
- Email: austinjpoland311@gmail.com