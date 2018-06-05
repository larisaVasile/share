import {Component, OnInit} from '@angular/core';
import {Category} from '../category';
import {CATEGORIES} from '../mock-categories';

@Component({
    selector: 'app-categories',
    templateUrl: './categories.component.html',
    styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

    constructor() {
    }
    categories = CATEGORIES;
    selectedCategory: Category;
    onSelect(category: Category): void {
        this.selectedCategory = category;
    }
    ngOnInit() {
    }
}
