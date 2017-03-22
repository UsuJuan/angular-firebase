import { Component, OnInit } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  ngOnInit() {
  }

  constructor(public af: AngularFire) {
    this.af.auth.subscribe(auth => console.log(auth));
  }

	loginEmail() {
		// Email and password
		this.af.auth.login({
			email: 'oviedo-93@hotmail.com',
			password: 'gabrielA6618p',
		},
		{
			provider: AuthProviders.Password,
			method: AuthMethods.Password,
		}).catch(
		(err) => {
			console.log('Error ===> ',err);
		});
		// this.af.auth.createUser({
		// 	email: 'oviedo-93@hotmail.com',
		// 	password: 'gabrielA6618p',
		// }).then(
		// (success) => {
		// 	console.log('Exito ==> ',success);
		// }).catch(
		// (err) => {
		// 	console.log('Error ===> ',err);
		// })
	}
}
