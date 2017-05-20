import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

	values = '';
  private currentTimeout: number;

  onKey(event: any) { // without type info
    this.values += event.target.value + ' | ';
    clearTimeout(this.currentTimeout);
    this.currentTimeout = window.setTimeout(() => {
      console.log('TimeOut working');
    }, 500);
  }

}
