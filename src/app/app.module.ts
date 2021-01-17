import { LoginComponent } from './components/login/login.component';
import { environment } from './../environments/environment';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { UyeloginComponent } from './components/uyelogin/uyelogin.component';
import { UyeregisterComponent } from './components/uyeregister/uyeregister.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { MembersComponent } from './components/members/members.component';
import { ProductComponent } from './components/product/product.component';
import { AdminComponent } from './components/admin/admin.component';
import { KampanyalarComponent } from './components/kampanyalar/kampanyalar.component';
import { KampanyalarurunComponent } from './components/kampanyalarurun/kampanyalarurun.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FooterComponent,
    NavbarComponent,
    HeaderComponent,
    FooterComponent,
    UyeloginComponent,
    UyeregisterComponent,
    HomepageComponent,
    AboutComponent,
    ContactComponent,
    MembersComponent,
    ProductComponent,
    AdminComponent,
    KampanyalarComponent,
    KampanyalarurunComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
