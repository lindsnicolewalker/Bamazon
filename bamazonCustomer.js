var mysql = require("mysql");
var inquirer = require("inquirer");
var currentStock = [];
var productId;

require("console.table");
var connection = mysql.createConnection({
    host: "localhost",

    port: 3306,

    user: "root",

    password: "password",
    database: "bamazon_db"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    displayInventory();
});


function updateInventory(currentInventory, productId) {
    connection.query(
        "UPDATE products SET ? WHERE ?",
        [
            {
                stock_quantity: currentInventory
            },
            {
                item_id: productId
            }
        ],
        function (error) {
            if (error) throw err;
            console.log("Inventory Updated");
            displayInventory();
        }
    );

};

function displayInventory () {

    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;
        currentStock = res;
        console.table(res);

        inquirer.prompt([
            {
                type: "input",
                message: "What is the product id of the item you would like to purchase?",
                name: "productId"
            },
            {
                type: "input",
                message: "What quantity would you like to purchase?",
                name: "stock_quantity"
            }

        ]).then(function (inquirerResponse) {

            console.log(inquirerResponse);
            var currentInventory;

            for (i = 0; i < res.length; i++) {
               

                if (inquirerResponse.productId == currentStock[i].item_id) {
                    currentInventory = currentStock[i].stock_quantity; 

                // console.log(inquirerResponse.productId == currentStock[i].item_id);
                // console.log(inquirerResponse.productId);
                // console.table(currentStock);
                }
                
            }
            console.log("current inv");
            console.log(currentInventory);

            if (currentInventory) {
                    // console.log(currentStock);
                    // console.log(currentInventory >= inquirerResponse.stock_quantity);
                    // console.log(currentInventory -= inquirerResponse.stock_quantity);
                    console.log(currentInventory);
                if (currentInventory >= inquirerResponse.stock_quantity) {
                    currentInventory -= inquirerResponse.stock_quantity;
                    console.log("inside second if")
                    updateInventory(currentInventory, parseInt(inquirerResponse.productId));
                    console.log(inquirerResponse.productId); 
                    console.log(currentInventory);

                    
                }else{
                    console.log("We do not have enough inventory to fill your request, please select another quantity");
                    displayInventory();
                }
            }

    
        });



    });
}
