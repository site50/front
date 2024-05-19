import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormsModule, Validators } from "@angular/forms";

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [  ReactiveFormsModule,
      FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent implements OnInit{
@Input() Array:any[]=[]
@Input() Search:any=''
@Input() New_arr5:any[]=[]

@Output() ArrayChange=new EventEmitter()
@Output() New_arr5Change=new EventEmitter()

searchItem(){
 // console.log(this.Array,'AAAA', this.Search)
  if(this.Search!==""){
    let searchV=this.Search.toLocaleLowerCase();
    this.Array=this.Array.filter((x:any)=>{
      //console.log(this.array,'ARRR') //70 string
   
    this.ArrayChange.emit(this.Array)
    return x.task.toLocaleLowerCase().match(searchV) 
    })
    
    }
    if(this.Search==""){
      this.ArrayChange.emit(this.New_arr5)
   
  //  this.New_arr5Change.emit(this.New_arr5)
   
  //  this.Array=this.New_arr5
    //console.log(this.New_arr5,'hhhh', this.Array)
    }
}

ngOnInit(): void {
  this.searchItem()
}
}
