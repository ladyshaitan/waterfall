const app = require('express')();
const bodyParser = require('body-parser');

app.use(bodyParser);

app.get('/', (req, res) => {
	res.send("hello anne\n");
})

app.get('/:arr/solution', (req, res) => {
	console.log(req.params);
})

app.listen(3000, () => {
	console.log('listening on 3000');
})