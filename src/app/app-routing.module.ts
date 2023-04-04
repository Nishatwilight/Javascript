import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path:'main',
    loadChildren: () => import('./main/main.module').then(m => m.MainModule)
  },
  {
    path:'workTask',
    loadChildren: () => import('./word-task/word-task.module').then(m => m.WordTaskModule)
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
