

const express = require("express");
const app = express();
//for able to parse json body on the server we need to do this:
app.use(express.json());
var users = [
    {
        name: 'Harry',
        kidneys: [
            { healthy: false },
            { healthy: true }
        ]
    }
];

app.get('/', function (req, res) {
    // const HarryKidneys = users[0].kidneys.length;
    // console.log(`${users[0].name} has ${HarryKidneys} kidneys`);

    // let response = `You have ${HarryKidneys} kidneys.\n`;

    // for (let i = 0; i < HarryKidneys; i++) {
    //     if (users[0].kidneys[i].healthy) {
    //         response += `Kidney ${i + 1} is healthy.\n`;
    //     } else {
    //         response += `Kidney ${i + 1} is not healthy.\n`;
    //     }
    // }

    // console.log(response);
    // res.send(response);
    const johnKidneys = users[0].kidneys;
    const numberOfKidneys = johnKidneys.length;
    let numberOfHealthyKidneys = 0;

    for (let i = 0; i < johnKidneys.length; i++) {
        if (johnKidneys[i].healthy) {
            numberOfHealthyKidneys = numberOfHealthyKidneys + 1;
        }
    }

    const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;

    res.json({
        numberOfKidneys,
        numberOfHealthyKidneys,
        numberOfUnhealthyKidneys
    });
});

app.post("/", function (req, res) {
    //here in case of post request data is given to the body as input and that is done as follows:
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy
    })
    res.json({
        msg: "Done!"
    })
})
//making all kidneys healthy




app.put("/", function (req, res) {
    let allHealthy = true

    for (let i = 0; i < users[0].kidneys.length; i++) {
        if (users[0].kidneys[i].healthy === false) {
            users[0].kidneys[i].healthy = true;
            allHealthy = false
        }
    }
    console.log(allHealthy);
    if (!allHealthy) {
        res.json({
            msgNew: "Kidney is healthy again."
        })
        console.log(allHealthy);
    } else {
        res.status(411).json({
            msg: 'All the kidneys are already healthy'
        })
    }
    // for (let i = 0; i < users[0].kidneys.length; i++) {
    //     if (users[0].kidneys[i].healthy === false) {
    //         users[0].kidneys[i].healthy = true;
    //         res.json({
    //             msgNew: "Kidney is healthy again."
    //         })
    //     } else {
    //         res.status(411).json({
    //             msg: 'All the kidneys are already healthy'
    //         })
    //     }
    // }


})
//and as u go to the postman and make a put request and all the unhealthy kidneys will become healthy

//Now for deleting the unhealthy kidney
app.delete("/", function (req, res) {
    //only if atleast one kidney is unhealthy only then make the change or else return 411
    if (isThereAtleastOneKidneyUnhealthy()) {
        const newKidneys = [];
        for (let i = 0; i < users[0].kidneys.length; i++) {
            if (users[0].kidneys[i].healthy) {
                newKidneys.push({
                    healthy: true,
                })
            }
        }
        users[0].kidneys = newKidneys;
        res.json({
            status: "Unhealthy kidney removed"
        })
    } else {
        res.status(411).json({
            msg: 'You have no unhealthy kidney to be removed.'
        });
    }
})
function isThereAtleastOneKidneyUnhealthy() {
    let atleastOneUnhealthyKidney = false;
    for (let i = 0; i < users[0].kidneys.length; i++) {
        if (!users[0].kidneys[i].healthy) {
            atleastOneUnhealthyKidney = true
        }
        return atleastOneUnhealthyKidney;
    }
}
app.listen(3006, function () {
    console.log("Server is running on port 3006");
});
