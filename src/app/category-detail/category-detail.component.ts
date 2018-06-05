import { Component, OnInit, Input } from '@angular/core';
import {Category} from '../category';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.css']
})
export class CategoryDetailComponent implements OnInit {

  constructor() { }

  @Input() category: Category;

  ngOnInit() {
  }

}
