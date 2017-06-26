import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { TabsetComponent } from 'ngx-bootstrap';

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
    console.log('====')
    var params = {"username":"kaka","telephone":"1234567890","nickname":"kakachan","password":"123456","sex":1};
    this.userService.register(params).subscribe(result =>{
      console.log(result);
    },error =>{
      console.log(error);
    })
  }
  selectItem(type){//type ==1 login   || type ==2 register
    if(type == 1){
      this.showLogin = true;
    }else{
      this.showLogin = false;
    } 
  }

}
