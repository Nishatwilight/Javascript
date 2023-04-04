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
  range: any;

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
  const pattern = /-?\d/g;
  const matching = data.match(pattern);
  console.log('matching', matching);
  let   output ='';
  matching.forEach((values: any) => {
    if(values>=0){
     output += values
    }
  });
  console.log('output',output);
  }

  clear2(){
     
  }
}
