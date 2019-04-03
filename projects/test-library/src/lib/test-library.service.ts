import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestLibraryService {
  server_url;
  constructor() { }

  testFunction() {
    console.log('calling test');
  }
  setUrl(url) {
    this.server_url = url;
  }
  getUrl() {
  return this.server_url;
  }
}
