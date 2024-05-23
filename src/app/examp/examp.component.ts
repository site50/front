import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { CdkDragDrop, moveItemInArray, DragDropModule } from '@angular/cdk/drag-drop';
import { ReactiveFormsModule, FormBuilder, FormsModule,Validators } from "@angular/forms";
import { DeleteComponent } from '../delete/delete.component';
import { Observable, Subject } from 'rxjs';
import { PageComponent } from '../page/page.component';
import { SearchComponent } from '../search/search.component';

@Component({
  selector: 'app-root',
  standalone: true,
  providers: [],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    NgbDropdownModule,
    DragDropModule,
    FormsModule,
    DeleteComponent,
    PageComponent,
    SearchComponent
  ],
  templateUrl: './examp.component.html',
  styleUrl: './examp.component.scss'
})
export class ExampComponent implements OnInit {
  show_module = false;
  date: Date = new Date();
  time: Date = new Date();
  calendarTime: boolean = false;
  profileForm = this.fb.group({
    id: [1],
    task: ['', Validators.required],
    important: [false],
    performed: [''],
    date: ['', Validators.required],
    time: ['', Validators.required],
    description: [''],
    productivity: [''],
    edication: [''],
    health: [''],
    urgent: [''],
    delete: ['']
  })


  number_token: any = 1;
  array: any = []
  new_arr5: any = []
  showDelete: boolean = false;
  deleteModul: boolean = false;
  body: any = []
  tegTask = [
    { task: 'Productivity', teg: { productivity: true }, show: true },
    { task: 'Edication', teg: { edication: true }, show: true },
    { task: 'Health', teg: { health: true }, show: true },
    { task: 'Urgently', teg: { urgent: true }, show: true }
  ];

  statusTask = [
    { task: 'Important', teg: { important: true }, show: true },
    { task: 'Performed', teg: { performed: true }, show: true },
  ]
  statusDelete = [
    { task: 'Deleted', teg: { delete: true }, show: true },
  ]

  keyOb: any = {}
  arrNew: any[] = []
  delItm: any = ''
  idDelIt: any = ''
  id: any = 1
  kT: any = ''
  private storageSub = new Subject<string>();
  key: any = ''
  search: any = ''
  Page: number = 5;
  showPages: any = false
  importantCheckImg: any = true
  changetTask: any = false;
  x: any = 0;
  invalid: any = false

  constructor(private fb: FormBuilder) { }

  deleteAskTask(x: any) {
    this.body = x;
    this.body.delete = true;
    this.deleteModul = true;
    this.delItm = x.delete
    this.idDelIt = this.body.id
  }
  confermDelete(conform: any) {
    if (conform === true) {
      localStorage.removeItem(this.idDelIt)
      this.storageSub.next('removed')
      var keyRemove = (this.idDelIt + 'remove')
      this.array = []
      this.new_arr5 = []
      let keys = Object.keys(localStorage);
      let keys3 = keys.filter(Number)
      for (let key of keys3) {
        var t13 = localStorage.getItem(key)!
        var token13 = JSON.parse(t13)
        console.log(token13, 'TOKEN13')
        this.new_arr5.push(token13)
        this.array = this.new_arr5

      }
      localStorage.setItem(keyRemove, (JSON.stringify(this.body)))// remove SET LC!!!
    }
    if (conform === false) {
      this.body.delete = false
    }
    this.deleteModul = false

  }

  addTask() {

    if (this.changetTask == true) {
      this.number_token = this.profileForm.value.id
      var index = this.array.indexOf(this.x)
      this.array[index] = this.profileForm.value

    }
    if (localStorage.length < 1) {

      this.number_token = this.id;
      this.array.push(this.profileForm.value)
      console.log(this.number_token, 'nnnn', this.id, 'IF-2')
    }
    if (localStorage.length > 0 && this.changetTask == false) {
      this.key = Object.keys(localStorage);
      var v = localStorage.length
      var count = 1
      this.number_token = v + count
      this.profileForm.value.id = v + count
      this.array.push(this.profileForm.value)
    }
   
    localStorage.setItem(this.number_token, (JSON.stringify(this.profileForm.value)))//add set<
    this.changetTask = false
    this.calendarTime = false;
    this.profileForm.reset()
    this.show_module = false;

    console.log(localStorage.length)
  }

  all(x: any) {
    this.changetTask = true
    this.x = x;
    //console.log(x)
    this.profileForm.setValue(x)
    this.show_module = true;
  }

  important() {
    this.importantCheckImg = !this.importantCheckImg
  }

  deleteShow(obj: any) {
    obj.show = !obj.show;
    this.showDelete = !this.showDelete
  }

  myTasks(obj: any) {
    this.keyOb = Object.keys(obj.teg)
    obj.show = !obj.show;
    obj.show && obj.task ?
      (
        this.myTasksAll(),
        this.removeDubl()
      )
      :
      this.array = this.array.filter((x: any) => { return x[this.keyOb] == true; })
  }

  removeDubl() {
    const dublAr = this.array.filter((item: any, index: any) => {
      return index === this.array.findIndex((i: any) => item.task === i.task && item.date === i.date && item.time === i.time);
    });
    this.array = dublAr
    this.new_arr5 = dublAr
  }

  myTasksAll() {
    this.showAllTasks()
    this.removeDubl()
  }

  showAllTasks() {
    let keys = Object.keys(localStorage);
    let keys3 = keys.filter(Number)
    for (let key of keys3) {
      var t13 = localStorage.getItem(key)!
      var token13 = JSON.parse(t13)
      this.new_arr5.push(token13)
      this.array = this.new_arr5
    }
  }


  changeDate(e: any) {
    console.log(e.target.value)
  }

  showTime() {
    this.calendarTime = true;
  }

  dragDrop(event: CdkDragDrop<string[]>) {
    moveItemInArray(
      this.array,
      event.previousIndex,
      event.currentIndex
    )
  }


  showModuleAddTask() {
    this.show_module = true;
  }

  deleteTaskModal() {
    this.show_module = false;
  }

  closeModal() {
    this.show_module = false;
    console.log(this.show_module)
  }

  ngOnInit(): void {
    this.showAllTasks();
    this.new_arr5 = this.array;
  }
}