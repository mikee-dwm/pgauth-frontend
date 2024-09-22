import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-signing-in',
  standalone: true,
  imports: [],
  templateUrl: './signing-in.component.html',
  styleUrl: './signing-in.component.css',
})
export class SigningInComponent {
  token: string | null = null;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      console.log(params);
      if (params['access_token']) {
        this.token = params['access_token'];
        console.log(this.token);
      }
    });
    console.log(this.token);
  }
}
