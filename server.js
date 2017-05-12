let express = require('express');
let app = express();
var cors = require('cors');

let fs = require('fs');
let db = fs.readFileSync('db.json');
let obj = JSON.parse(db);

let bodyParser = require('body-parser');
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));

//root
/*
app.get('/', function (req, res) {
	res.send('Landing page!');
});
*/

//get answer
app.get('/answer', sendAnswer);
function sendAnswer(request, response) {
	let answer;
	let rand = Math.random() * 100;
	if (rand < 50) {
		answer = obj[0];
	}else {
		answer = obj[1];
	}
	response.send(JSON.stringify(answer));
}

app.post('/new_option', function (request, response) {
	let data = request.body;
	console.log(data);
	response.send({added: data})
});

/*app.get('/add/:prop/:v?', function (request, response) {
	let data = request.params;
	let property = data.prop;
	let value = data.v;
	let replay;
	if (!value) {
		replay = {
			msg: 'Value is required!!!'
		}
	}else {
		obj[property] = value;
		let toStorage = JSON.stringify(obj, null, 2);
		fs.writeFile('db.json', toStorage, function (err) {
			console.log('All set...')
		});
		replay = {
			msg: 'Data saved!!'
		}
	}
	response.send(replay);
});*/


/*app.get('/try/:property/', function (request, response) {
	let data = request.params.property;
	let replay;
	if (obj[data]) {
		replay = {
			msg: 'property is here!'
		}
	}else {
		replay = {
			msg: 'Not Found'
		}
	}
	response.send(replay);

});*/

let server = app.listen(3000, function () {
	console.log('Online... Port: ' + server.address().port);
});
