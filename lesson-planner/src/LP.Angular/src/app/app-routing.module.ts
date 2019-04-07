import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { UserComponent } from './pages/user/user.component';
import { CursosComponent } from './pages/cursos/cursos.component';
import { DisciplinasComponent } from './pages/disciplinas/disciplinas.component';
import { TurmaComponent } from './pages/turma/turma.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {path: 'login' , component: LoginComponent},
  {path: 'user' , component: UserComponent},
  {path: 'curso', component: CursosComponent},
  {path: 'turma', component: TurmaComponent},
  {path: 'disciplinas', component: DisciplinasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
