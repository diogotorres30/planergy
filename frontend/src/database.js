var mysql = require('mysql');

var con = mysql.createConnection({
  host: "db.tecnico.ulisboa.pt",
  user: "ist176935",
  password: "waxb9566"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
