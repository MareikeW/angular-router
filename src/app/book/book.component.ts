import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  book = {id: 0, title: "", author: "", year: 0};
  nextBook: string = "";
  previousBook: string = "";

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(data => {
      this.book.id = data.id;
      this.book.title = data.title;
      this.book.author = data.author;
      this.book.year = data.year;
    })
  }

  hasNextBook() {
    if (this.book.id <= 4) {
      return true;
    } else {
      return false;
    }
  }

  hasPreviousBook() {
    if (this.book.id >= 2) {
      return true;
    } else {
      return false;
    }
  }

  getNextBook() {
    if (this.book.id <=4) {
      return this.nextBook = `/${this.book.id + 1}`;
    } else {
      return;
    }
  }

  getPreviousBook() {
    if (this.book.id >= 2) {
      return this.previousBook = `/${this.book.id - 1}`;
    } else {
      return;
    }
  }
}
