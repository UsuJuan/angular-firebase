import { Component, OnInit } from '@angular/core';
import { User } from '../../interfaces/user';
import { UsersService } from '../../services/users.service'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {

	errorMessage: string;
	users: User[];
	mode = 'Observable';
	constructor (private userService: UsersService) {}

	ngOnInit() { 
		this.getusers();
	}

	getusers() {
		this.userService.getUsers()
			.subscribe(
			users => this.users = users,
			error =>  this.errorMessage = <any>error);
	}
	
	// adduser (name: string) {
	// 	if (!name) { return; }
	// 	this.userService.adduser(name)
	// 		.subscribe(
	// 		user  => this.users.push(user),
	// 		error =>  this.errorMessage = <any>error);
	// }
}