import {Component, OnInit} from '@angular/core';
import {Category} from '../category';
import { CategoriesService } from '../categories.service';

@Component({
    selector: 'app-categories',
    templateUrl: './categories.component.html',
    styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

    constructor(private categoriesService: CategoriesService) {
    }
    categories: Category[];
    selectedCategory: Category;

    getCategories(): void{
        this.categories = this.categoriesService.getCategories();
    }

    ngOnInit() {
        this.getCategories();
    }
    onSelect(category: Category): void {
        this.selectedCategory = category;
    }
}
