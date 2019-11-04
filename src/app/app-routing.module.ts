import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LibroListComponent } from './libro-list/libro-list.component';
import { LibroAddComponent } from './libro-add/libro-add.component';


const routes: Routes = [
  {
    path: 'librolist',
    component:LibroListComponent
  },
  {
    path:'libroadd',
    component:LibroAddComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
