import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteComponent } from './cliente/cliente.component';
import { ContactoComponent } from './contacto/contacto.component';
import { DirectivasComponent } from './directivas/directivas.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { UrlGuard } from './guards/url.guard';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { ProductoComponent } from './producto/producto.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path: 'inicio', component: InicioComponent},
  {path: 'directivas', component: DirectivasComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  
  {path: 'menu', component: MenuComponent},

  {path: 'cliente', component: ClienteComponent, canActivate: [UrlGuard]},
  {path: 'empleado', component: EmpleadoComponent, canActivate: [UrlGuard]},
  {path: 'producto', component: ProductoComponent, canActivate: [UrlGuard]},

  {path: "**", redirectTo: '/incio'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
