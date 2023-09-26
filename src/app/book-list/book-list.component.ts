import { Component, OnInit} from '@angular/core';
import { BookService } from '../book.service';
import { Book } from '../book.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: Book[] = [];
  private subscription!: Subscription;  
  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.subscription = this.bookService.books$.subscribe((data: Book[]) => {  
      this.books = data;
    });
    this.bookService.getBooks();
  }

}
