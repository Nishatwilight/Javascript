import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WordTaskRoutingModule } from './word-task-routing.module';
import { Task1Component } from './task1/task1.component';
import { IndexComponent } from './index/index.component';
import { NbButtonGroupModule, NbButtonModule, NbCardModule, NbInputModule, NbRouteTabsetModule, NbTabsetModule } from '@nebular/theme';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    Task1Component,
    IndexComponent
  ],
  imports: [
    CommonModule,
    WordTaskRoutingModule,
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
export class WordTaskModule { }
