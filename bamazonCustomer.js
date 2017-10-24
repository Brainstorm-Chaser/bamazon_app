var mysql = require("mysql");
var inquirer = require("inquirer");
var table = require('easy-table');

var itemNames;
var items;
var active = true;

var connection = mysql.createConnection({
host: "localhost",
port:  3306,

  // Your username
  user: "root",

  // Your password
  password: "Prelude123",
  database: "bamazonDB",
  });

connection.connect(function(err) {
  if (err) throw err;
  // console.log("connected as id " + connection.threadId);
  // // showAllData();
  // // searchArtist();
  // displayTable();
  
});

main();


function main() {
  console.log('Fetching items from db...')  
  connection
      .query("SELECT * FROM items", function(err, res) {
      // var stockQuantity = res[item].stock_quantity
      if (err){
        console.log(error)
      };

      itemNames = _buildItemArray(res)
      items = parseItems(res)
      _displayTable(res)
      // updateItem();

      promptUserForSelection(itemNames)
      .then(handleUserSelection)

      // math function
      // update database values
      // show user cost
  })
  
}

function parseItems(dbResults) {
  var items = []
  for (var i=0; i< dbResults.length; i++) {
    var item = {}
    item.item_id = dbResults[i].item_id
    item.product_name = dbResults[i].product_name
    item.department = dbResults[i].department
    item.stock_quantity = dbResults[i].stock_quantity
    item.price = dbResults[i].price
    items.push(item)
  }
  return items
}




function _displayTable(res) {
  console.log("")
  console.log("")  
  console.log(table.print(res));
}

function _buildItemArray(res) {
  var itemArray = [];
  for (var i = 0; i < res.length; i++) {
    itemArray.push(res[i].product_name);
  }
  return itemArray;
}

function promptUserForSelection(choiceArray) {
  console.log('PROMPT USER FOR SELECTION -- ', items)
  return inquirer
    .prompt([
      {
        name: "choice",
        type: "rawlist",
        choices: choiceArray,
        message: "What item would you like to purchase?"
      },
      {
        name: "amount",
        type: "input",        
        message: "How many would you like?"
      }
    ])
}

function handleUserSelection(answer) {
          // var stockTotal = parseInt(stock_quantity) - parseInt(answer.amount)
          console.log("ANSWER :: ", answer)

          // connection.query(
          //   "UPDATE items SET ? WHERE ?",
          //   [
          //     {
          //       stock_quantity: answer.amount
          //     },
          //     {
          //       item_id: answer.choice
          //     }
          //   ],
          //   function(error) {
          //     // console.log(answer.amount)
          //     if (error) throw err;
          //     console.log("Bid placed successfully!");
          //     // start();
          //   })
          // var productName = answer.product_name
          // console.log(productName);
          // var stockQuantity = (answer.stock_quantity)
          // console.log(stockQuantity)
          // // var answer = answer.amount
          // // console.log(answer)
          // return answer.amount

          
       }

/*

1. get all items from db
2. display in a table
3. prompt user for for an item
4. take user input for item
5. prompt user for item amount
6. take user input for amount
7. query db for item and/or item quantity
8. do math: 
    - check if quantity > amount ? continue : return error stuff
    - calc cost of purchase
    - calc remaining quantity: quantity - amount
9. update item quanity in db
10. display cost to user

*/



function updateItem() {
  
// subtract the user's amount selection from the stock_quantity value

// get user amount selection   -> from inquirer
// get stock quantity          ->

// do math

// set new values for user amount & stock quantity



  connection.query("SELECT * FROM items", function(err, res) { // getting items from user
    if (err) throw err;
    inquirer
      .prompt([
        {
          name: "choice",
          type: "rawlist",
          choices: function() {
            var itemArray = [];
            for (var i = 0; i < res.length; i++) {
              itemArray.push(res[i].product_name);
            }
            return itemArray;
          },
          message: "What item would you like to purchase?"
        },
        {
          name: "amount",
          type: "input",        
          message: "How many would you like?"
        }

        ]).then(function(answer) {
          var stockTotal = parseInt(stock_quantity) - parseInt(answer.amount)
          console.log(stockTotal)

          connection.query(
            "UPDATE items SET ? WHERE ?",
            [
              {
                stock_quantity: answer.amount
              },
              {
                item_id: answer.choice
              }
            ],
            function(error) {
              // console.log(answer.amount)
              if (error) throw err;
              console.log("Bid placed successfully!");
              // start();
            })
          // var productName = answer.product_name
          // console.log(productName);
          // var stockQuantity = (answer.stock_quantity)
          // console.log(stockQuantity)
          // // var answer = answer.amount
          // // console.log(answer)
          // return answer.amount

          
       })
      })
    };

  // function purchaseItem();




