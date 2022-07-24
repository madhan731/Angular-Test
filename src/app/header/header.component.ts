import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Output() header = new EventEmitter<any>();
  constructor() {}

  ngOnInit() {}
  shownext() {
    this.header.emit();
  }
}
