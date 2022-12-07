import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ClientsComponent } from './pages/clients/clients.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'aboutus', component:AboutUsComponent},
  c{path:'contact', component:ContactsComponent},
  {path:'clients', component:ClientsComponent},
  {path:'products', component:ProductsComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
