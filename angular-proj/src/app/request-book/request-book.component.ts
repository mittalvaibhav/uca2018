import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { book } from '../models/book';

@Component({
  selector: 'app-request-book',
  templateUrl: './request-book.component.html',
  styleUrls: ['./request-book.component.css']
})
export class RequestBookComponent implements OnInit {

  constructor(private http: HttpClient) {

   }

  ngOnInit() {
  }

  public submitBookRequestForm(bookForm: NgForm) {
    console.log("Request submitted for form: " + bookForm.value);
    let bookToBeAdded = bookForm.value;
    let bookTobeSent = JSON.stringify(bookToBeAdded);
    let httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})
    this.http.post('http://localhost:8000/books/addBook', bookToBeAdded, {headers: httpHeaders})
    .subscribe(response => {
      let status = response;
      alert(`The response is : ${response}`);
      console.log(response);
    }, error => {
      alert(`The error response is : ${error.error.message}`);
      console.log(error);
      
    })
  }

}
