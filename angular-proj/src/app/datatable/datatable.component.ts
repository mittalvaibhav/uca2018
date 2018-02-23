import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { areIterablesEqual } from '@angular/core/src/change_detection/change_detection_util';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})
export class DatatableComponent implements OnInit {

  @Input() childBooks;
  @Output() selectBook = new EventEmitter();

  public subjects: string;
  
  constructor() { }

  ngOnInit() {
  }

  public booksSelected(selectedBook) {
    this.selectBook.emit(selectedBook)
    console.log(`Book selected: ${selectedBook}`);
  }

  public parentSharedMethod() {
    alert("Shared method called from parent");
  }

}
