import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClienteComponent } from './cliente/cliente.component';
import { ContactoComponent } from './contacto/contacto.component';
import { DirectivasComponent } from './directivas/directivas.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { ProductoComponent } from './producto/producto.component';
import { RegisterComponent } from './register/register.component';

//Services
import { LoginService } from './services/login.service';
import { ProductoService } from './services/producto.service';
import { UserService } from './services/user.service';

@NgModule({
  declarations: [
    AppComponent,
    ClienteComponent,
    ContactoComponent,
    DirectivasComponent,
    EmpleadoComponent,
    EncabezadoComponent,
    InicioComponent,
    LoginComponent,
    MenuComponent,
    ProductoComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    HttpClientModule,
  ],
  providers: [
    LoginService,
    UserService,
    ProductoService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
