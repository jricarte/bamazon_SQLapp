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
    // start();
});

// function start() {
//     inquirer
//       .prompt({
//         name: "postOrBid",
//         type: "list",
//         message: "Would you like to [POST] an auction or [BID] on an auction?",
//         choices: ["POST", "BID", "EXIT"]
//       })
//       .then(function(answer) {
//           console.log("i did it");
//       })};