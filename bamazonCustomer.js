var mysql = require("mysql");
var inquirer = require("inquirer");
var table = require('easy-table');

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
  displayTable();
  
});

function displayTable() {
  connection.query("SELECT * FROM items", function(err, res) {
    // var stockQuantity = res[item].stock_quantity
    if (err){
      console.log(error)
   };
     console.log("")
     console.log("")
     console.log(table.print(res));
  })
}

updateItem();



function updateItem() {
  
  // query the database for all items being auctioned
  connection.query("SELECT * FROM items", function(err, res) {
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
          // var stockTotal = parseInt(stock_quantity) - parseInt(answer.amount)
          // console.log(stockTotal)

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




