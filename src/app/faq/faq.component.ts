import { Component, OnInit } from "@angular/core";
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from "@angular/cdk/drag-drop";
import { CmsService } from "../Services/cms.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import Swal from "sweetalert2";
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
    right: true,
  };
  faqs = [];
  targetFAQs = [];
  taskNeedToUpdate;
  faqForm: FormGroup;

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
    this.faqForm = this.formbuilder.group({
      question: ["", Validators.required],
      answer: ["", Validators.required],
    });
    this.GetallFaqs();
  }
  checkEdge(event) {
    this.edge = event;
    console.log("edge:", event);
  }
  GetallFaqs() {
    this.cmsService.getAllFaqs().subscribe(
      (data: any) => {
        // console.log(data);
        // swal.fire("created!", "", "success")
        this.faqs = data.data;
        this.targetFAQs = data.data;
      },
      (err) => {
        console.log(err);
        Swal.fire("unable to create!", "", "error");
      }
    );
  }
  CreateFaqs() {
    console.log(this.faqForm.value);
    this.cmsService
      .updateAndAddFaqs({ ...this.faqForm.value, position: 0 })
      .subscribe((data: any) => {
        console.log(data);
        Swal.fire("Created!", "", "success");

        //  alert("one more question added successfully")
        this.GetallFaqs();
      });
  }
  onClickEditItem(task) {
    this.taskNeedToUpdate = task;
    this.faqForm.setValue({
      question: task.question,
      answer: task.answer,
    });
  }
  onClick(id) {
    this.taskNeedToUpdate = id;
    this.faqForm.setValue({
      question: id.question,
      answer: id.answer,
    });
  }
}
