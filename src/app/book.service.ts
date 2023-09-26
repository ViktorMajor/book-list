import { Injectable } from '@angular/core';
import { Book } from './book.model';
import { BOOKS } from './books.data';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private books: Book[] = BOOKS;

  private booksSubject: BehaviorSubject<Book[]> = new BehaviorSubject<Book[]>(
    this.books
  );

  books$ = this.booksSubject.asObservable();

  getBooks(): void {
    this.booksSubject.next(this.books);
  }

  sortByAuthor(): void {
    this.books.sort((a, b) => a.author.localeCompare(b.author));
    this.booksSubject.next(this.books);
  }
  sortByTitle(): void {
    this.books.sort((a, b) => a.title.localeCompare(b.title));
    this.booksSubject.next(this.books);
  }
  sortByYear(): void {
    this.books = this.books.sort((a, b) => a.year - b.year);
    this.booksSubject.next(this.books); 
  }
  sortByYearBackwards(): void {
    this.books = this.books.sort((a, b) => b.year - a.year);
    this.booksSubject.next(this.books); 
  }
  sortByCost(): void {
    this.books = this.books.sort((a, b) => a.cost - b.cost);
    this.booksSubject.next(this.books); 
  }
  sortByCostBackwards(): void {
    this.books = this.books.sort((a, b) => b.cost - a.cost);
    this.booksSubject.next(this.books); 
  }
  sortByRating(): void {
    this.books = this.books.sort((a, b) => a.rating - b.rating);
    this.booksSubject.next(this.books); 
  }
  sortByRatingBackards(): void {
    this.books = this.books.sort((a, b) => b.rating - a.rating);
    this.booksSubject.next(this.books); 
  }
  
}
