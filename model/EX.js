(function() {
	const mongoose = require('mongoose');
	const Schema = mongoose.Schema;

	const EXSchema = new Schema({
	});

	module.exports = mongoose.model('EXModel', EXSchema);
})();