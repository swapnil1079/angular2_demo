import { Component } from '@angular/core';
import {PostsService} from './posts.service';
import { FormBuilder, Validators,FormGroup, FormControl } from '@angular/forms';
// import { FORM_DIRECTIVES } from '@angular/common';
import {CanActivate, Router,ActivatedRouteSnapshot,RouterStateSnapshot}  from '@angular/router';
/**
*	This class represents the lazy loaded HomeComponent.
*/

@Component({
	moduleId: module.id,
	selector: 'listing-cmp',
	templateUrl: 'listing.component.html',
	providers : [PostsService]
	// directives: [FORM_DIRECTIVES]
})

export class ListingComponent {
	 posts : posts[];
	  edetails : edetails[];
	 showForm : boolean;
	    public EditForm = this.edit.group({
          emp_name: ["", Validators.required],
          emp_email:["",Validators.required],
          emp_address:["",Validators.required],
          emp_id:["",Validators.required]
          });
	 constructor(private postsService:PostsService,public edit: FormBuilder, private router: Router)
	 {
	 this.postsService.getPosts().subscribe(posts=>{
     this.posts = posts;
     });
     this.showForm = false;
	 }
	 EditUserDetails(value)
	 {
	 	
	 	if(value!='')
	 	{

	 	
	 	  this.postsService.getuserdetails(value).subscribe(edetails=>{
          this.edetails = edetails[0];
          console.log(edetails);
	 	 });
          this.showForm=true;
	 	}
	 }
	 CancelUserDetails()
	 {
	  this.showForm=false;	
	 }
	 doEdit(event)
	 {
	 
	 	this.postsService.userEdit(this.EditForm.value).subscribe(
            response => this.handleResponse(response),
            error => this.handleResponse(error)
           );
	 }
	      handleResponse(response) {
              
              if (response.status == 'success') {
                   alert('success');
                   this.showForm=false;
                   this.router.navigate(['/dashboard/listing']);
              }

              if (response.status == 'error') {
                  alert('error');
              }
          }
     }
     interface posts
	 {
	      id : string;
	      title : string;
	      body : string;
	 }
	 interface edetails
	 {
	 	emp_id : string;
	 	emp_name : string;
	 	emp_gender : string;
	 	emp_email : string;
	 	emp_address: string;
	 }
