import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent {
  enterValue = ""
  value1: any;
  value2: any;
  a: any;

  enterValue2 = ""
  inputValue: any;
  roundVal: any;
  enterValue3 = ''
  value: any;
  obj: any;


  constructor(private routing: Router) {

  }
  task1() {
    this.routing.navigate([`workTask/task1`])
  }

  enter() {
    console.log('enterValue', this.enterValue);
    this.value1 = this.enterValue
    this.value2 = this.enterValue.split(' ')
    let output = ''
    this.value2.map((data: any) => {
      let a = data.split('').reverse().join().replaceAll(',', '')
      console.log(' a', a);
      output = output + " " + a
      console.log(' output', output);
    })
  }


  enter2() {
    console.log(this.permute(this.enterValue2))
    // this.inputValue = this.enterValue2
    // // this.inputValue = this.enterValue2.split('')
    // // console.log('  this.inputValue',   this.inputValue);
    // // this.inputValue.map((data: any) =>{
    // //   console.log('data',   data);
    // // })
    // let roundVal = "";
    // for (let i = 0; i < this.inputValue.length; i++) {
    //   roundVal += this.inputValue[Math.floor(Math.random() * this.inputValue.length)]
    //   console.log('this.roundVal', roundVal);
    //   // let c = roundVal.split('').reduce((acc, cur)=>{

    //   // },{})

    // }

  }

  permute(arr: any) {
    // Base case: if the array has only one element, return it as a single-element array
    if (arr.length && arr === 1) {
      return [arr];
    }
    // Recursive case: for each element in the array, generate permutations of the remaining elements and concatenate them with the current element
    const result = [];
    for (let i = 0; i < arr.length && arr; i++) {
      const current = arr[i];
      console.log("current", current);

      const remaining = arr.slice(0, i).concat(arr.slice(i + 1));
      console.log("remaining", remaining);

      const permutations: any = this.permute(remaining);
      console.log("permutations", permutations);

      for (let j = 0; j < permutations.length; j++) {
        result.push([current].concat(permutations[j]).join(''));
        console.log('result', result);

      }
    }
    return result;
  }
  enter3() {
    // console.log(this.fact(this.enterValue3));  
    console.log("perfect", this.fact(this.enterValue3));
    console.log("fails", this.func(this.enterValue3));


  }
  fact(value: any): any {
    if (value == 0)
      return 1
    return value * this.fact(value - 1)
  }
  fib(valu: any): any {
    // console.log('valu', valu);

    if (valu <= 1) {
      return valu
    }
    console.log('recursion', this.fib(valu - 1) + this.fib(valu - 2));
    return this.fib(valu - 1) + this.fib(valu - 2)
  }
  func(data: any) {
    let sequence = [];
    console.log('data', data);
    for (let i = 0; i <= data; i++) {
      sequence.push(this.fib(i))
    }
    return sequence
  }



  enter4() {
    let array = [1, 2, 3, 21, 1, 2, 3, 1, 21, 23, 6, 7, 4, 4, 7, 8];
    array.copyWithin
    let myset = new Set(array)
    console.log('myset', myset);
    let array2 = Array.from(myset)
    console.log('array2', array2);
    this.obj = {
      name: '99adas',
      id: 98990
    }
    console.log('obj', this.obj);
    let array3 = Array.from(this.obj)
    let arrays = [[4, 'ffgd'], ['sgs', 'dgfdfs', 9.90], ['fsd,', true]]
    let maps = arrays.flat()
    console.log('maps', maps);

  }
  enter5() {
    let arraysss = [23, 45, 46, 26, 65, 25, 50]
    let accending = arraysss.sort((a, b) => { return a - b; })
    // console.log('accending', accending);
    let desending = arraysss.sort((a, b) => { return b - a; })
    // console.log('desending', desending);
    let missing = [21, 22, 24, 25, 27, 28, 30]
    let accendingSort = missing.sort((a, b) => { return a - b }).length
    console.log('accendingSort', accendingSort);
    // let missingValue =[]
    for (let i = 0; i <= accendingSort; i++) {
      if (missing[i]) {
        let a = missing[i] + 1
        console.log('a', a);
        missing.push(a)
        console.log('missing', missing);
      }
    }
    // let b = missing.concat(missingValue)
    // console.log('b', b);
    // let set = new Set(b)
    // console.log(set);


  }



  enter6() {
    // let array = [1, 2, 3, 21, 1, 2, 3, 1, 21, 23, 6, 7, 4, 4, 7, 8];
    // let sorting = array.sort((a,b) =>{return a-b})
    // console.log('sorting', sorting);
    // let output = []
    // for(let i=1; i<array.length;i++){
    //   sorting.includes(i)?0:output.push(i)
    //   console.log('output', output);

    // }
    let a = ['a', 'b', ' c', 'd', 'e', 'f', "g", 'h', 'i', "j", "k"]
    console.log(a.indexOf('k'));
    let b = ['i', 'h', 'g', 'k']
    let c = b.sort();  //['g', 'h', 'i', 'k']

    console.log(c)
    let d = 0
    let start = false

    for (let i = 0; i <= a.length && a; i++) {
      if (c[0] == a[i]) {
        start = true
      }
      if (start) {
        if (c[d] !== a[i]) {
          console.log('hfjgfytdreydeyter4', a[i]);
          break;
        }
        d++
      }
    }




    let dummyarray = []
    for (let i = 0; i < a.length ; i++) {
      if (c[d] == a[i]) {
        console.log('c[d]', c[d], '=a[i]', a[i]);
        dummyarray.push(c[d])
        d++
        console.log('dummyarray', dummyarray);
      }
    }
  }
  enter7() {
    let a = [1, 2, 3, 4, 5]
    // let b = 0
    // for(let i=1;i<=a.length;i++){
    //   b+=i
    //   console.log("----------->", b);

    // }
    // for (let i = 0; i <= a.length; i++) {

    // a.reduce((acc: any,curr: any)=>{
    //   console.log(acc);
    //   console.log(curr);
      
      
    // },0)
    // }

  }

  onSubmiting(dataValues: any){
    console.log("dataValues", dataValues);
    
  }
}

