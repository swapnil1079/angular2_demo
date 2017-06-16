import { Component } from '@angular/core';
import { FormBuilder, Validators,FormGroup, FormControl } from '@angular/forms';
// import { FORM_DIRECTIVES } from '@angular/common';
import {AuthenticationService} from  './authentication.service';
import {CanActivate, Router,ActivatedRouteSnapshot,RouterStateSnapshot}  from '@angular/router';
/**
*	This class represents the lazy loaded LoginComponent.
*/

@Component({
	moduleId: module.id,
	selector: 'login-cmp',
	templateUrl: 'login.component.html',
	styleUrls: ['login.css'],
	providers: [AuthenticationService]
})
export class LoginComponent {
       loginData : myData [];
      public LoginForm = this.reg.group({
          email: ["", Validators.required],
          password:["",Validators.required]
          });
          constructor(public reg: FormBuilder, private _service :  AuthenticationService ,  private router: Router) {}
          
              doLogin(event) {
              this._service.dataLogin(this.LoginForm.value).subscribe(
              loginData => {this.handleResponse(loginData);
             //  localStorage.setItem('emplyeeId', loginData[0].data);
               console.log(loginData);
              },
              error => this.handleResponse(error)
              );
            }
             handleResponse(response) {
              
              if (response[0].data == 'error') {
                  alert('error');
              }
              else
              {
              this.router.navigate(['/dashboard/home']);
              }
            }
          }

         interface myData {
 	      data : string;
         }
