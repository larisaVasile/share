import {Component, OnInit, Input} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {CategoriesService} from '../categories.service';
import {Category} from '../category';

@Component({
    selector: 'app-category-detail',
    templateUrl: './category-detail.component.html',
    styleUrls: ['./category-detail.component.css']
})
export class CategoryDetailComponent implements OnInit {
    @Input() category: Category;

    constructor(private route: ActivatedRoute,
                private categoriesService: CategoriesService,
                private location: Location) {
    }

    ngOnInit(): void {
        this.getCategory();
    }

    getCategory(): void {
        const id = +this.route.snapshot.paramMap.get('id');
        this.categoriesService.getCategory(id).subscribe(category => this.category = category);
    }

    goBack(): void {
        this.location.back();
    }

    save(): void {
        this.categoriesService.updateCategory(this.category)
            .subscribe(() => this.goBack());
    }
}
