import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteComponent } from './cliente/cliente.component';
import { ContactoComponent } from './contacto/contacto.component';
import { DirectivasComponent } from './directivas/directivas.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { ProductoComponent } from './producto/producto.component';

const routes: Routes = [
  {path: 'cliente', component: ClienteComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: 'directivas', component: DirectivasComponent},
  {path: 'empleado', component: EmpleadoComponent},
  {path: 'login', component: LoginComponent},
  {path: 'menu', component: MenuComponent},
  {path: 'producto', component: ProductoComponent},
  {path: "**", component: InicioComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
