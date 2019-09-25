import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { QuadrasComponent } from './quadras/quadras.component';


const routes: Routes = [
  {path: '',component: HomeComponent},
  {path: 'quadras',component: QuadrasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
