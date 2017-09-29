var orm = require("../config/orm.js");


var createOrDevour = {
	createBurger: function(nameInput, cb){
		orm.insertOne("burgers", nameInput, cb);
	},
	allBurgers: function(tableInput, cb){
		orm.selectAll(cb);
	},
	devour: function(nameInput, cb){
		orm.updateOne("burgers", nameInput, cb)
	}
};

module.exports = createOrDevour;