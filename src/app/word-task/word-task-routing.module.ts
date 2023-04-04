import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { Task1Component } from './task1/task1.component';

const routes: Routes = [
  {
    path:'',
    component: IndexComponent,
    children: [
      {
        path:'task1',
      component: Task1Component
      }
    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WordTaskRoutingModule { }
