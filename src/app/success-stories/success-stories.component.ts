import { Component, OnInit } from "@angular/core";
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from "@angular/cdk/drag-drop";
import Swal from "sweetalert2";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { CmsService } from "../Services/cms.service";

@Component({
  selector: "app-success-stories",
  templateUrl: "./success-stories.component.html",
  styleUrls: ["./success-stories.component.css"],
})
export class SuccessStoriesComponent implements OnInit {
  inBounds = true;
  edge = {
    top: true,
    bottom: true,
    left: true,
    right: true,
  };
  faqs = [];
  targetFAQs = [];
  successForm: FormGroup;
  imageURl =
    "https://pinnacle.works/wp-content/uploads/2022/06/dummy-image.jpg";
  constructor(
    private cmsService: CmsService,
    private formbuilder: FormBuilder
  ) {}
  drop(event: CdkDragDrop<any[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
  ngOnInit() {
    this.setDefaultForm();
    this.getAllSuccessStories();
  }
  setDefaultForm() {
    this.successForm = this.formbuilder.group({
      question: ["", Validators.required],
      answer: ["", Validators.required],
      photo: ["", Validators.required],
    });
  }

  checkEdge(event) {
    this.edge = event;
    console.log("edge:", event);
  }

  getAllSuccessStories() {
    this.cmsService.getAllSuccess().subscribe(
      (data: any) => {
        // console.log(data);
        // swal.fire("created!", "", "success")
        this.faqs = data.data;
        this.targetFAQs = data.data;
      },
      (err) => {
        console.log(err);
        Swal.fire("unable to Fetch!", "", "error");
      }
    );
  }
  createSuccessStories() {}
}
