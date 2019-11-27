import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { QuadrasComponent } from './quadras/quadras.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { FaqComponent } from './faq/faq.component';
import { ContatoComponent } from './contato/contato.component';
import { LoginComponent } from './login/login.component';
import { QuemSomosComponent } from './quem-somos/quem-somos.component';


const routes: Routes = [
  {path: '',component: HomeComponent},
  {path: 'quadras',component: QuadrasComponent},
  {path: 'cadastro',component: CadastroComponent},
  {path:'faq',component: FaqComponent},
  {path:'contato',component: ContatoComponent},
  {path:'login',component: LoginComponent},
  {path:'quem-somos',component: QuemSomosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
