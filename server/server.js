var express = require('express')
var path = require('path');

var apis = require('./routes/apis');

const cors = require('cors'); 
var app = express()
const port = process.env.port || 3000;
const clientPath=path.join(__dirname, 'client');
// const clientPath=path.join(__dirname, 'client');

// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');
// app.engine('html', require('ejs').renderFile);

app.use(express.static(clientPath));

// app.get('*',(req,res)=>{
//   res.sendFile(path.join(clientPath,'/index.html'));
// })

app.use(express.json());

// app.use(express.urlencoded({extended: false}));

//CORS
app.use(cors());

// app.use('/', index);
app.use('/api', apis);


app.listen(port, function () {
	console.log('Server running at:' + port);
});