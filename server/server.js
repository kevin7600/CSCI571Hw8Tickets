const express = require('express')
const path = require('path');
const apis = require('./routes/apis');
const cors = require('cors'); 
const app = express()
const port = process.env.port || 3000;
const clientPath=path.join(__dirname, 'client');

app.use(express.static(clientPath));
app.use(express.json());
app.use(cors());

app.use('/api', apis);
app.listen(port, function () {
	console.log('Server running at:' + port);
});