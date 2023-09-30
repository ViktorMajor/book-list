import { Component, OnDestroy, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Book } from '../book.model';
import { Observable, Subscription } from 'rxjs';

@Component({
    selector: 'app-book-list',
    templateUrl: './book-list.component.html',
    styleUrls: ['./book-list.component.css'],
})
export class BookListComponent {
    books$: Observable<Book[]> = this.bookService.books$;
    constructor(private bookService: BookService) {}
}
