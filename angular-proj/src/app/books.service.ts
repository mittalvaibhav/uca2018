import { Injectable } from '@angular/core';
import { Books } from './constants/library-constants';
import { book } from './models/book';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class BooksService {

  // private books;
  private books = Books;
  constructor(private http: HttpClient) { }

  public getBooksList() {
    return this.books;
  }
  
  // public getBooksList(): book[] {
  //   this.http.get('http://localhost:3000/books')
  //     .subscribe(response => {
  //       this.books = response;
  //     });
  //     return this.books;
  //   }

  // public getBooksList():Observable<any> {
  //   return this.http.get('http://localhost:3000/books');
  // }
}
