const express = require('express');
const app = express();
const port = 5000;



app.get('/ping', (req, res) => {
    res.status(200)
    res.json({success: pong});
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})

