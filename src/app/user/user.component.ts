import { Component, OnInit } from '@angular/core';
import { User } from '../shared/user.model';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataModel } from '../shared/data.model';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {


  users: User[];
  roles:any=[];
  user: User=new User();
  userForm: FormGroup;
  usersModel: DataModel[];
  constructor(private userService: UserService,private fb: FormBuilder,private route: ActivatedRoute) { }


  ngOnInit() {
    this.users = this.route.snapshot.data.users;
    this.userService.getRoles().subscribe(roles=>{
      this.roles=roles;
    });
    this.userForm= this.fb.group ({
      username: ['', Validators.required],
            password:'',
            enable: '',
            roles:[this.roles.name]
          
          });

          this.usersModel=[
            new DataModel('id','ID','number',true,[]),
            new DataModel('username','user name','string',false,[]),
            new DataModel('password','password','password',false,[]),
            new DataModel('enable','Active','boolean',true,[]),
            new DataModel('roles','Roles','select',false,[])
          ]
  }
 

}
