import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ItmeModle } from 'src/shared/models/itemModel.model';


@Component({
  selector: 'app-additems',
  templateUrl: './additems.component.html',
  styleUrls: ['./additems.component.scss']
})
export class AdditemsComponent implements OnInit {
  @Input() itemM: ItmeModle = new ItmeModle('', null);
  @Input() allItems: ItmeModle[];
  @Output() itemSubmitted: EventEmitter<ItmeModle> = new EventEmitter<ItmeModle>();
  @Output() delitem: EventEmitter<number> = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }

  onsubmit(form: NgForm){
    this.itemSubmitted.emit(form.value);
    form.reset()
  }

  delitem2(item: number){
    this.delitem.emit(item);
  }

}
