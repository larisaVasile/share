import {Injectable} from '@angular/core';
import {Category} from './category';
import {Observable, of} from 'rxjs';
import {MessageService} from './message.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError, map, tap} from 'rxjs/operators';

const httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
    providedIn: 'root'
})
export class CategoriesService {
    private categoriesUrl = 'api/categories'; // URL to web api
    constructor(private http: HttpClient,
                private messageService: MessageService) {
    }

    getCategories(): Observable<Category[]> {
        this.messageService.add('CategoriesService: fetched categories');
        return this.http.get<Category[]>(this.categoriesUrl)
            .pipe(
                tap(categories => this.log('fetched categories')),
                catchError(this.handleError('getCategories', [])));
    }

    getCategory(id: number): Observable<Category> {
        const url = `${this.categoriesUrl}/${id}`;
        return this.http.get<Category>(url).pipe(tap(_ => this.log(`fetched hero id=${id}`)),
            catchError(this.handleError<Category>(`getCategory id=${id}`)));
    }

    updateCategory(category: Category): Observable<any> {
        return this.http.put(this.categoriesUrl, category, httpOptions).pipe(
            tap(_ => this.log(`updated category id=${category.id}`)),
            catchError(this.handleError<any>('updatecategory'))
        );
    }

    /** POST: add a new category to the server */
    addCategory(category: Category): Observable<Category> {
        return this.http.post<Category>(this.categoriesUrl, category, httpOptions).pipe(
            tap((category: Category) => this.log(`added category w/ id=${category.id}`)),
            catchError(this.handleError<Category>('addCategory'))
        );
    }

    deleteHero (category: Category | number): Observable<Category> {
        const id = typeof category === 'number' ? category : category.id;
        const url = `${this.categoriesUrl}/${id}`;

        return this.http.delete<Category>(url, httpOptions).pipe(
            tap(_ => this.log(`deleted category id=${id}`)),
            catchError(this.handleError<Hero>('deleteCategory'))
        );
    }

    private log(message: string) {
        this.messageService.add('CategoriesService: ' + message);
    }

    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead

            // TODO: better job of transforming error for user consumption
            this.log(`${operation} failed: ${error.message}`);

            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }
}


