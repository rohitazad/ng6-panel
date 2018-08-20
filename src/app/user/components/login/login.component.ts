import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userLoginForm:FormGroup;

  constructor(
    fb: FormBuilder,
    private toastr: ToastrService,
    private router : Router
  ) { 
    this.userLoginForm = fb.group({
      userId: ["", Validators.required],
      userPwd: ["", Validators.required]
    });
  }

  ngOnInit() {
  }

  loginForm(){
    console.log('yes');
    console.log(this.userLoginForm.value);
    
    this.toastr.error('hello', 'Rohit azad', {
      timeOut: 3000,
    });
      
  }

}
