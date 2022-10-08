import { Component, OnInit } from "@angular/core";
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop'
@Component({
  selector: "app-faq",
  templateUrl: "./faq.component.html",
  styleUrls: ["./faq.component.css"],
})
export class FaqComponent implements OnInit {
  inBounds = true;
  edge = {
    top: true,
    bottom: true,
    left: true,
    right: true
  };
  faqs=[];
  targetFAQs=[];
  constructor() {}
  drop(event: CdkDragDrop<any[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }
  ngOnInit() {
   this.faqs=[{
    id:1,
    question:"What is a connect?",
    answer:"You can think of it like a virtual currency Which can be use to connect or Communicate with other peoples...."
   },
   {
    id:2,
    question:"What is MMM?",
    answer:"You can think of it like a virtual currency Which can be use to connect or Communicate with other peoples...."
   },{
    id:3,
    question:"What is MMM wallet?",
    answer:"You can think of it like a virtual currency Which can be use to connect or Communicate with other peoples...."
   },
   {
    id:4,
    question:"What is Matchmeter?",
    answer:"You can think of it like a virtual currency Which can be use to connect or Communicate with other peoples...."
   }]
   this.targetFAQs= this.faqs;
  }
  checkEdge(event) {
    this.edge = event;
    console.log('edge:', event);
  }
}

