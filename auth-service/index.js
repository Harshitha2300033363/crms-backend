const express = require('express');
const app = express();
const port = 3001;

app.get('/', (req, res) => res.send('Auth Service Running'));
app.listen(port, () => console.log(`Auth Service on port ${port}`));
