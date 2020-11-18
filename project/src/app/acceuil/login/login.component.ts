import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }
  loginform=new FormGroup({
    'mdp': new FormControl('',[Validators.minLength(5)]),
    'email': new FormControl('',[Validators.email]),
  })
  ngOnInit(): void {
  }

}
