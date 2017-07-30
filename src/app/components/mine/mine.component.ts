import { Component, OnInit, TemplateRef } from '@angular/core';
import { UserService } from '../../services/user.service';
import { TabsetComponent } from 'ngx-bootstrap';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
import { User } from '../../models/User';

@Component({
  selector: 'app-mine',
  templateUrl: './mine.component.html',
  styleUrls: ['./mine.component.scss']
})
export class MineComponent implements OnInit {
  public bindedCouple: string = '';
  public selectedCouple: string = '';
  public showBindCouple : boolean = false;
  public isUserLogined : boolean = false;
  public msgHint : string = '';
  public modalRef: BsModalRef;
  public hintModalRef: BsModalRef;
  public userInfo: User = {
    _id: '',
    username: '',
    nickname: '',
    telephone: '',
    sex: 1,
    companion_id: '',
    avatar: '/assets/mine/default-cook.png',
    desc: ''
  };
  public alertInfo : any = {
    on: false,
    info: '提示：',
    msg: '',
    dissmissTime: 0,
    type: 'success'
  };

  constructor(
    public userService:UserService,
    public modalService: BsModalService
  ) { }

  ngOnInit() {
    this.userService.userInfo().subscribe((result: User ) => {
      if(!result._id || result._id == ''){
        return;
      }
      console.log('user info: ', result);
      this.userInfo = result;
      this.bindedCouple = result.companion_id;
      this.showBindCouple = result.companion_id ? true: false;
      this.isUserLogined = true;
    },error =>{
      console.log(error);
    });
  }
  logout(template: TemplateRef<any>) {
    console.log(template);
    this.userService.logout().subscribe((result: any ) => {
      if(result.retcode != 0){
        this.msgHint = '登出失败!提示：'+ result.msg;
        this.hintModalRef = this.modalService.show(template);
        return;
      }
      this.msgHint = '登出成功!';
      this.hintModalRef = this.modalService.show(template);
    },error =>{
      console.log(error);
    });
  }

  bindCouple(template: TemplateRef<any>, msgTemplate: TemplateRef<any>) {
    console.log(template);
    if(this.isUserLogined == false){
      //用户还没登录
      this.alertInfo.msg = '您尚未登录，请先登录！';
      this.alertInfo.on = true;
      this.alertInfo.type = 'danger';
      this.alertInfo.dissmissTime = 0;
      return;
    }
    this.modalRef = this.modalService.show(template);
  }

  sureBindCouple(template: TemplateRef<any>) {
    if (this.selectedCouple === '') {
      this.msgHint = '请填写用户名!';
      this.modalRef.hide();
      this.hintModalRef = this.modalService.show(template);
      return
    }
    this.modalRef.hide();
    this.userService.bindCouple(this.selectedCouple).subscribe((result: any ) => {
      console.log(result);

      if(result.retcode != 0) {
        this.alertInfo.msg = '绑定失败!提示：' + result.msg;
        this.alertInfo.on = true;
        this.alertInfo.type = 'danger';
        this.alertInfo.dissmissTime = 0;
        this.selectedCouple = '';
        return;
      }
      this.bindedCouple = this.selectedCouple;
      this.showBindCouple = true;
    },error =>{
      console.log(error);
    });
  }
}
