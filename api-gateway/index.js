const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('API Gateway Running'));
app.listen(port, () => console.log(`API Gateway on port ${port}`));
