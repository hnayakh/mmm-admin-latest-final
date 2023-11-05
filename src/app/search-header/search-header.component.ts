import { LiveAnnouncer } from '@angular/cdk/a11y';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output, inject } from '@angular/core';


@Component({
  selector: 'app-search-header',
  templateUrl: './search-header.component.html',
  styleUrls: ['./search-header.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchHeaderComponent implements OnInit {
  @Input()
  items: any[] = [];
  @Output() onMMIDSelected = new EventEmitter();
  //announcer = inject(LiveAnnouncer);
 
  constructor() { }

  ngOnInit() {
    console.log("items", this.items);


  }
  onChipClick(mmId: string) {
    this.onMMIDSelected.emit({ mmid: mmId })

  }

  // onRemoveItem(){
  //   //const index: number = this.items.indexOf(event);
  //   //if (index >= 0) {
  //     this.items.splice( this.items.length, 1 );
  //   //}
  // }

  // removeKeyword(keyword: any) {
  //   const index = this.items.indexOf(keyword);
  //   if (index >= 0) {
  //     this.items.splice(index, 1);
  //     this.announcer.announce(`removed ${keyword}`);
  //   }
  // }




}
