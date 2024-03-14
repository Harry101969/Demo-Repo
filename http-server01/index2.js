const express = require('express');
const bodyParser = require("body-parser");
const port = 3001; //here at many places ull see process.env.PORT || 3000 this env is and environment varibale
const app = express();
app.use(bodyParser.json());
//fs -> FileSystem: Read files on system ,write to files on system.
app.post('/backend-api/conversation', (req, res) => {
    //here usually we make database calls which are async functions to get the data required and usually takes 1 second
    const msg = req.body.message;
    console.log(msg);
    res.json({
        output: "2 + 2 = 4",
    })
    // res.send('Hii U r hacked!');
})

app.listen(port, () => {
    console.log('U r being listened by a hacker!');
})