import { Injectable } from '@angular/core';
import { Sentence } from './sentence';
import * as wordsFindbyEnglish from "./controllers/words";
import mongoose from 'mongoose';

@Injectable({
  providedIn: 'root'
})
export class WordSearchService {

  constructor() { }

  wordsFindbyEnglish = wordsFindbyEnglish;
  
  // Define the trip schema  
  wordSchema = new mongoose.Schema({
    partOfSpeech: {type: String, required: true},
    isPronoun: {type: Boolean},
    dendremar: {type: String, required: true},
    case: {type: String},
    english: {type: String}
  });

  
  searchWords(sentence: Sentence): Sentence {
    if (sentence.adverb){
      sentence.adverb = wordsFindbyEnglish(sentence.adverb).dendremar;
    }
    if (sentence.verb){
      sentence.verb = wordsFindbyEnglish(sentence.verb).dendremar;
    }
    if (sentence.subjectAdjective){
      sentence.subjectAdjective = wordsFindbyEnglish(sentence.subjectAdjective).dendremar;
    }
    if (sentence.subject){
      sentence.subject = wordsFindbyEnglish(sentence.subject).dendremar;
    }
    if (sentence.directObjectAdjective){
      sentence.directObjectAdjective = wordsFindbyEnglish(sentence.directObjectAdjective).dendremar;
    }
    if (sentence.directObject){
      sentence.directObject = wordsFindbyEnglish(sentence.directObject).dendremar;
    }
    if (sentence.preposition){
      sentence.preposition = wordsFindbyEnglish(sentence.preposition).dendremar;
    }
    if (sentence.indirectObjectAdjective){
      sentence.indirectObjectAdjective = wordsFindbyEnglish(sentence.indirectObjectAdjective).dendremar;
    }
    if (sentence.indirectObject){
      sentence.indirectObject = wordsFindbyEnglish(sentence.indirectObject).dendremar;
    }
    if (sentence.temporal){
      sentence.temporal = wordsFindbyEnglish(sentence.temporal).dendremar;
    }

    return sentence;

  }


}
