/*
*@author: MrXploder
*@url: https://mrxploder.github.io/MrXploder/
*@date: 08/2018
*@description: Invoices DB Schema for Mongoose
*/
(function() {
	const mongoose = require('mongoose');
	const Schema = mongoose.Schema;

	/*Do not explicit declare "_id". Let mongoose handle it by default.*/
	const InvoicesSchema = new Schema({
		operator_id: {type: Schema.Types.ObjectId, required: true, ref: 'Operators'},
		cash_payment: {type: Number, min: 0, required: true},
		product_list: [{
			product_id: {type: Schema.Types.ObjectId, ref: 'Products'},
			qty: Number,
		}],
	});

	module.exports = mongoose.model('Invoices', InvoicesSchema);
})();