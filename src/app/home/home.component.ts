import { Component, OnInit } from '@angular/core';
import {AuthService} from '../security/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public auth: AuthService,
              private router: Router) { }

  ngOnInit(): void {
    if (!this.auth.jwtPayload) {
      throw this.router.navigate(['/login']);
    }
    console.log(this.auth.jwtPayload);
  }

}
