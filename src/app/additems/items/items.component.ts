import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ItmeModle } from 'src/shared/models/itemModel.model';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {
  @Input() item: ItmeModle;
  @Output() delitem: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

  delitem1(){
    this.delitem.emit()
  }

}
