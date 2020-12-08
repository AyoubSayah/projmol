import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { AdminComponent } from './admin/admin/admin.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path:"acceuil",
    component:HomeComponent

  },
  {path:"home",
   component:AcceuilComponent},
   {path:"admin",
  component:AdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
