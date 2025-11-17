const express = require('express');
const app = express();
const port = 3002;

app.get('/', (req, res) => res.send('Booking Service Running'));
app.listen(port, () => console.log(`Booking Service on port ${port}`));
