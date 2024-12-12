import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { ReservationsComponent } from './pages/reservations/reservations.component';
import { NewReservationComponent } from './pages/new-reservation/new-reservation.component';
import { LoginComponent } from './pages/login/login.component';
import { CadastroUserComponent } from './pages/cadastro-user/cadastro-user.component';
import { MenuComponent } from './pages/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ReservationsComponent,
    NewReservationComponent,
    LoginComponent,
    CadastroUserComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
 
})
export class AppModule { }
