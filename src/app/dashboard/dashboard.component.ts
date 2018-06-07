import {Component, OnInit} from '@angular/core';
import {Category} from '../category';
import {CategoriesService} from '../categories.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    categories: Category[] = [];

    constructor(private categoriesService: CategoriesService) {
    }

    ngOnInit() {
        this.getCategories();
    }

    getCategories(): void {
        this.categoriesService.getCategories().subscribe(categories => this.categories = categories.slice(1, 5));
    }

}
