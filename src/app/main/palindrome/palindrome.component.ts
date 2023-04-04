import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-palindrome',
  templateUrl: './palindrome.component.html',
  styleUrls: ['./palindrome.component.scss'],
  // encapsulation: ViewEncapsulation.None
})
export class PalindromeComponent {

  searchSentence = '';
  cheking: boolean = true
  palindrome: any;
  palindromeCheck: any;

  clicking(){
    this.palindrome = this.searchSentence.replaceAll(' ', '').toLowerCase()
    console.log("palindrome", this.palindrome);
    this.palindromeCheck =this.searchSentence.split('').reverse().join().replaceAll(/[," "]/g, '').toLowerCase()
    console.log('palindromeCheck', this.palindromeCheck);      
    if(this.palindrome == this.palindromeCheck){
      this.cheking= true;
    } else if(this.palindrome != this.palindromeCheck){
      this.cheking= false  
    }
  }
}
