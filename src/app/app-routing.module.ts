import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsComponent } from './pages/clients/clients.component';
import { ContactsComponent } from './pages/contacts/contacts.component';

const routes: Routes = [
  {path:'contacts',component:ContactsComponent},
  { path:'clients',component:ClientsComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const myRoutings=[
  ContactsComponent,
  ClientsComponent,
];
