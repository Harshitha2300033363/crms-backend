const express = require('express');
const app = express();
const port = 3003;

app.get('/', (req, res) => res.send('Fleet Service Running'));
app.listen(port, () => console.log(`Fleet Service on port ${port}`));
