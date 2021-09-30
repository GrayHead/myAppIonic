import {Component, OnInit} from '@angular/core';
import {UserService} from './services/user.service';
import {Router} from '@angular/router';
import {Vibration} from '@ionic-native/vibration/ngx';

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage implements OnInit {

  users: any[];

  constructor(
    private userService: UserService,
    private router: Router,
    private vibration: Vibration
  ) {
  }

  ngOnInit() {
    this.userService.getUsers().subscribe(value => this.users = value);
  }

  details(u) {
    this.vibration.vibrate([1500, 1000, 1500, 500, 4000]);
    this.router.navigate(['users', u.id], {});

  }

}
