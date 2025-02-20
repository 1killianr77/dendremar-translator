import { Component, OnInit, inject} from '@angular/core';
import { Sentence } from '../sentence';
import { WordOrderService } from '../word-order.service';
import { ConjugationDeclensionService } from '../conjugation-declension.service';
import { WordSearchService } from '../word-search.service';

@Component({
  selector: 'app-translator-form',
  templateUrl: './translator-form.component.html',
  styleUrls: ['./translator-form.component.css']
})
export class TranslatorFormComponent implements OnInit {

  constructor(
    private wordOrderService: WordOrderService = 
    inject(WordOrderService),

    private conjugationDeclensionService: ConjugationDeclensionService = 
    inject(ConjugationDeclensionService),

    private wordSearchService: WordSearchService = 
    inject(WordSearchService)

  ) { }
  
  
  mood = ["Y/N interrogative", "interrogative", "declarative"]
  temporal = ["past", "present", "future"]

  isNegative = ["true", "false"]
  isSubjectPlural = [true, false]
  isDOPlural = [true, false]
  isIOPlural = [true, false]

  model = new Sentence(this.mood[2], "I", "", this.isSubjectPlural[1],
     "you", "", this.isDOPlural[1],  "ball", "", this.isIOPlural[1], 
     "throw", "", "to", "why", this.temporal[0], "")
    
  submitted = false;

  res = "res";


  onSubmit() {this.submitted = true;

    //this.model = this.wordSearchService.searchWords(this.model);

    this.model = this.conjugationDeclensionService.conjugate(this.model)
    
    if (this.model.mood == "Y/N interrogative"){
      this.res = this.wordOrderService.
      wordOrderYNInterrogative(this.model).join(" ")
    }
    else if (this.model.mood == "interrogative"){
      this.res = this.wordOrderService.
      wordOrderInterrogative(this.model).join(" ")
    }
    else{
      this.res = this.wordOrderService.
      wordOrderDeclarative(this.model).join(" ")
    }

  }

  onEdit(){
    this.submitted = false;
  }

  ngOnInit() {
  }

}
