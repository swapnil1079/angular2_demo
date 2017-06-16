      import { Component } from '@angular/core';
      import { FormBuilder, Validators,FormGroup, FormControl } from '@angular/forms';
      import { ContactService } from './contact.service';
      import {Http,Response,Headers,RequestOptions} from '@angular/http';
      import { Observable } from 'rxjs/Observable';
      import 'rxjs/add/operator/catch';
      import 'rxjs/add/operator/map';

      // import { FORM_DIRECTIVES } from '@angular/common';

      @Component({
          moduleId: module.id,
          selector: 'home-cmp',
          templateUrl: 'home.component.html',
          providers: [ContactService]
       
      })

 

      /* ------------- new test code --------- */

       export class HomeComponent
       {
      
          public RegistrationForm = this.reg.group({
          emp_name: ["", Validators.required],
          emp_email:["",Validators.required]
         
          });

             qer : string;
           
          constructor(public reg: FormBuilder , private _contactService: ContactService,private http: Http) {}
           fileChangeEvent(evt) {
            const files = evt.target.files;
            console.log('Uploading file...', files);
            
            if (files.length > 0) {
              let file;
              let formData = new FormData();
              for (let i = 0; i < files.length; i++) {
                file = files[i];
                formData.append('userfile', file, file.name);
              }
              console.log(formData);
             return this.http.post('http://localhost/proj2/src/databaseFiles/fileUpload.php', formData)
                .map(resp => resp.json())
                .subscribe(data => {data
                     return data;
                  });
                

            }

          }
            fileChangeEvent1(event)
            {
               // console.log('herer');
                let fileList: FileList = event.target.files;
               // console.log(fileList);
               
                let file: File = fileList[0];
                //console.log(file);
                let formData: FormData = new FormData();

                //formData.append('uploadFile', file, file.name);
                formData.append('uploadFile', 'asdfasfd');
                let headers = new Headers();
                headers.append('Content-Type', 'application/x-www-form-urlencoded');
                headers.append('Content-Type', 'multipart/form-data');
                headers.append('Accept', 'application/json');
                
                let options = new RequestOptions({ headers: headers });
               

               
               this.http.post('http://localhost/proj2/src/databaseFiles/fileUpload.php', formData, options)
               .map(res => res.json())
               .catch(error => Observable.throw(error))
               .subscribe(
                data => console.log('success'),
                error => console.log('error')
               );


            }
            doRegister(event) {
              // console.log(this.qer);
             //  console.log(this.RegistrationForm.value);
            this._contactService.postInsert(this.RegistrationForm.value).subscribe(
            response => this.handleResponse(response),
            error => this.handleResponse(error)
           );
          }
          handleResponse(response) {
              
              if (response.status == 'success') {
                  alert('success');
              }

              if (response.status == 'error') {
                  alert('error');
              }
          }

       }