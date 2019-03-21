const express = require('express');
const app = express();




app.get('/ping', (req, res) => {
    res.status(200)
    res.json({success: pong});
})

const port = process.env.PORT || 5011;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})