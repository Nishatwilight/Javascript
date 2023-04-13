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
  enterSentence = ''
  last: any
  iChars = "!@#$%^&*()+=-[]\\\';,./{}|\":<>?";
  king: any;
  spliting: any;

  clicking() {
    this.palindrome = this.searchSentence.replaceAll(' ', '').toLowerCase()
    console.log("palindrome", this.palindrome);
    this.palindromeCheck = this.searchSentence.split('').reverse().join().replaceAll(/[," "]/g, '').toLowerCase()
    console.log('palindromeCheck', this.palindromeCheck);
    if (this.palindrome == this.palindromeCheck) {
      this.cheking = true;
    } else if (this.palindrome != this.palindromeCheck) {
      this.cheking = false
    }
  }
  lastIndex() {
    const stringVal = this.enterSentence
    console.log(stringVal);
    const lastString = this.enterSentence.trim().split(' ')
    for (let i = 0; i < lastString.length && lastString; i++) {
      this.last = lastString[i]
      console.log(this.last);
    }
    this.spliting = this.last.split('')

    console.log('lasyt', this.spliting);
    this.spliting.forEach((elements: any) => {
      console.log('element', elements);
      this.king = elements
    });

  }
  templateRef(templateReferenceValue: any){
    console.log('templateReferenceValue', templateReferenceValue.value);
    
  }
}
