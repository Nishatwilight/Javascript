import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-color-flipper',
  templateUrl: './color-flipper.component.html',
  styleUrls: ['./color-flipper.component.scss']
})
export class ColorFlipperComponent {

  @ViewChild('colorChangeDiv') color: ElementRef | any
  textColor: any;
  colors: any;
  resultColor: any;
  randomIndex: any;
  bg: any;

   
  changeColor(){
    this.colorTexter()
  }

  colorTexter() {
    this.colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
    let result = "";
    for (let i = 1; i <= 6; i++) {
      let randomIndex = Math.floor(Math.random() * 16);
      result +=  this.colors[randomIndex];
    }
    this.resultColor = '#' + result
    console.log(this.resultColor);
  }
}
