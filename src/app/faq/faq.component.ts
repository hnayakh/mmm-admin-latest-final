import { Component, OnInit } from "@angular/core";

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

  constructor() {}

  ngOnInit() {}
  checkEdge(event) {
    this.edge = event;
    console.log('edge:', event);
  }
}

