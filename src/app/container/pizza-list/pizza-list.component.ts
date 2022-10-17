import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Pizza} from '../../pizza';


@Component({
  selector: 'app-pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.css']
})
export class PizzaListComponent implements OnInit {

  @Input() pizzas: Pizza[];
  @Output() outputIndex: EventEmitter<number> = new EventEmitter<number>();

  RecupPizza(index){
    this.outputIndex.emit(index);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
