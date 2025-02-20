import { Injectable } from '@angular/core';
import { Sentence } from './sentence';
import { YesNoInterrogative } from './yesNoInterrogative';
import { Interrogative } from './interrogative';
import { Declarative } from './declarative';

@Injectable({
  providedIn: 'root'
})
export class WordOrderService {

  constructor() { }

  wordOrderYNInterrogative(sentence: Sentence): Array<String>{
    
    //TODO: make array of strings so sentence can be output with .join()
    return [
      String(sentence.isNegative),
      sentence.adverb,
      sentence.verb,
      sentence.subjectAdjective,
      sentence.subject,
      sentence.directObjectAdjective,
      sentence.directObject,
      sentence.preposition,
      sentence.indirectObjectAdjective,
      sentence.indirectObject,
      sentence.temporal
    ] 
    
  }

  wordOrderInterrogative(sentence: Sentence): Array<String>{
    return  [
      sentence.interrogative,
      String(sentence.isNegative),
      sentence.directObjectAdjective,
      sentence.directObject,
      sentence.preposition,
      sentence.indirectObjectAdjective,
      sentence.indirectObject,
      sentence.subjectAdjective,
      sentence.subject,
      sentence.adverb,
      sentence.verb,
      sentence.temporal

    ] 
  }

  wordOrderDeclarative(sentence: Sentence): Array<String>{
    return  [      
      String(sentence.isNegative),
      sentence.temporal,
      sentence.subjectAdjective,
      sentence.subject,
      sentence.adverb,
      sentence.verb,
      sentence.directObjectAdjective,
      sentence.directObject,
      sentence.preposition,
      sentence.indirectObjectAdjective,
      sentence.indirectObject,]
  }

}
