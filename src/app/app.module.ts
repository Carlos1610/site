import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { QuadrasComponent } from './quadras/quadras.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { FaqComponent } from './faq/faq.component';
import { ContatoComponent } from './contato/contato.component';
import { LoginComponent } from './login/login.component';
import { QuemSomosComponent } from './quem-somos/quem-somos.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    QuadrasComponent,
    CadastroComponent,
    FaqComponent,
    ContatoComponent,
    LoginComponent,
    QuemSomosComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
