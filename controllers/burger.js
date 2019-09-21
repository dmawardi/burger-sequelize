var db = require("../models");

// Create burger object containing functions for export
burger = {
    // Create a burger
    create: function (newBurger_name) {
        // Create a new promise
        return new Promise(function (resolve, reject) {
            // Insert the new burger name into the burger tables
            db.burger.create({
                burger_name: newBurger_name
            }).then(function (data) {
                // Then, pass on the data to resolve promise
                resolve(data);
            }).catch(function (err) {
                // Else, reject promise with error
                reject(err)
            });
        });
    },
    // Devour a burger: update the burger's devoured value to true
    devour: function (id) {
        // Create a new promise
        return new Promise(function (resolve, reject) {
            // Update devoured value using id
            db.burger.update({
                devoured: 1
            }, {
                where: {
                    id: id
                }
            }).then(function (data) {
                // Then, pass on the data to resolve promise
                resolve(data);
            }).catch(function (err) {
                // Else, reject promise with error
                reject(err)
            });
        });
    },
    // Select/Get all records from the burgers table
    select: function () {
        // Create a new promise
        return new Promise(function (resolve, reject) {
            db.burger.findAll({}).then(function (res) {
                // Then, pass on the data to resolve promise
                resolve(res);
            }).catch(function (err) {
                // Else, reject promise with error
                reject(err);
            });
        });
    }
}


// Export
module.exports = burger;