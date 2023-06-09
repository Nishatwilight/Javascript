import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class CalculatorComponent {
  calcyValue1 = ''
  singleSelectValue: any;
  value: any;
  result: any;
  value2: any;
  calcyValue2=''
  final: any;
  @ViewChild('myTestDiv') myTestDiv: ElementRef | any;

  constructor(private cd: ChangeDetectorRef){

  }
  ngAfterViewInit(){
    const divEl: HTMLDivElement = this.myTestDiv.nativeElement;
    divEl.style.color = 'red'
    console.log(divEl);

  }

  clicking(){
    let value1 = Number(this.calcyValue1)
    console.log("value1", value1); 
    this.value2 = Number(this.calcyValue2) 
    console.log("value2", this.value2); 
    this.final = eval(value1 + this.singleSelectValue + this.value2)
    console.log("result", this.result);
    
  }
  updateSingleSelectGroupValue(value: any): void {
    this.singleSelectValue = value;
    console.log("this.singleSelectValue",this.singleSelectValue);
    this.cd.markForCheck();
  }
}
