import { state } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IUser } from 'src/app/interfaces';
import { UserService } from 'src/app/services';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  user:IUser

  constructor( private activateRoute:ActivatedRoute, private router:Router, private userService:UserService) { }

  ngOnInit(): void {

    this.activateRoute.params.subscribe( ({id}) => {
     const state = this.router.getCurrentNavigation()?.extras?.state?.['user'] as IUser;
    
    if (state) {
      this.user = state
    }else{
       this.userService.getById(id).subscribe(value => this.user = value)
    }

  }) 
  }

}
