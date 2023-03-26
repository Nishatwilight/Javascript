import { Component } from '@angular/core';

@Component({
  selector: 'app-word-counter',
  templateUrl: './word-counter.component.html',
  styleUrls: ['./word-counter.component.scss']
})
export class WordCounterComponent {
  searchSentence = '';
  letter: any;
  values: any
  enteredValue: any
  word: any;
  value: any;
  enteredWordValue: number|any;
  enteredLetterValue: number|any;
constructor(){

}
// countCheckingLetter(){
//  this.canges(this.values)
// }
// canges(data: any){
// console.log(data);
// this.enteredValue = this.searchSentence.replaceAll(' ','').trim()
// console.log('Word Counter',this.enteredValue.length);
// this.word =  this.enteredValue.length
// }
// countCheckingWords(){
//   this.canges(this.value)
// }
// changes(data:any){
//   this.enteredValue = this.searchSentence,length
//   console.log("Letter Counter", this.enteredValue);
//   this.letter = this.enteredValue
// }
canges(data: any){

}
clicking(){
  this.enteredLetterValue = this.searchSentence.replaceAll(' ','').trim()
  console.log('W', this.enteredLetterValue);
  
  this.letter =  this.enteredLetterValue.length
  this.enteredWordValue = this.searchSentence.trim().split(' ')
  console.log('E', this.enteredWordValue);
  
  this.word = this.enteredWordValue.length



}
}
