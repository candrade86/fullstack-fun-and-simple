const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
	res.send('Money will always be abundant for you!');
});

app.get('/demo', (req, res) => {
	res.set('X-full-stack', '4life'),
	res.status(418),
	res.send('Money will always be abundant for you!');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
