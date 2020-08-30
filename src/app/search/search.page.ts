import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: 'search.page.html',
  styleUrls: ['search.page.scss']
})
export class searchPage {
  segment: string;
  constructor() {
    this.segment="brand";
  }

}