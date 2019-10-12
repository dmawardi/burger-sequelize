# burger-sequelize
Web Application Development Bootcamp Week 15: Sequelize Burger.

Updated version of a Week 13 assignment where we used MYSQL to build a burger database capable of having their "devoured" (True/False) statuses altered.

![Burger Front-End](https://i.imgur.com/EacveHq.png)

### Goal: 
To build a database of burger names that can be devoured.  The front-end contains a form with the ability to add a burger name. 

Every new burger will start undevoured. You can devour a burger by clicking the *Devour It!* button beside it, which will cause the burger name to be added to the *devoured* list on the right

Implementation of database with update and creation features.

## Installation
To install, download the files and use npm to install the required packages.

Use the Schema and Seeds files in the db folder to create a MYSQL database.

```
npm install
```

Then amend the connection.js file to connect to the created database in the run server.js using 
```
node server.js
```

Proceed to navigate to the http://localhost:8000 in your browser

### Prerequisites
NPM packages
* Mysql
* Express
* Handlebars
* Sequelize

## Built With

* Node JS
* SQL
* HTML/CSS
* Bootstrap

![Burger](https://imgur.com/BMGR8I5)

## Authors

* **Dannar Mawardi** - [GitHub IO](https://dmawardi.github.io)

See also the list of [contributors](https://github.com/dmawardi/burger-sequelize/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

## Deployed at
https://monash-bootcamp-burger.herokuapp.com/

## Acknowledgments

* Monash/Trilogy Web Application Bootcamp Coursework
