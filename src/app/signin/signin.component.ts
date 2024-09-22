import { Component } from '@angular/core';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css',
})
export class SigninComponent {
  handleSignin() {
    window.location.href =
      environment.googleEndpoint +
      `?client_id=${environment.googleClientID}&redirect_uri=${window.location.origin}/signing-in&response_type=token&scope=https://www.googleapis.com/auth/userinfo.email`;
  }
}
