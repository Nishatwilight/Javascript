import { Component } from '@angular/core';

@Component({
  selector: 'app-celcious-convertor',
  templateUrl: './celcious-convertor.component.html',
  styleUrls: ['./celcious-convertor.component.scss']
})
export class CelciousConvertorComponent {
  c2fConvertor: number = 0
  f2cConvertor: number = 0
  c2fValue: any;
  f2cValue: any;
  c2F: boolean = true;
  farenit: number| any;
  celcious: number| any;
  constructor(){

  }
  c2fConverting(){
    this.c2fValue = this.c2fConvertor
    console.log("c2fValue", this.c2fValue);
    // if(this.c2fValue= /[^0-9]/){
    //   this.c2F = true
    // } else 
    // this.c2F = false
    this.farenit = (this.c2fValue * (9/5) +32).toFixed(2)
    
  }
  f2cConverting(){
    this.f2cValue = this.f2cConvertor
    console.log("f2cValue", this.f2cValue);
    // if(this.c2fValue= /[^0-9]/){
    //   this.c2F = true
    // } else 
    // this.c2F = false
    this.celcious =((this.f2cValue - 32)* 5/9).toFixed(2)
    //32°F − 32) × 5/9 
  }
}
