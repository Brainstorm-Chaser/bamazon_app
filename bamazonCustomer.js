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
    if (err){
      console.log(error)
   };
     console.log("")
     console.log("")
     console.log(table.print(res));   
    selectItem();
  })
}


function selectItem() {
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
        ]).then(function(answer) {
          console.log(answer.product_name);
       })
      })
    };

  // function purchaseItem();




