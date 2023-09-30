import { Component } from '@angular/core';
import { BookService } from '../book.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
    constructor(private bookService: BookService) {}

    onSortChange(event: any): void {
        const value = (event.target as HTMLSelectElement).value;
        switch (value) {
            case '1':
                this.bookService.sortByAuthor();
                break;
            case '2':
                this.bookService.sortByTitle();
                break;
            case '3':
                this.bookService.sortByYear();
                console.log('Könyvek rendezése kiadási év szerint növekvő sorrendben');
                break;
            case '4':
                this.bookService.sortByYearBackwards();
                break;

            case '5':
                this.bookService.sortByCost();
                break;
            case '6':
                this.bookService.sortByCostBackwards();
                break;
            case '7':
                this.bookService.sortByRating();
                break;
            case '8':
                this.bookService.sortByRatingBackards();
                break;
        }
    }
}
