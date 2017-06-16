import {Injectable} from '@angular/core';
import {Http,Response,Headers,RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
@Injectable()
export class PostsService{
	constructor(private  http : Http)
	{
	//console.log('post service intialized');
	//this.getPosts();
	}
	getPosts()
	{
	  return this.http.get("http://localhost/proj2/src/databaseFiles/empDetails.php").map(res=>res.json());
	}
	private _contactUrl = 'http://localhost/proj2/src/databaseFiles/EmpDetailsById.php';
	private _updateUrl = 'http://localhost/proj2/src/databaseFiles/EmpDetailsUpdate.php';
	getuserdetails(id: any): Observable<any>
	 {
	 

	 let body =  JSON.stringify({
      emp_id: id
       });
	 
	   let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
       let options = new RequestOptions({ headers: headers });
       return this.http.post(this._contactUrl, body, options).map(res=>res.json());
	 }
	 
	 userEdit(updatedata : any) : Observable<string>
	 {
         let body = JSON.stringify({
		      emp_name: updatedata.emp_name,
		      emp_email: updatedata.emp_email,
		      emp_address: updatedata.emp_address,
		      emp_id: updatedata.emp_id
         });
        console.log(body);
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
    let options = new RequestOptions({ headers: headers });
   return  this.http.post(this._updateUrl, body, options).map(res => <string> res.json());
	 }
    }