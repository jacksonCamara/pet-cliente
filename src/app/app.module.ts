import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {      ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ClienteService } from './cliente/cliente.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClienteCadastroComponent } from './cliente/cliente-cadastro/cliente-cadastro.component';
import { ClientePesquisaComponent } from './cliente/cliente-pesquisa/cliente-pesquisa.component';
import { PetCadastroComponent } from './pet/pet-cadastro/pet-cadastro.component';
import { PetPesquisaComponent } from './pet/pet-pesquisa/pet-pesquisa.component';
import { PorteCadastroComponent } from './porte/porte-cadastro/porte-cadastro.component';
import { PortePesquisaComponent } from './porte/porte-pesquisa/porte-pesquisa.component';
import { RacaCadastroComponent } from './raca/raca-cadastro/raca-cadastro.component';
import { RacaPesquisaComponent } from './raca/raca-pesquisa/raca-pesquisa.component';
import { PeloCadastroComponent } from './pelo/pelo-cadastro/pelo-cadastro.component';
import { PeloPesquisaComponent } from './pelo/pelo-pesquisa/pelo-pesquisa.component';
import { ServicoCadastroComponent } from './servico/servico-cadastro/servico-cadastro.component';
import { ServicoPesquisaComponent } from './servico/servico-pesquisa/servico-pesquisa.component';
import { PacoteCadastroComponent } from './pacote/pacote-cadastro/pacote-cadastro.component';
import { PacotePesquisaComponent } from './pacote/pacote-pesquisa/pacote-pesquisa.component';
import { LoginComponent } from './login/login.component';
import { UsuarioCadastroComponent } from './usuario/usuario-cadastro/usuario-cadastro.component';
import { UsuarioPesquisaComponent } from './usuario/usuario-pesquisa/usuario-pesquisa.component';


@NgModule({
  declarations: [
    AppComponent,
    ClienteCadastroComponent,
    ClientePesquisaComponent,
    PetCadastroComponent,
    PetPesquisaComponent,
    PorteCadastroComponent,
    PortePesquisaComponent,
    RacaCadastroComponent,
    RacaPesquisaComponent,
    PeloCadastroComponent,
    PeloPesquisaComponent,
    ServicoCadastroComponent,
    ServicoPesquisaComponent,
    PacoteCadastroComponent,
    PacotePesquisaComponent,
    LoginComponent,
    UsuarioCadastroComponent,
    UsuarioPesquisaComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
     ReactiveFormsModule

  ],
  providers: [ClienteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
