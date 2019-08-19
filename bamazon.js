// Required NPMs
const inquirer = require('inquirer');
const mysql = require('mysql');

// Prompts for inquirer


// User Input


// Variables


// Functions


// Connect to MySQL
var connection = mysql.createConnection({
    host: "localhost",
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: "root",
  
    // Your password
    password: "Gamecube1",
    database: "products_dq"
  });
  
  connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);

    // Run Bamazon function
    
  });
