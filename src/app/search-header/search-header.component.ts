import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
//import {LiveAnnouncer} from '@angular/cdk/a11y';

@Component({
  selector: 'app-search-header',
  templateUrl: './search-header.component.html',
  styleUrls: ['./search-header.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchHeaderComponent implements OnInit {
  @Input()
   items :any[]=[];
   @Output() onMMIDSelected = new EventEmitter();
   //announcer = inject(LiveAnnouncer);
 
  constructor() { }

  ngOnInit() {
    console.log("items",this.items);

    
  }
  onChipClick(mmId:string){
    this.onMMIDSelected.emit({mmid:mmId})

  }

  // removeKeyword(keyword:any) {
    
  //   const index = this.items.indexOf(keyword);
  //   if (index >= 0) {
  //     this.items.splice(index, 1);

  //     //this.announcer.announce(`removed ${keyword}`);
  //   }
  // }
 

  

}
