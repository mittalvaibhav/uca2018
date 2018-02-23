import { Component, OnInit, ViewChild } from '@angular/core';
import { book } from '../models/book';
import { BooksService } from './../books.service';
import { HttpClient } from '@angular/common/http';
import { BookInterface } from './../models/interfaces';
import { rendererTypeName } from '@angular/compiler';
import { DatatableComponent } from './../datatable/datatable.component';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {


  public buttonstate = true;
  public buttonStateDisabled = false;
  public studentname = "Avinash";
  public parentBooks: Array<book>;
  public book2: BookInterface;

  @ViewChild(DatatableComponent) 
  private datableChild: DatatableComponent;

    public myBook = new book('CSBook', 'SomeABC');

  constructor(private booksService: BooksService, private http: HttpClient) {
    console.log("Header component is created");
    console.log(`The value of my book is: ${this.myBook}`);

    // this.books = this.booksService.getBooksList();
    // this.http.get('http://localhost:3000/books')
    // .subscribe( successResponse => {
    //   this.books = successResponse;
    // }, errorResponse => {
    //   alert('Error in the service');
    // });

    // this.booksService.getBooksList().subscribe(
    //   successResponse => {
    //     this.books = successResponse;
    //   }, errorResponse => {
    //     alert('Error in the service');
    //   })

    // for(let i in this.books ) {
    //   let bookEntryDate = this.books[i].entryDate;
    //   if(typeof bookEntryDate != "object") {
    //     if(bookEntryDate != undefined) this.books[i].entryDate = new Date(bookEntryDate.slice(0, 4), bookEntryDate.slice(5, 7), bookEntryDate.slice(8));
    //   }
    // }

    this.http.get<book[]>('http://localhost:3000/books')
      .subscribe(response => {
        this.parentBooks = response;
      }, error => {
        alert("some error");
      }
      );

    // this.http.post('http://localhost:3000/books')

    console.log('acs');
  }

  // public calledFunc(c: string, b?: number) {
  //   console.log(`The current batch is ${c} - ${b}`)
  // }

  // public callingFunc() {
  //   this.calledFunc('UCA batch number', 2);
  //   let x = this.foo();
  // }  

  // foo() {
  //   return 2;
  // }

  ngOnInit() {
    console.log("ngOnit methid is called");
    this.book2 = { volume: 1, title: '', entryDate: '' };
  }

  public clickSubmit() {
    this.datableChild.parentSharedMethod();
    // alert("Submit button is clicked" + this.buttonstate)
  }

  private showAlert(valueFromLayout) {
    alert(`The value form layout is: ${valueFromLayout}`)
    this.getButtonState();
  }

  public getButtonState() {
    return false;
  }

  public selectedBookName: string;

  public bookSelected(selectedBook) {
    this.selectedBookName = selectedBook.title;
  }

  public showTable: boolean = true;
  toggleTableVisibility() {
    this.showTable = !(this.showTable);
  }

  public sampel(): String {
    return 'a';
  }

}
