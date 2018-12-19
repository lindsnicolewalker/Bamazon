
This is Bamazon!
Bamazon is a command line app that utilizes MySQL and node.js to create an Amazon-like storefront.

Node modules required include:

1. inquirer
2. mysql

These modules are included within the package.json and can be installed by navigating to the correct directory and typing: "npm init" in your git bash or terminal. The Bamazon database must also be created using the included mysql script before using Bamazon.

This app currently has a single role type for users - customer. Users can access Bamazon via the customer role by using the bamazonCustomer.js file. See below for functionality.

##Customer Role:

Upon start up of the bamazonCustomer.js file, users are presented with a table of items for sale and their prices.

They will then be presented with two prompts:

1. Enter the id corresponding to the item they want to buy.
2. Enter the quantity desired.

If Bamazon has enough stock quantities to fulfill the order, the user will be presented with the total cost of their order and an updated table with products and their new available inventories. If not, then Bamazon will display a notification and will prompt the user to reselect their desired item and enter a new quantity.

