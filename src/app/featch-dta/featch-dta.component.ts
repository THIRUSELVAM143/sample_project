import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-featch-dta',
  templateUrl: './featch-dta.component.html',
  styleUrls: ['./featch-dta.component.css']
})
export class FeatchDtaComponent {
  users: any[] = [];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUsers().subscribe(data => {
      this.users = data;
      console.log(this.users);
      console.log(data);
    });
  }
  funccall() {
    console.log('Button clicked!');
  }
}
