import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CelciousConvertorComponent } from './celcious-convertor/celcious-convertor.component';
import { LandingComponent } from './landing/landing.component';
import {  PalindromeComponent } from './palindrome/palindrome.component';
import { WordCounterComponent } from './word-counter/word-counter.component';

const routes: Routes = [
  {
    path:'',
    component: LandingComponent,
    children: [
    {
      path: 'palindrome',
      component: PalindromeComponent
    },
    {
      path: 'wordCounter',
      component: WordCounterComponent
    },
    {
      path: 'celciousConvertor',
      component: CelciousConvertorComponent
    }

  ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
