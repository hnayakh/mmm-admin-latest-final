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
  contentForm: FormGroup;
  imageURl =
    "https://pinnacle.works/wp-content/uploads/2022/06/dummy-image.jpg";

  constructor(
    private cmsservice: CmsService,
    private formbuilder: FormBuilder
  ) {}

  get formGet(){
    return this.contentForm.controls;
  }
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
    this.faqs = [
      {
        id: 1,
        question: "What is a connect?",
        answer:
          "You can think of it like a virtual currency Which can be use to connect or Communicate with other peoples....",
      },
      {
        id: 2,
        question: "What is MMM?",
        answer:
          "You can think of it like a virtual currency Which can be use to connect or Communicate with other peoples....",
      },
      {
        id: 3,
        question: "What is MMM wallet?",
        answer:
          "You can think of it like a virtual currency Which can be use to connect or Communicate with other peoples....",
      },
      {
        id: 4,
        question: "What is Matchmeter?",
        answer:
          "You can think of it like a virtual currency Which can be use to connect or Communicate with other peoples....",
      },
    ];
    this.targetFAQs = this.faqs;
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

  EditAndAddcontent() {
    if (!this.isUpdate) {
      this.createcontent();

    } else {
      this.updatecontent();
    }
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
        Swal.fire(" Content create Successfully !", "", "success");
        this.getAllcontent();
        this.contentForm.reset({
          channel: "",
          template_name: "",
          content_heading: "",
          content: "",
          photo: "",
        });
      });
  }

  updatecontent() {
    this.cmsservice
      .updateAndAddFaqs(
        {
          ...this.contentForm.value,
          id: this.taskNeedToUpdate.id,
          position: 0,
        },
        { type: "update" }
      )
      .subscribe((data: any) => {
        console.log(data);
        Swal.fire("Updated!", "", "success");
        this.getAllcontent();
        this.isUpdate = false;
        this.contentForm.reset();
      });
  }

  onClickEditItem(task) {
    this.taskNeedToUpdate = task;
    this.contentForm.setValue({
      channel: task.channel,
      template_name: task.template_name,
      content_heading: task.content_heading,
      content: task.content,
      photo: task.photo,
    });
  }
  onClick(id) {
    this.taskNeedToUpdate = id;
    this.contentForm.setValue({});
  }

  deletecontent(id) {
    console.log(id);
    Swal.fire({
      title: "Do you want to delete?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Delete",
      denyButtonText: `Cancel`,
    }).then((result) => {
      if (result.isConfirmed) {
        this.cmsservice.deletecontent(id.id).subscribe(
          (data: any) => {
            this.getAllcontent();
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
