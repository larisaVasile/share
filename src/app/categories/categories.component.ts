import {Component, OnInit} from '@angular/core';
import {Category} from '../category';
import {CategoriesService} from '../categories.service';

@Component({
    selector: 'app-categories',
    templateUrl: './categories.component.html',
    styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
    categories: Category[];

    constructor(private categoriesService: CategoriesService) {
    }

    ngOnInit() {
        this.getCategories();
    }

    getCategories(): void {
        this.categoriesService.getCategories().subscribe(categories => this.categories = categories);
    }

    add(name: string): void {
        name = name.trim();
        if (!name) {
            return;
        }
        this.categoriesService.addCategory({name} as Category)
            .subscribe(category => {
                this.categories.push(category);
            });
    }

    delete(category: Category): void {
        this.categories = this.categories.filter(c => c !== category);
        this.categoriesService.deleteCategory(category).subscribe();
    }
}
