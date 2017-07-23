import { Component, OnInit, TemplateRef } from '@angular/core';
import { UserService } from '../../services/user.service';
import { TabsetComponent } from 'ngx-bootstrap';
import { BsModalService } from 'ngx-bootstrap/modal';
import { ModalBackdropComponent } from 'ngx-bootstrap';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';

@Component({
  selector: 'app-mine',
  templateUrl: './mine.component.html',
  styleUrls: ['./mine.component.scss']
})
export class MineComponent implements OnInit {
  public bindCouple: string = 'xy';
  public showBindCouple : boolean = false;
  public modalRef: BsModalRef;

  constructor(
    public userService:UserService,
    public modalService: BsModalService
  ) { }

  ngOnInit() {

  }
  logout(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
}
