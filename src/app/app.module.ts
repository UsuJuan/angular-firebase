import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule, Routes} from '@angular/router';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
// tag input

// services
import { FirebaseService } from './services/firebase.service';
import { UsersService } from './services/users.service'

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ListingsComponent } from './components/listings/listings.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListingComponent } from './components/listing/listing.component';
import { AddListingComponent } from './components/add-listing/add-listing.component';
import { EditListingComponent } from './components/edit-listing/edit-listing.component';
import { UsersComponent } from './components/users/users.component';
import { TagsComponent } from './components/tags/tags.component';

// Firebase Config
export const firebaseConfig = {
	apiKey: 'AIzaSyBsBM3Y26a35SeDKQhZx2ZYLXiq2Mw_YMQ',
	authDomain: 'angular-firebase-b9faa.firebaseapp.com',
	databaseURL: 'https://angular-firebase-b9faa.firebaseio.com',
	storageBucket: 'angular-firebase-b9faa.appspot.com',
	messagingSenderId: '97901177845'
};

// const FirebaseAuthConfig = {
// 	provider: AuthProviders.Password,
// 	method: AuthMethods.Password
// };

const appRoutes: Routes = [
  {path:'', component: HomeComponent},
  {path:'listings', component:ListingsComponent},
  {path:'listing/:id', component:ListingComponent},
  {path:'add-listing', component:AddListingComponent},
  {path:'users', component:UsersComponent},
  {path:'tags', component:TagsComponent}
]

@NgModule({
  declarations: [
	AppComponent,
	HomeComponent,
	ListingsComponent,
	NavbarComponent,
	ListingComponent,
	AddListingComponent,
	EditListingComponent,
	UsersComponent,
	TagsComponent
  ],
  imports: [
	BrowserModule,
	FormsModule,
	HttpModule,
	RouterModule.forRoot(appRoutes),
	AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [FirebaseService, UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
