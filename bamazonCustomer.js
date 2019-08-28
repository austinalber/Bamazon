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
    inquirer.prompt(itemPrompt).then(function (res) {
        // Pull items from bamazon.sql
        connection.query('SELECT product_name, price, stock_quantity FROM products WHERE id = ?', [res.id], function (err, res) {
            if (err) throw err;

            console.log('');

            if (res.length === 0) {
                console.log('Item does not exist. Please select another item.');
            } 
            else if (res.units > res[0].stock_quantity || res[0].stock_quantity === 0) {
                console.log('There is no stock left at this moment, please check again later');
            } 
            else {
                let newPrice = parseInt(res[0].price);
                let purchaseUnits = parseInt(res.units);
                let productName = res[0].product_name; 
                let total = newPrice * purchaseUnits;
                let actualStock = res[0].stock_quantity - res.units;
                console.log(`The total cost for your items will be $${total} for ${purchaseUnits} ${productName}`);
                connection.query(`UPDATE products SET stock_quantity = ${actualStock} WHERE id = ${res.id}`, function (err) {
            
                if (err) throw (err);
                })
            }
            
            connection.end();
        })
  
    })
}

function displayTable() {
    connection.query('SELECT * FROM products', function (err, res) {
        if (err) throw err;
        console.log('');
        console.table(res);
        userPrompt();
      });
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

    // Display Table
    displayTable();

    // Run Bamazon function
    bamazon();
});
