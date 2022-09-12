import { Component, OnInit } from '@angular/core';
import { DataSources } from 'src/app/models/data-source';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.sass']
})
export class UsersComponent implements OnInit {

  displayedColumns: string[] = [ 
    'username',
    'email',  
    'firstName',
    'lastName',
    'phone',
    'socials',
    'onCreate',
    'onUpdate',
    'role',  
  ];

  dataSource: any;

  constructor(private users: UserService) {
    this.reloadData();
  }

  ngOnInit(): void {
  }

  reloadData() {
    this.users.getUsersList().subscribe(data => {
      this.dataSource = new DataSources([ ...data ]);
    });
  }

}
