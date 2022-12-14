let mongoose = require('mongoose')

const PlayerScheme = new mongoose.Schema({
    Player_Name: String,
    Matches: Number,
    Inns: Number,
    Runs: Number,
    HS: Number,
    Ave: Number,
    Date: Date
})

module.exports = mongoose.model('playerModel', PlayerScheme, 'players')