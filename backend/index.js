const express = require('express');
const app = express();

const path = require('path');

app.use(express.static(path.join(__dirname, '..', 'frontend', 'build')));

app.listen(3000, () => {
    console.log('listen on port 3000');
})

app.get('/', (req,res) => {
    res.sendFile(__dirname, '..', 'frontend', 'build', 'index.js');
})
