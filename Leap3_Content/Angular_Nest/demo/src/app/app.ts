import { Component, OnInit, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Home } from './home/home';
import { Login } from './login/login';
import { Profile } from './profile/profile';

@Component({
  imports: [RouterOutlet, Home, Login, Profile, RouterLink],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App implements OnInit{
  show:boolean = false;
  ngOnInit(): void {
    let token = localStorage.getItem('token');
    if(token){
      this.show = !this.show;
    }

  }
  protected readonly title = signal('demo');


}
