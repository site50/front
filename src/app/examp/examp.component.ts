import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { CdkDragDrop, moveItemInArray, DragDropModule } from '@angular/cdk/drag-drop';
import { ReactiveFormsModule, FormBuilder, FormsModule, Validators } from "@angular/forms";

@Component({
  selector: 'app-root',
  standalone: true,
  providers: [],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    NgbDropdownModule,
    DragDropModule,
    FormsModule
  ],
  templateUrl: './examp.component.html',
  styleUrl: './examp.component.scss'
})
export class ExampComponent implements OnInit {
  show = false;
  show_module = false;
  date: Date = new Date();
  time: Date = new Date();
  calendarTime: boolean = false;
  profileForm = this.fb.group({
    task: ['', Validators.required],
    important: [''],
    date: ['', Validators.required],
    time: ['', Validators.required],
    description: [''],
    productivity: [''],
    edication: [''],
    urgent: [''],
    health: [''],
    delete: ['']
  })

  performedTasks: any = [];
  number_token: any = 0;
  prod = false;
  edic = false;
  heal = false;
  urg = false;
  delete = false;
  array: any = []
  new_arr5: any = []
  deleteArr: any = []
  showDelete = false;

  constructor(private fb: FormBuilder) {
    this.new_arr5 = [...this.array]
  }
  showAllTasks() {

    let keys = Object.keys(localStorage);
    for (let key of keys) {
      var t13 = localStorage.getItem(key)!
      var token13 = JSON.parse(t13)
      console.log(key, 'KEY')
      this.new_arr5.push(token13) //SHOW DATA !!!!
      this.array = this.new_arr5
    }
  }
  deleteTask(x: any) {
    x.delete = true;
    this.delete = true
    this.deleteArr.push(x)
    this.new_arr5 = this.array.filter((x: any) => (x.delete != true));
    this.array=this.new_arr5
    console.log(this.array, 'delete', this.deleteArr)
  }

  showDeleted() {
    this.showDelete = true
    this.deleteArr
    console.log(this.deleteArr)
  }

  myTasks() {
    this.heal = false;
    this.edic = false;
    this.prod = false;
    this.urg = false;
    this.array = this.new_arr5
   // this.array = this.array.filter((x: any) => (x.delete != true));
    this.showDelete = false
  }

  myTaskImportant() {
    this.array = this.new_arr5.filter((x: any) => x.important == true)
  }

  performedCheckTask(e: any, task: any) {
    if (e.target.checked == true) {
      this.performedTasks.push(task)
    }
    if (e.target.checked == false) {
      this.performedTasks = this.performedTasks.filter((x: any) => x.task != task.task);
    }
  }

  showPerformed() {
    console.log(this.performedTasks.length, '33HHHH')
    if (this.performedTasks.length > 0) {
      this.array = this.performedTasks
    }
    else {
      this.performedTasks = []
      this.array = this.performedTasks
    }
  }

  tegEvent(a: any) {
    switch (a) {
      case 1:
        this.prod = true
        this.array = this.array.filter((x: any) => { return x.productivity == true; })
        break;
      case 2:
        this.edic = true;
        this.array = this.array.filter((x: any) => { return x.edication == true })
        break;
      case 3:
        this.heal = true;
        this.array = this.array.filter((x: any) => { return x.health == true })
        break;
      case 4:
        this.urg = true;
        this.array = this.array.filter((x: any) => { return x.urgent == true })
        break;
      default:
    }
  }

  changeDate(e: any) {
    console.log(e.target.value)
  }

  showTime() {
    this.calendarTime = true;
  }

  dragDrop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.array,
      event.previousIndex,
      event.currentIndex
    )
  }

  showModuleAddTask() {
    this.show_module = true;
  }

  addTask() {
    var idr = localStorage.length
    var id = idr++;
    this.number_token = id.toString() //make string key token
    localStorage.setItem(this.number_token, JSON.stringify(this.profileForm.value))
    this.array.push(this.profileForm.value)
    this.calendarTime = false;
    this.profileForm.reset()
    this.show_module = false;
  }

  deleteTaskModal() {
    this.show_module = false;
  }

  closeModal() {
    this.show_module = false;
  }

  ngOnInit(): void {
    this.showAllTasks()
  }
}