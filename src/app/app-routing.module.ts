import { LoginComponent } from './components/login/login.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AngularFireAuthGuard, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { UyeloginComponent } from './components/uyelogin/uyelogin.component';
import { UyeregisterComponent } from './components/uyeregister/uyeregister.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { MembersComponent } from './components/members/members.component';
import { ProductComponent } from './components/product/product.component';
import { AdminComponent } from './components/admin/admin.component';
import { KampanyalarurunComponent } from './components/kampanyalarurun/kampanyalarurun.component';



const redirectLogin = () => redirectUnauthorizedTo(['/login']);
const routes: Routes = [

{path: '', component: HomepageComponent}
  ,
  { path: 'login', component: LoginComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'members', component: MembersComponent },
  { path: 'product', component: ProductComponent },
  { path: 'admin', component: AdminComponent, canActivate: [AngularFireAuthGuard],
  data: {
    authGuardPipe: redirectLogin
  }},
  { path: 'uyelogin', component: UyeloginComponent },
  { path: 'uyeregister', component: UyeregisterComponent },
  { path: 'kampanyalarurun', component: KampanyalarurunComponent },






];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
