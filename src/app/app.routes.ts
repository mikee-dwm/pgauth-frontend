import { Routes } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { SigningInComponent } from './signing-in/signing-in.component';

export const routes: Routes = [
  { path: '', component: SigninComponent },
  { path: 'signing-in', component: SigningInComponent },
];
