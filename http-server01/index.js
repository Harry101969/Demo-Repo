
const express = require('express');

const app = express();
const port = 3000;
const bodyParser = require("body-parser");

app.use(bodyParser.json({
    name: 'Harsh',
    age: 19,
    Degree: 'B.E in Information Technology'
}));
app.get("/route-handler", function (req, res) {

    //req usually includes: header,body ,query parameters
    // and usually the response is in the form of json 
    res.json({
        name: "Harsh Agarwal",
        age: 19
    })
})

app.get('/converse', (req, res) => {
    console.log(req.headers)//this is how u can get access to the object of all the headers 
    //And for specifically getting info about a heaeder eg Suppose a header names Authorization is to be bought then we would do it like this : console.log(req.headers['Authorization]);note the capital A of Authorization will be sent back using small a by the server.
    //Getting the body info just like headers

    res.send('Hello Fellas!!')
})
app.get('/', (req, res) => {
    // res.send('Hello World!');
    res.send('<b>Harsh Is The King Of The World!!</b>')
    console.log(req.body);
});//so we giving a path using / just like we did in regular js and sending a response whenever a request is hit on out http server.
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})