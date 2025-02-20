const mongoose = require('mongoose');
const Word = require('../models/words'); // Register model

// Get: /words - lists all words
// Regardless of outcome, response must include HTML status code
// and JSON message to the requesting client
const wordsList = async(req, res) => {
    const q = await Model
        .find({}) // No filter, return all records
        .exec();

        // Uncomment to show query results on console
        // console.log(q);
    
    if(!q){
        // Database returned no data
        return res
                .status(404)
                .json(err);
    }
    else{
        // Return resulting trip list
        return res
            .status(200)
            .json(q);
    }

};

// Get: /words/:english - lists a single word
// Regardless of outcome, response must include HTML status code
// and JSON message to the requesting client
const wordsFindByEnglish = async(req, res) => {
    const q = await Model
        .find({'english' : req.params.english }) // Returns a single record
        .exec();

        // Uncomment to show query results on console
        // console.log(q);
    
    if(!q){
        // Database returned no data
        return res
                .status(404)
                .json(err);
    }
    else{
        // Return resulting trip
        return res
            .status(200)
            .json(q);
    }

};


// POST: /word - Adds a new word
// Regardless of outcome, response must include HTML status code
// And JSON message to the requesting client
const wordsAddWord = async (req, res) => { 
    getWord(req, res,
        (req, res) => { 
            word = Word.create({ 
                partOfSpeech: req.body.partOfSpeech, 
                isPronoun: req.body.isPronoun, 
                dendremar: req.body.dendremar, 
                case: req.body.case, 
                english: req.body.english 
            }).then(word  => { 
                if (word) { 
                    return res 
                        .status(201) 
                        .json(word);
                } 
            }).catch(err => { 
                return res 
                    .status(400) 
                    .json(err);
                }
            )  
        });
    };


// PUT: /word/:english - updates an existing word  
// Regardless of outcome, response must include HTML status code  
// and JSON message to the requesting client  
const wordsUpdateWord = async (req, res) => { 
    getWord(req, res, 
        (req, res) => { 
            Trip 
                .findOneAndUpdate({'english': req.params.english },{ 
                    partOfSpeech: req.body.partOfSpeech, 
                    isPronoun: req.body.isPronoun, 
                    dendremar: req.body.dendremar, 
                    case: req.body.case, 
                    english: req.body.english 
                }, { new: true }) 
                .then(word => { 
                    if (!word) { 
                        return res 
                            .status(404) 
                            .send({ 
                                message: "Word not found with English " + req.params.tripCode 
                            }); 
                    } 
                    res.send(word); 
                }).catch(err => { 
                    if (err.kind === 'ObjectId') { 
                        return res 
                            .status(404) 
                            .send({ 
                                message: "Word not found with English " + req.params.tripCode 
                            }); 
                    } 
                    return res 
                        .status(500) // server error 
                        .json(err); 
                }); 
            } 
        ); 
    };

module.exports = {
    wordsList,
    wordsFindByEnglish,
    wordsAddWord,
    wordsUpdateWord
};