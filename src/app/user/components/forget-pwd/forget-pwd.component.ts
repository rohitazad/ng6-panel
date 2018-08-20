import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forget-pwd',
  templateUrl: './forget-pwd.component.html',
  styleUrls: ['./forget-pwd.component.css']
})
export class ForgetPwdComponent implements OnInit {

  userForgetPwd:FormGroup;

  constructor(fb: FormBuilder,
    private toastr: ToastrService,
    private router : Router) {
      this.userForgetPwd = fb.group({
        userEmail: ["", Validators.required]
      });
     }

  ngOnInit() {
  }

  userForgetPwdFn(){
    console.log(this.userForgetPwd.value);
  }

}
