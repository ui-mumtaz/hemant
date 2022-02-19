import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.scss']
})
export class SearchListComponent implements OnInit {
  @Input() pages = [];
  @Output() row = new EventEmitter<string>();
  
  constructor() { }

  ngOnInit(): void {
  }

  selectedRow(row) {
    this.row.emit(row);
    
  }

}
