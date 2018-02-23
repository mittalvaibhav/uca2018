import { Component, OnInit } from '@angular/core';
import { book } from '../models/book';
import { BooksService } from './../books.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public applicationname = "University Library";

  constructor() { }

  public ngOnInit() {
    
  }
}