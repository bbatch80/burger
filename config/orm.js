var connection = require("./connection.js");

// selectAll() 

// insertOne() 

// updateOne() 


// Export the ORM object in module.exports.

var orm = {
	selectAll: function(tableInput, cb){
		var queryString = "SELECT * FROM ??";

		console.log(queryString);
		connection.query(queryString, [tableInput], function(err, result){
			if (err) throw err;
			cb(result);
			
		});
	},
	insertOne: function(tableInput, nameInput, cb){
		var queryString = "INSERT INTO ?? (burger_name) VALUES ('??')";

		console.log(queryString);
		connection.query(queryString, [tableInput, nameInput], function(err, result) {
			if (err) throw err;
			cb(result);
		
		});
	},
	updateOne: function(tableInput, idInput, cb){
		var queryString = "UPDATE ?? SET devoured = 1  WHERE burger_name = '??'";

		console.log(queryString);
		connection.query(queryString, [tableInput, idInput], function(err, result){
			if (err) throw err;
			cb(result);
						
		});
	}
};

module.exports = orm;
