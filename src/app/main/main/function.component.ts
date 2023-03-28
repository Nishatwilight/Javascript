import { Component } from '@angular/core';

@Component({
  selector: 'app-function',
  templateUrl: './function.component.html',
  styleUrls: ['./function.component.scss']
})
export class FunctionComponent {
  getValue = ''
  sumss: any;
  summimg: any;
  solution: any;
  getPositiveValue=''
  arrayData: any;
  constructor(){

  }

  changes(data: any){
    let values = this.getValue
    console.log('values',data); 
   this.summimg = values.toString().split('').join('+');    
   console.log('datas', this.summimg); 
    this.solution = eval(this.summimg)
  }

  clear1(){
    this.summimg = ""
    this.getValue= ""
    console.log('clearing', this.getValue);
    
  }

  positiveVals(data: any){
  console.log("positiveVals", data);
  this.arrayData = data.split('')
  console.log("this.arrayData", this.arrayData);
  this.arrayData.forEach((values: any)=>{
    console.log("values", values);
    if(values<=0){
      let negative = values
      console.log("negative", negative);
    }
    else if( values>=1){
      let positive = values
      console.log("positive", positive);
    }
  })

  }

  clear2(){
     
  }
}
