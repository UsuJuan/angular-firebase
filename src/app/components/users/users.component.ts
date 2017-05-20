import { Component, OnInit, ViewChild, Renderer } from '@angular/core';
import { User } from '../../interfaces/user';
import { Service } from '../../interfaces/service';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {

	errorMessage: string;
	public imagen;
	users: User[];
	mode = 'Observable';
	private service: Service;
	private currentTimeout: number;
	title: any;
	@ViewChild('searchTextx') inputSearchText;
	searchText: any;
	tags = [];
	constructor (private userService: UsersService, private _renderer:Renderer) {}

	ngOnInit() { 
		this.getusers();
		this.service = new Service();
	}

	onKey(event: any) { 
		if (event.keyCode==8 && this.searchText==''){
			this.tags.pop();
		} else {
			clearTimeout(this.currentTimeout);
			this.currentTimeout = window.setTimeout(() => {
				this.getusers();
			}, 250);
		}
	}

	deleteTag(param){
		this.tags = this.tags.filter(tag => tag.id !== param.id);
	}

	selectItem(user) {
		this.tags.push({'id':user.id,'name':user.login});
		this.users = [];
		this.searchText = '';
		this._renderer.invokeElementMethod(this.inputSearchText.nativeElement, 'focus');
	}

	getusers() {
		if(this.searchText!='') {
			this.userService.getUsers(this.searchText)
				.subscribe(
				users => this.users = users,
				error =>  this.errorMessage = <any>error);
		}
	}

	sendImage(){
		// for (let selectedFile of [(<HTMLInputElement>document.getElementById('imagen')).files[0]]) {
		// 	this.imagen = selectedFile;
		// 	console.log("IMAGEN ==> ", this.imagen.value);
		// }
		let data = {'name':this.title, 'description':'angular pues papu','image':this.service.image};
		this.userService.insertUser(data)
			.subscribe(
			result => console.log("Response", result),
			error =>  this.errorMessage = <any>error);
	}

	changeListener(event) {
		const reader: FileReader = new FileReader();
		const file = event.target.files[0];
		const image = {
			original_name: file.name,
			size: file.size,
			content_type: file.type,
			file: file
		};
		console.log("FILE ====> ", file);
		this.service.image = image;

		reader.onload = (e) => {
			console.log("Reader ONLoad");
			// this.imagen = this.sanitizer.bypassSecurityTrustStyle(`url('${reader.result}')`);
		};
		reader.readAsDataURL(file);
		// this.imagen = image;
		console.log("IMAGEN ====> ", this.service.image);
	  }
	
	// adduser (name: string) {
	// 	if (!name) { return; }
	// 	this.userService.adduser(name)
	// 		.subscribe(
	// 		user  => this.users.push(user),
	// 		error =>  this.errorMessage = <any>error);
	// }

}