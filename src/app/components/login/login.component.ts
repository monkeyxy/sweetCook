import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    public userService:UserService,
  ) { }

  ngOnInit() {
  }
  register(){
    console.log('====')
    var params = {"username":"kaka","telephone":"1234567890","nickname":"kakachan","password":"123456","sex":1};
    this.userService.register(params).subscribe(result =>{
      console.log(result);
    },error =>{
      console.log(error);
    })
  }

}
