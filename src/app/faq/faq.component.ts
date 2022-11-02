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
  isUpdate = false;
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
  id: any;

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

  EditAndAdd() {
    if (!this.isUpdate) {
      this.CreateFaqs();
    } else {
      this.updateFaq();
    }
  }
  CreateFaqs() {
    console.log(this.faqForm.value);
    this.cmsService
      .updateAndAddFaqs({ ...this.faqForm.value, position: 0 }, { type: "add" })
      .subscribe((data: any) => {
        console.log(data);
        Swal.fire("Created!", "", "success");
        this.GetallFaqs();
      });
  }
  updateFaq() {
    this.cmsService
      .updateAndAddFaqs(
        { ...this.faqForm.value, id: this.taskNeedToUpdate.id, position: 0 },
        { type: "update" }
      )
      .subscribe((data: any) => {
        console.log(data);
        Swal.fire("Updated!", "", "success");
        this.GetallFaqs();
        this.isUpdate = false;
        this.faqForm.reset();
      });
  }

  onClickEditItem(task) {
    this.taskNeedToUpdate = task;
    this.isUpdate = true;
    this.faqForm.setValue({
      question: task.question,
      answer: task.answer,
    });
  }
  onClick(id) {
    this.taskNeedToUpdate = id;
    this.faqForm.setValue({});
  }
  delete(id) {
    console.log(id);
    Swal.fire({
      title: "Do you want to delete?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Delete",
      denyButtonText: `Cancel`,
    }).then((result) => {
      if (result.isConfirmed) {
        this.cmsService.delete(id.id).subscribe(
          (data: any) => {
            this.GetallFaqs();
            console.log(data);
            Swal.fire("Deleted!", "", "success");
          },
          (error) => {
            console.log(error);
            Swal.fire("Unable to Delete!", "", "error");
          }
        );
      } else if (result.isDenied) {
        Swal.fire("Not Deleted", "", "info");
      }
    });
  }
}
