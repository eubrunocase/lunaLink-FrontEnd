import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent
 } from './pages/home/home.component';
import { ReservationsComponent } from './pages/reservations/reservations.component';
import { NewReservationComponent } from './pages/new-reservation/new-reservation.component';
import { LoginComponent } from './pages/login/login.component';
import { CadastroUserComponent } from './pages/cadastro-user/cadastro-user.component';
import { MenuComponent } from './pages/menu/menu.component';



const routes: Routes = [
  { path: '', component: HomeComponent},
  {path: 'reservations', component: ReservationsComponent},
  {path: 'new-reservation', component: NewReservationComponent},
  {path: 'login', component: LoginComponent},
  {path: 'cadastro-user', component:CadastroUserComponent},
  {path: 'menu', component:MenuComponent}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
