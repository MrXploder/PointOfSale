const express    = require('express');
const path       = require('path');
const mongoose   = require('mongoose');
const bodyParser = require('body-parser');
const app				 = express();

/*MongoDB connection*/
mongoose.connect('mongodb://localhost:27017/PointOfSale', { useNewUrlParser: true });
mongoose.Promise = require('bluebird');

const BranchModel = require('./model/Branches');
const ProductsModel = require('./model/Products');
const OperatorsModel = require('./model/Operators');

let branch = new BranchModel({
	name: "Botilleria Villa Alemana",
	address: "Victoria #186",
	phone_number: 56957139808,
});

let operator = new OperatorsModel({
	rut: "17.808.998-6",
	full_name: "Luis Arancibia",
	nick_name: "Luis",
	password: "root",
	branch: "5b7245b00000000000000000",
});

let product = new ProductsModel({
	name: "Cerveza Escudo 1.2LT",
	code: "7802100020130",
	stock: 100,
	price: 900,
});

Promise.all([branch.save(), operator.save(), product.save()]).then(function(){
	console.log("Populated MongoDB Successfuly");
	process.exit();
});
/***********************************************/