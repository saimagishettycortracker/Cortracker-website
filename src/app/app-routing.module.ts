import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ClientsComponent } from './pages/clients/clients.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { ServicesComponent } from './pages/services/services.component';
<<<<<<< Updated upstream
import { StaffingComponent} from './pages/staffing/staffing.component';
=======
>>>>>>> Stashed changes

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'aboutus', component:AboutUsComponent},
  {path:'contact', component:ContactsComponent},
  {path:'products', component:ProductsComponent},
  {path:'clients', component:ClientsComponent},
<<<<<<< Updated upstream
  {path:'services', component:ServicesComponent},
  {path:'staffing',component:StaffingComponent}

=======
  {path:'products', component:ProductsComponent},
  {path:'services', component:ServicesComponent}
>>>>>>> Stashed changes
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
