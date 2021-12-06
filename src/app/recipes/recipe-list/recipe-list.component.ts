import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] =[
    new Recipe('Receita 1', 'Descricao 1',
     'https://pixnio.com/free-images/2017/11/05/2017-11-05-07-29-17-1200x801.jpg'),
    new Recipe('Receita 2', 'Descricao 2',
     'https://pixnio.com/free-images/2017/11/05/2017-11-05-07-29-17-1200x801.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
