const express = require('express')
const app = express();
const Player = require('./mongoSchema');
const mongoConnect = require('./mongoConnect');
const cors = require('cors');
const { json } = require('express');


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
console.log("Players", Player);


app.get('/', function (req, res) {
    res.send("hello it is my first express application")
    Player.countDocuments().exec().then(count => {
        console.log(count)
    }).catch(err => {
        console.error(err)
    })
})

app.post('/insert', function (req, res) {
    var Player_Name = req.body.Player_Name;
    var Matches = req.body.Matches;
    var Inns = req.body.Inns;
    var Runs = req.body.Runs;
    var HS = req.body.HS;
    var Ave = req.body.Ave;

    const doc = new Player({ Player_Name: Player_Name, Matches: Matches, Inns: Inns, Runs: Runs, HS: HS, Ave: Ave })
    doc.save(function (err, doc) {
        if (err) return console.error(err);
        console.log("saving single document", doc)
    })
})
app.post('/update', function (req, res) {
    var id = req.body._id;
    var Matches = req.body.Matches;
    var Runs = req.body.Runs;
    var HS = req.body.HS;
    var Date = req.body.Date;
    console.log(req.body)
    Player.findByIdAndUpdate(id, { Matches: Matches, Runs: Runs, HS: HS, Date: Date }, function (err, doc) {
        if (err) console.log(err);

        else
            res.status(200).json({ 'Player_Name': 'Updated' })

    })

})


app.post('/delete', function (req, res) {
    console.log(req.body)
    var id = req.body._id

    Player.deleteOne({ _id: id }, function (err) {
        if (err) console.log(err);
        else
            console.log("Successful deletion");
    })
})




app.get('/show/:PlayerName', function (req, res) {
    var Player_Name = req.params.PlayerName
    console.log(Player_Name)
    Player.find({ Player_Name: Player_Name }, function (err, data) {
        if (err) console.log(err);
        var list = [];
        for (var i = 0; i < Object.keys(data).length; i++) {
            console.log(data[i]);
            var data1 = {
                _id: data[i]._id,
                Matches: data[i].Matches,
                Runs: data[i].Runs,
                HS: data[i].HS
            }
            list.push(data1);
        }
        // var data1 = {
        //     _id: data._id,
        //     Matches: data.Matches,
        //     Runs: data.Runs,
        //     HS: data.HS
        // }
        // console.log(data)
        res.json(list)
    })
})

app.get('/showMany/:PlayerName', function (req, res) {
    var Player_Name = req.params.PlayerName

    Player.find({ Player_Name: Player_Name }, function (err, data) {
        if (err) console.log(err);
        var data1 = {
            _id: data._id,
            Matches: data.Matches,
            Runs: data.Runs,
            HS: data.HS
        }
        res.json(data1)
    })
})


app.get('/displayByMatches/:matches', function (req, res) {
    var matches = req.params.matches
    console.log(matches)
    Player.find({ Matches: { $gte: matches } }, function (err, data) {
        if (err) console.log(err);
        else res.json(data)

    }).limit(20)
})


app.get('/displayByHS/:hs', function (req, res) {
    var hs = req.params.hs
    console.log(hs)
    Player.find({ HS: { $gte: hs } }, function (err, data) {
        if (err) console.log(err);
        else res.json(data)
        console.log(data.HS)

    })
})

app.listen(5000, function () { console.log("listening on port 5000") });