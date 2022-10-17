import { Component, OnInit} from '@angular/core';
import { Pizza } from '../pizza';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

  public pizzas : Pizza[] = [
  new Pizza('marguerite','../../assets/margarita.jpg','La pizza Margherita est le nom d\'une spécialité culinaire traditionnelle de la ville de Naples en Italie. '),
  new Pizza('Mex','../../assets/mex.jpg','a pizza Tex-Mex, un savant mélange de ...'),
  new Pizza('4 Fromages','../../assets/fromage.jpg','Pizza quattro formaggi Italian: est une variété de pizza dans la cuisine italienne qui est garnie d\'une combinaison de quatre types de fromage'),
  ];

  public pizza:Pizza;

  getIndexPizza(index){
    console.log(index);
    this.pizza = this.pizzas[index];
  }

  constructor() { }

  ngOnInit(): void {
    this.pizza=this.pizzas[0];
  }

}
