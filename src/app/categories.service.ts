import { Injectable } from '@angular/core';
import {CATEGORIES} from './mock-categories';
import {Category} from './category';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor() { }
    getCategories(): Category[] {
        return CATEGORIES;
    }
}
