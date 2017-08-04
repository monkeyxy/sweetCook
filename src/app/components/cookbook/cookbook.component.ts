import { Component, OnInit } from '@angular/core';
import { CookbookService } from '../../services/cookbook.service';
import { Cookbook } from '../../models/Cookbook';

@Component({
  selector: 'app-cookbook',
  templateUrl: './cookbook.component.html',
  styleUrls: ['./cookbook.component.scss']
})
export class CookbookComponent implements OnInit {
  public cookList: Array<Cookbook>;
  constructor(
    public cookbookService : CookbookService
  ) { }

  ngOnInit() {
    let params = {
      page: 0,
      num: 10
    };
    this.cookbookService.cookbookList(params).subscribe((result : Array<Cookbook>) => {
      this.cookList = result;
      console.log(this.cookList , "result");
    });
  }
}
