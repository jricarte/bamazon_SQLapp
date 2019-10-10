var mysql = require("mysql");
var inquirer = require('inquirer');

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "rootroot",
  database: "bamazon_DB"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("im working")
    readProducts();
});

function readProducts() {
    console.log("Selecting all products...\n");
    connection.query("SELECT * FROM products", function(err, res) {
      if (err) throw err;
      // Log all results of the SELECT statement
      console.log(res);
      connection.end();
    });
};

function start() {

    inquirer
      .prompt({
        name: "buyProduct",
        type: "list",
        message: "Select a Product you would like to buy?",
        choices: ["1-Toilet Paper", "2-Toothbrush", "3-Paper Towel","4-Non-stick Skillet", "5-Nintendo Switch", "6-Trident Gum", "7-Orange Juice", "8-Basketball", "9-Queen-size Mattress", "10-Macbook Air"]
      },
      {
        name:"productQuantity",
        type:"number",
        message: "How much of that item would you like to buy? [ENTER QUANTITY]",
        validate: function(value) {
            if (isNaN(value) === false) {
              return true;
            }
            return false;
        }
    })
      .then(function(answer) {
          console.log("i did it");
      });
}
start();