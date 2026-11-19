import { Component, inject, signal } from '@angular/core';
import { form, FormField } from '@angular/forms/signals';
import { Backend } from '../backend';
import { Auth } from '../auth';

@Component({
  imports: [FormField],
  selector: 'app-login',
  styleUrl: './login.css',
  templateUrl: './login.html',
})
export class Login {
   userModel = signal({
    username:'shalini',
    password:'sh1234'
  });

  userForm = form(this.userModel);

  authService = inject(Auth);

  login(){
    const {username, password} = this.userModel();
    console.log("email ", username);
    // assume 
    //this.data.set({city:'Mumbai'})
    this.authService.loginUser(username, password)
    .subscribe(resp=> { console.log(resp)});

  }

}
