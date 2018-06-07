import { Injectable } from '@angular/core';
import {CATEGORIES} from './mock-categories';
import {Category} from './category';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private messageService: MessageService) { }
    getCategories(): Observable<Category[]> {
        this.messageService.add('CategoriesService: fetched categories');
        return of(CATEGORIES);
    }
    getCategory(id: number): Observable<Category> {
      console.log('in getCategory');
      this.messageService.add(`CategoriesService: fetched category id=${id}`);
      return of(CATEGORIES.find(category => category.id === id));
    }
}


