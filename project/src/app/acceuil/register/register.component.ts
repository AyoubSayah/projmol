import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor() { }
  nom
  mdp
  mdp2
  registerform=new FormGroup({
    'nom': new FormControl('',[Validators.required, Validators.minLength(5)]),
    'mdp': new FormControl('',[Validators.minLength(5)]),
    'email': new FormControl('',[Validators.email]),
    'mdp2': new FormControl('',[Validators.minLength(5)]),

    'numero': new FormControl('',[Validators.pattern("[0-9]{8}")]),
    'prenom': new FormControl('',[Validators.minLength(5)])
    
  })
  ngOnInit(): void {
  }

}
