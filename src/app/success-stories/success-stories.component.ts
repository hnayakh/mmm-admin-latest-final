import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-stories',
  templateUrl: './success-stories.component.html',
  styleUrls: ['./success-stories.component.css']
})
export class SuccessStoriesComponent implements OnInit {

  inBounds = true;
  edge = {
    top: true,
    bottom: true,
    left: true,
    right: true};
  constructor() { }

  ngOnInit() {
  }
  checkEdge(event) {
    this.edge = event;
    console.log('edge:', event);
  }
}
