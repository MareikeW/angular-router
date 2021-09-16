import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NgForm } from '@angular/forms';
import { Review } from './review.model';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  book = {id: 0, title: "", author: "", year: 0};
  nextBook: string = "";
  previousBook: string = "";

  allReviews: Review[] = [];
  currentBookReviews: Review[] = [];

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(data => {
      this.book.id = data.id;
      this.book.title = data.title;
      this.book.author = data.author;
      this.book.year = data.year;
    })

    this.allReviews = JSON.parse(localStorage.getItem('reviews') || '[]');

    for (let i = 0; i < this.allReviews.length; i++) {
      if (this.allReviews[i].bookTitle === this.book.title) {
        this.currentBookReviews.push(this.allReviews[i]);
      }
    }
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

  /* neu */
  onReviewSubmit(form: NgForm) {
    if (form.value.reviewText) {
      this.addReview(new Review(this.book.title, form.value.reviewText))
    }
  }

  addReview(review: Review) {
    this.currentBookReviews.push(review);
    this.allReviews.push(review);
    let jsonAllReviews = JSON.stringify(this.allReviews);
    localStorage.setItem('reviews', jsonAllReviews);
  }
}
