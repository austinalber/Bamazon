// Required NPMs
const inquirer = require('inquirer');
const mysql = require('mysql');

// Prompts for inquirer (id & units)
const itemPrompt =[
    {
        type: input,
        message: "What is the ID of the item you would like to purchase?",
        name: "id"
    },
    {
        type: input,
        message: "How many units of the product would you like to purchase?",
        name: "units"
    }
];

// Functions
function bamazon() {
    // Display items to user

    // Run prompt function for user inputs

    // Check if item id & units are applicable
        checkInput(response.id, response.units);
        if(check) {
            // If check is successful, update SQL database & display purchase information to user
        } else {
            // If check fails
            console.log("Insufficient quantity or Invalid ID")
        }    
}

function checkInput(id, units) {

    return check = true;
    return check = false;
}

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
    bamazon();
});
