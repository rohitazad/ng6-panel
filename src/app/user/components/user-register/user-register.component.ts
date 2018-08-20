import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
  
  userForm:FormGroup;
  genders:any[] = [
    {"value": "M", "viewValue": "Male"},
    {"value": "F", "viewValue": "Female"}
  ]

  minDate = new Date(1950, 0, 1);
  maxDate = new Date(2016, 4, 15);

  constructor(fb: FormBuilder,
    private toastr: ToastrService,
    private router : Router) {
      this.userForm = fb.group({
        fNameUser : ['', Validators.required],
        lNameUser : [''],
        emailUser: ['', Validators.required],
        phoneUser:[''],
        genderUser:[''],
        pwdUser:['', Validators.required],
        conPwdUser: ['', Validators.required],
        userDob:[''], 
      });
     }

  ngOnInit() {
  }

  registerUser(){
    console.log(this.userForm.value);
  }

}
