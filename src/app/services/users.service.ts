import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { User } from '../interfaces/user';

@Injectable()
export class UsersService {
	headers: Headers;
	options: RequestOptions;
	private usersUrl = 'https://api.github.com/search/users?q=';  // URL to web API
	constructor (private http: Http) {}

	getUsers (userTerm): Observable<User[]> {
		return this.http.get(this.usersUrl+userTerm)
					.map(res => res.json())
					.catch(this.handleError);
	}

	insertUser (data): Observable<Response> {
		var payload = new FormData();
		payload.append("name", data['name']);
		payload.append('description', data['description']);
		payload.append('multimedia', data['image']['file']);
		this.headers = new Headers();
		this.options = new RequestOptions({ headers: this.headers });
		return this.http.post(this.usersUrl, payload, this.options)
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