import { Component, OnInit } from '@angular/core';
import { TestLibraryService } from 'test-library';
// import { TestLibraryService } from 'test-library/public_api';

@Component({
  selector: 'ld-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor( private testService: TestLibraryService) {}

  ngOnInit() {
    this.testService.testFunction();
    this.testService.setUrl('https://google.com');
  }

  checkUrl() {
    console.log(this.testService.getUrl());
  }
  // title = 'library';
}
