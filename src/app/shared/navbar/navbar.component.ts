import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../auth/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  providers: [AuthService],
})
export class NavbarComponent implements OnInit {
  constructor(private authSvc: AuthService) { }

  async ngOnInit() {
    console.log('Navbar');
    const user = await this.authSvc.getCurrentUser();
    if (user){
      console.log('User->',user);
    }
  }

}
