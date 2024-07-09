import { Component,OnInit } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-featch-dta',
  templateUrl: './featch-dta.component.html',
  styleUrls: ['./featch-dta.component.css']
})
export class FeatchDtaComponent {
  users: any[] = [];
  page: number = 1;
  // filteredAlbums: any[] = [];
  totalRecords: number | undefined;
  albums:any[]=[];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUsers().subscribe(data => {
      this.users = data;
      console.log(this.users);
      console.log(data);
    });

   
      this.userService.getAlbums().subscribe(data => {
        this.albums = data;
        this.totalRecords = data.length; // Total number of records
      });
  }
  funccall() {
    console.log('Button clicked!');
  }
}
