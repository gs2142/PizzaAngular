import { Component, OnInit, Input, Output } from '@angular/core';
import { Pizza } from '../../pizza';

@Component({
  selector: 'app-pizza-detail',
  templateUrl: './pizza-detail.component.html',
  styleUrls: ['./pizza-detail.component.css']
})
export class PizzaDetailComponent implements OnInit {
	//public pizza = new Pizza('Mex','../../assets/mex.jpg','a pizza Tex-Mex, un savant mélange de ...');

  @Input() pizza: Pizza;
  constructor() { }

  ngOnInit(): void {
  }

}
