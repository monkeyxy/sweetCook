import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { TabsetComponent } from 'ngx-bootstrap';

@Component({
  selector: 'app-mine',
  templateUrl: './mine.component.html',
  styleUrls: ['./mine.component.scss']
})
export class MineComponent implements OnInit {
  public singleModel: string = '1';
  constructor(
    public userService:UserService,
  ) { }

  ngOnInit() {

  }
}
