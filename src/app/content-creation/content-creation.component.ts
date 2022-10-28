import { Component, OnInit } from "@angular/core";
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from "@angular/cdk/drag-drop";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { CmsService } from "../Services/cms.service";
import Swal from "sweetalert2";

@Component({
  selector: "app-content-creation",
  templateUrl: "./content-creation.component.html",
  styleUrls: ["./content-creation.component.css"],
})
export class ContentCreationComponent implements OnInit {
  inBounds = true;
  edge = {
    top: true,
    bottom: true,
    left: true,
    right: true,
  };
  faqs = [];
  targetFAQs = [];
  contentForm: FormGroup;
  imageURl =
    "https://pinnacle.works/wp-content/uploads/2022/06/dummy-image.jpg";
  taskNeedToUpdate: any;

  constructor(
    private cmsservice: CmsService,
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
    this.setDefaultForm();
    this.getAllcontent();
  }
  setDefaultForm() {
    this.contentForm = this.formbuilder.group({
      channel: ["", Validators.required],
      template_name: ["", Validators.required],
      content_heading: ["", Validators.required],
      content: ["", Validators.required],
      photo: ["", Validators.required],
    });
  }
  checkEdge(event) {
    this.edge = event;
    console.log("edge:", event);
  }
  getAllcontent() {
    this.cmsservice.getAllcontent().subscribe(
      (data: any) => {
        this.faqs = data.data;
        // this.targetFAQs = data.data;
      },
      (err) => {
        console.log(err);
        Swal.fire("unable to Fetch!", "", "error");
      }
    );
  }
  createcontent() {
    console.log(this.contentForm.value);
    this.cmsservice
      .updateAndAddcontent(
        { ...this.contentForm.value, position: 0 },
        { type: "add" }
      )
      .subscribe((data: any) => {
        console.log(data);
        Swal.fire("Fetch!", "", "success");
        this.getAllcontent();
      });
  }
  onClickEditItem(task) {
    this.taskNeedToUpdate = task;
    this.contentForm.setValue({
      question: task.question,
      answer: task.answer,
    });
}
}
