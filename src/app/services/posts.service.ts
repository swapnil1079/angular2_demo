import {Injectable} from '@angular/core';
import {Http,Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
@Injectable()
export class PostsService{
	constructor(private  http : Http)
	{
	console.log('post service intialized');
	this.getPosts();
	}
	getPosts()
	{
	  return this.http.get("https://jsonplaceholder.typicode.com/posts").map(res=>res.json());
	}
    }