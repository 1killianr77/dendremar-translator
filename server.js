const express = require('express');
const app = express();
//const port = 3000;
app.listen(3000, () => console.log("Server is running"));
const mongoose = require("mongoose");

const COMPASS_URI = "mongodb://127.0.0.1:27017/dendremar"

mongoose.connect(COMPASS_URI);

const wordSchema = new mongoose.Schema({
    partOfSpeech: {type: String, required: true},
    isPronoun: {type: Boolean},
    dendremar: {type: String, required: true},
    case: {type: String},
    english: {type: String, required: true}
});

const Words = mongoose.model('Words', wordSchema);


app.get('/', async(req, res) => {
    const q = await Words
        .find({})
        .exec();
    if(!q){
        return res.status(404).json(err);
    }
    else{
        return res.status(200).json(q)
    }
});