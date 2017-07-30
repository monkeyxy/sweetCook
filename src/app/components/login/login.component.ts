import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public showLogin :boolean;
  constructor(
    public userService:UserService,
  ) { }

  ngOnInit() {
    this.showLogin = true;
  }
  register(){
    console.log('====');
    if(this.showLogin){
      //登录
      let params = {
        "username": "kaka",
        "password": "123456"
      };
      this.userService.login(params).subscribe(result => {
        console.log(result);
      }, error => {
        console.log(error);
      });
    }else {
      let params = {
        "username": "kaka",
        "telephone": "1234567890",
        "nickname": "kakachan",
        "password": "123456",
        "sex": 1
      };
      this.userService.register(params).subscribe(result => {
        console.log(result);
      }, error => {
        console.log(error);
      });
    }
  }
  selectItem(type){//type ==1 login   || type ==2 register
    if(type == 1){
      this.showLogin = true;
    }else{
      this.showLogin = false;
    }
  }

}
