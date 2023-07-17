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
  isUpdate = false;
  edge = {
    top: true,
    bottom: true,
    left: true,
    right: true,
  };
  faqs = [];
  targetFAQs = [];
  unassignedList=[]
  taskNeedToUpdate;
  successForm: FormGroup;
  id: any;

  imageURl ="https://pinnacle.works/wp-content/uploads/2022/06/dummy-image.jpg";
 

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
      heading: ["", Validators.required],
      story: ["", Validators.required],
      photo: ["", Validators.required],
    });
  }

  profile_pic:any = "";
  ImageLoader:boolean = false
  onChangeFile(event: any) {
    let imageSrc = <File>event.target.files[0];
    if (imageSrc != undefined) {
      // this.ImageLoader = true
      const formData: FormData = new FormData();
      formData.append('images[]', imageSrc);
      debugger
      this.cmsService.httpRequest('post', '', formData).subscribe((response: any) => {
        // this.ImageLoader = false
        // this.commonSvc.showSuccess("", 'Uploaded')
        this.profile_pic = response.image[0]
      }, (error: any) => {
        this.ImageLoader = false
      })
    }
  }

  checkEdge(event) {
    this.edge = event;
    console.log("edge:", event);
  }

  getAllSuccessStories() {
    this.cmsService.getAllSuccess().subscribe(
      (data: any) => {
        console.log(data);
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

  EditAndAddSuccess() {
    if (!this.isUpdate) {
      this.createSuccessStories();
    } else {
      this.updateSuccessStories();
    }
  }

  createSuccessStories() {
    console.log(this.successForm.value);
    this.cmsService
      .updateAndAddSuccess(
        { ...this.successForm.value, position: 0 },
        { type: "add" }
      )
      .subscribe((data: any) => {
        console.log(data);
        Swal.fire("Story Created Successfully!", "", "success");
        this.getAllSuccessStories();
        this.successForm.reset();

      });
  }

  updateSuccessStories() {
    this.cmsService
      .updateAndAddFaqs(
        { ...this.successForm.value, id: this.taskNeedToUpdate.id, position: 0 },
        { type: "update" }
      )
      .subscribe((data: any) => {
        console.log(data);
        Swal.fire("Updated!", "", "success");
        this.getAllSuccessStories() ;
        this.isUpdate = false;
        this.successForm.reset();
      });
  }

  onClickEditItem(task) {
    this.taskNeedToUpdate = task;
    this.successForm.setValue({
      heading: task.heading,
      story: task.story,
      photo: task.photo,
    });
  }
  onClick(id) {
    this.taskNeedToUpdate = id;
    this.successForm.setValue({});
  }
  delete(id) {
    console.log(id);
    Swal.fire({
      title: "Do you want to Delete this ?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Delete",
      denyButtonText: `Cancel`,
    }).then((result) => {
      if (result.isConfirmed) {
        this.cmsService.deleteSuccess(id.id).subscribe(
          (data: any) => {
            this.getAllSuccessStories();
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
