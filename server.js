const express = require('express');
const server = express();
const swig = require("swig");

server.use(express.static(`${__dirname}/src`));
server.engine('html', swig.renderFile);
server.set('view engine', 'html');
server.set('views', `${__dirname}/../../views`);
swig.setDefaults({ cache: false });

server.get('/', (req, res) => {
	res.render("index");
});

server.listen(3000);