import { Component, OnInit } from '@angular/core';
import { ItmeModle } from 'src/shared/models/itemModel.model';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss']
})
export class MainpageComponent implements OnInit {
  allItems: ItmeModle[] = new Array<ItmeModle>();
  totalbudget: number = 0

  constructor() { }

  ngOnInit() {
  }

  onAddItem(newItem: ItmeModle){
    this.allItems.push(newItem);
    this.totalbudget += newItem.amount;
  }

  finaldelete(idx: number){
    this.totalbudget -= this.allItems[idx].amount
    this.allItems.splice(idx, 1);
  }
}
