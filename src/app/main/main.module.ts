import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import {  PalindromeComponent } from './palindrome/palindrome.component';
import { LandingComponent } from './landing/landing.component';
import { NbButtonGroupModule, NbButtonModule, NbCardModule, NbInputModule, NbRouteTabsetModule, NbTabsetModule } from '@nebular/theme';
import { WordCounterComponent } from './word-counter/word-counter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CelciousConvertorComponent } from './celcious-convertor/celcious-convertor.component';
import { PatternsComponent } from './patterns/patterns.component';
import { CalculatorComponent } from './calculator/calculator.component';


@NgModule({
  declarations: [
    PalindromeComponent,
    LandingComponent,
    WordCounterComponent,
    CelciousConvertorComponent,
    PatternsComponent,
    CalculatorComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    NbButtonModule,
    NbTabsetModule,
    NbRouteTabsetModule,
    NbCardModule,
    NbInputModule,
    ReactiveFormsModule,
    FormsModule,
    NbButtonGroupModule



  ]
})
export class MainModule { }
