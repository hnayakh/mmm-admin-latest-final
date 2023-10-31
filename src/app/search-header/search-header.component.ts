import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-header',
  templateUrl: './search-header.component.html',
  styleUrls: ['./search-header.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchHeaderComponent implements OnInit {
  @Input()
   items :[];
 
  constructor() { }

  ngOnInit() {
    console.log("items",this.items);
  }

}
