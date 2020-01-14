var connection = require("./connection.js");

// Object Relational Mapper (ORM)

// The ?? signs are for swapping out table or column names
// The ? signs are for swapping out other values
// These help avoid SQL injection
// https://en.wikipedia.org/wiki/SQL_injection
var orm = {

  displayAllNames: function(colToSearch, tableName) {
    var queryString = "SELECT ?? FROM ??;";
    connection.query(queryString, [colToSearch, tableName], function(err, result) {
      if (err) throw err;
      console.log(result);
    })
  },
  displayGrownUpParties: function(colToSearch, tableName, partyType, userInquiryPartyType) {
    var queryString = "SELECT ?? FROM ?? WHERE ?? = ?;";
    connection.query(queryString, [colToSearch, tableName, partyType, userInquiryPartyType], function(err, result) {
      if (err) throw err;
      console.log(result);
    })
  },
  displayClientParties: function(clientName, partyName, clientTable, partyTable, partyTableForeignKey) {
    var queryString = "SELECT ??, ?? FROM ?? LEFT JOIN ?? ON ??.?? = ??.id";
    connection.query(queryString, [clientName, partyName, clientTable, partyTable, partyTable, partyTableForeignKey, clientTable], function(err, result) {
      if (err) throw err;
      console.log(result);
    })
  }


  // selectWhere: function(tableInput, colToSearch, valOfCol) {
  //   var queryString = "SELECT * FROM ?? WHERE ?? = ?";
  //   connection.query(queryString, [tableInput, colToSearch, valOfCol], function(err, result) {
  //     if (err) throw err;
  //     console.log(result);
  //   });
  // },
  // selectAndOrder: function(whatToSelect, table, orderCol) {
  //   var queryString = "SELECT ?? FROM ?? ORDER BY ?? DESC";
  //   console.log(queryString);
  //   connection.query(queryString, [whatToSelect, table, orderCol], function(err, result) {
  //     if (err) throw err;
  //     console.log(result);
  //   });
  // },
  // findWhoHasMost: function(tableOneCol, tableTwoForeignKey, tableOne, tableTwo) {
  //   var queryString =
  //     "SELECT ??, COUNT(??) AS count FROM ?? LEFT JOIN ?? ON ??.??= ??.id GROUP BY ?? ORDER BY count DESC LIMIT 1";

  //   connection.query(
  //     queryString,
  //     [tableOneCol, tableOneCol, tableOne, tableTwo, tableTwo, tableTwoForeignKey, tableOne, tableOneCol],
  //     function(err, result) {
  //       if (err) throw err;
  //       console.log(result);
  //     }
  //   );
  // }
};

module.exports = orm;
