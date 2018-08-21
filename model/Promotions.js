/*
*@author: MrXploder
*@url: https://mrxploder.github.io/MrXploder/
*@date: 08/2018
*@description: Promotions DB Schema for Mongoose
*/
(function() {
	const mongoose = require('mongoose');
	const Schema = mongoose.Schema;

	const ProductListSchema = new Schema({
		product_id: Schema.Types.ObjectId,
		qty: {type: Number, default: 1},
	}, {_id: false});

	/*Do not explicit declare "_id". Let mongoose handle it by default.*/
	const PromotionsSchema = new Schema({
		branch_id: Schema.Types.ObjectId,
		name: String,
		product_list: [ProductListSchema],
		discount: Number, /*percentage*/
	});

	module.exports = mongoose.model('Promotions', PromotionsSchema);
})();