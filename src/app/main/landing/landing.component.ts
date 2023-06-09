import { Component } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent {

  constructor() {

  }
  tabs = [
    {
      title: 'Word Counter',
      route: '/main/wordCounter',
      // icon: 'home',
      responsive: true, // hide title before `$tabset-tab-text-hide-breakpoint` value
    },
    {
      title: 'Palindrome Checker',
      route: '/main/palindrome',
    },
    {
      title: 'Celcious Convertor',
      route: '/main/celciousConvertor',
    },
    {
      title: 'Patterns',
      route: '/main/patterns', 
    },
    {
      title: 'Calculator',
      route: '/main/calculator', 
    },
    {
      title: 'Color Flipper',
      route: '/main/colorFlipper', 
    },
    {
      title: 'Functions', //task1
      route: '/main/functions', 
    },
  ];

}
