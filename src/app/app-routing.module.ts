import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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

const routes: Routes = [
  { path: 'clienteCadastro', component: ClienteCadastroComponent },
  { path: 'clientePesquisa', component: ClientePesquisaComponent },
  { path: 'petCadastro', component: PetCadastroComponent },
  { path: 'petPesquisa', component: PetPesquisaComponent },
  { path: 'porteCadastro', component: PorteCadastroComponent },
  { path: 'portePesquisa', component: PortePesquisaComponent },
  { path: 'raca-cadastro', component: RacaCadastroComponent },
  { path: 'raca-pesquisa', component: RacaPesquisaComponent },
  { path: 'pelo-cadastro', component: PeloCadastroComponent },
  { path: 'pelo-pesquisa', component: PeloPesquisaComponent },
  { path: 'servico-cadastro', component: ServicoCadastroComponent },
  { path: 'servico-pesquisa', component: ServicoPesquisaComponent },
  { path: 'pacote-cadastro', component: PacoteCadastroComponent },
  { path: 'pacote-pesquisa', component: PacotePesquisaComponent },
  { path: 'login', component: LoginComponent },
  { path: 'usuario-cadastro', component: UsuarioCadastroComponent },
  { path: 'usuario-pesquisa', component: UsuarioPesquisaComponent },
  { path: '', pathMatch: 'full', redirectTo: 'clienteCadastro' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
