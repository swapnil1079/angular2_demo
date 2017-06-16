import {Injectable} from '@angular/core';
import {Http,Response,Headers,RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {Routes} from '@angular/router';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()

export class AuthenticationService
{
	constructor(private _http:Http) {}
	private _contactUrl = 'http://localhost/proj2/src/databaseFiles/empLogin.php';
    
    dataLogin(newlogin: any): Observable<string>{
     let body = JSON.stringify({
     email: newlogin.email,
     password: newlogin.password
     });
      
      
     let headers = new Headers({ 'Content-Type': 'application/json' });
     let options = new RequestOptions({ headers: headers });
     return this._http.post(this._contactUrl, body, options).map(res => <string> res.json());
 }
    private handleError (error: Response) {
    console.error('Error in retrieving news: ' + error);
    return Observable.throw(error.json().error || 'Server error');
   }
 
}