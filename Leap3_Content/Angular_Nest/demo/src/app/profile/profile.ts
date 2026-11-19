import { Component, inject, signal } from '@angular/core';
import { email, form, FormField } from '@angular/forms/signals';
import { Backend } from '../backend';

@Component({
  imports: [FormField],
  selector: 'app-profile',
  styleUrl: './profile.css',
  templateUrl: './profile.html',
})
export class Profile {

  searchModel = signal({
    email:''
  });

  searchForm = form(this.searchModel);

  data = signal({city:''})

  beservice = inject(Backend);

  onSearch(){
    const value = this.searchModel().email;
    console.log("email ", value);
    // assume 
    //this.data.set({city:'Mumbai'})
    this.beservice.getCustomerProfile(value)
    .subscribe(resp=> { console.log(resp)});

  }

}
