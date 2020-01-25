const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('<h1>This is the home page</h1> <p>just for testing</p>'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
