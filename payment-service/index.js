const express = require('express');
const app = express();
const port = 3004;

app.get('/', (req, res) => res.send('Payment Service Running'));
app.listen(port, () => console.log(`Payment Service on port ${port}`));
