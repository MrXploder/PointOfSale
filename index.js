(function(){
	const path       = require('path');
	const express    = require('express');
	const mongoose   = require('mongoose');
	const bodyParser = require('body-parser');

	const app = express();

	mongoose.connect('mongodb://localhost:27017/EXM', { useNewUrlParser: true });
	mongoose.Promise = require('bluebird');

	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({extended: false}));

	app.use('/', express.static(path.join(__dirname, 'public')));

	app.use('/EX', require('./router/EX'));

	app.listen(3000);
	console.log('EXS Stack Running at port 3000...');
})();