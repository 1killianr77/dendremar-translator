import { Injectable } from '@angular/core';
import { Sentence } from './sentence';

@Injectable({
  providedIn: 'root'
})
export class ConjugationDeclensionService {

  newSentence = new Sentence()

  constructor(
  ) { }

  conjugate(sentence:Sentence): Sentence {

    this.newSentence = sentence;
  
    if (sentence.directObject){
      if (sentence.isDOPlural){
        this.newSentence.directObject = "tsar" + this.newSentence.directObject;
        if(sentence.directObjectAdjective){
          this.newSentence.directObjectAdjective = "" + this.newSentence.directObjectAdjective + "hx"
        }
      }
      else{
        this.newSentence.directObject = "tsol" + this.newSentence.directObject;
        if(sentence.directObjectAdjective){
          this.newSentence.directObjectAdjective = "" + this.newSentence.directObjectAdjective + "x/ax"
        }
      }
    }
    if (sentence.indirectObject){
      if (sentence.isIOPlural){
        this.newSentence.indirectObject = "geer" + this.newSentence.indirectObject;
        if(sentence.indirectObjectAdjective){
          this.newSentence.indirectObjectAdjective = "" + this.newSentence.indirectObjectAdjective + "aeg"
        }
      }
      else{
        this.newSentence.indirectObject = "ger" + this.newSentence.indirectObject;
        if(sentence.indirectObjectAdjective){
          this.newSentence.indirectObjectAdjective = "" + this.newSentence.indirectObjectAdjective + "g/eg"
        }
      }
    }

    if (sentence.isNegative == "true"){
      this.newSentence.isNegative = "Dhet/Dhot"
    }
    else if (sentence.isNegative == "false"){
      this.newSentence.isNegative = "Tak/Ad"
    }
    
    return this.newSentence;

  }

}
