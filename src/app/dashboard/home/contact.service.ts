import {Injectable} from '@angular/core';
import {Http,Response,Headers,RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class ContactService {
  constructor (private _http: Http) {}
 
  private _contactUrl = 'http://localhost/proj2/src/databaseFiles/empRegister.php';
 
  postInsert(newinsert: any): Observable<string>{
     
    
     let body = JSON.stringify({
     emp_name: newinsert.emp_name,
     emp_email: newinsert.emp_email
     //emp_gender: newinsert.emp_gender,
     //emp_address: newinsert.emp_address
       });
    // console.log(body);
     let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
     //headers.append('Content-Type', 'multipart/form-data');
     let options = new RequestOptions({ headers: headers });
    return this._http.post(this._contactUrl, body, options).map(res => <string> res.json());
    }
    private handleError (error: Response) {
    console.error('Error in retrieving news: ' + error);
    return Observable.throw(error.json().error || 'Server error');
   }
   uploadFile(data)
   {
        console.log(data);
     let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
     headers.append('Content-Type', 'multipart/form-data');
     let options = new RequestOptions({ headers: headers });
    return this._http.post('http://localhost/proj2/src/databaseFiles/fileUpload.php', data, options).map(res => res.json());
   }
  }

