# 13 Object-Relational Mapping (ORM): E-Commerce Back End

## Description

This simple back end application provides a framework for an online e-commerce site. Using multiple GET, POST, PUT, and DELETE methods, users can find relevant information about the products, product categories, and product tags seeded into the application, as well as create their own.

## User Story

```md
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies
```

## Acceptance Criteria

```md
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
```

## Links

Video Walkthrough: https://drive.google.com/file/d/1eOO49nspsO0tbSbrXe7hfj-0SqBehVOI/view