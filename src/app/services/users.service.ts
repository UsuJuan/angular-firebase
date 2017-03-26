import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { User } from '../interfaces/user';

@Injectable()
export class UsersService {
	private usersUrl = 'http://localhost:8000/api/dishes/';  // URL to web API
	constructor (private http: Http) {}

	getUsers (): Observable<User[]> {
		return this.http.get(this.usersUrl)
					.map(res => res.json())
					.catch(this.handleError);
	}
	
	private handleError (error: Response | any) {
		// In a real world app, you might use a remote logging infrastructure
		let errMsg: string;
		if (error instanceof Response) {
			const body = error.json() || '';
			const err = body.error || JSON.stringify(body);
			errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
		} else {
			errMsg = error.message ? error.message : error.toString();
		}
		console.error('ERROR ==> ',errMsg);
		return Observable.throw(errMsg);
	}
}