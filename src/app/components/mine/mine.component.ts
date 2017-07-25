import { Component, OnInit, TemplateRef } from '@angular/core';
import { UserService } from '../../services/user.service';
import { TabsetComponent } from 'ngx-bootstrap';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';

@Component({
  selector: 'app-mine',
  templateUrl: './mine.component.html',
  styleUrls: ['./mine.component.scss']
})
export class MineComponent implements OnInit {
  public bindedCouple: string = '';
  public selectedCouple: string = '';
  public showBindCouple : boolean = false;
  public msgHint : string = '';
  public modalRef: BsModalRef;
  public hintModalRef: BsModalRef;

  constructor(
    public userService:UserService,
    public modalService: BsModalService
  ) { }

  ngOnInit() {

  }
  logout(template: TemplateRef<any>) {
    console.log(template);
    this.msgHint = '登出成功!';
    this.hintModalRef = this.modalService.show(template);
  }

  bindCouple(template: TemplateRef<any>) {
    console.log(template);
    this.modalRef = this.modalService.show(template);
  }

  sureBindCouple(template: TemplateRef<any>) {
    if (this.selectedCouple === '') {
      this.msgHint = '请填写用户名!';
      this.modalRef.hide();
      this.hintModalRef = this.modalService.show(template);
      return
    }
    this.bindedCouple = this.selectedCouple;
    this.showBindCouple = true;
    this.modalRef.hide();
  }
}
