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
@Input() Array:any=[]
//@Input() Search:any=''
Search:any=''
@Input() New_arr5:any=[]

@Output() ArrayChange=new EventEmitter()
@Output() New_arr5Change=new EventEmitter()

searchItem(){
  this.ArrayChange.emit(this.Array)
  if(this.Search!==""){
 // console.log(this.Search,'HHHH')
    let searchV=this.Search.toLocaleLowerCase();
      this.Array=this.Array.filter((x:any)=>{
       //console.log(searchV,'AAA')
    return x.task.toLocaleLowerCase().match(searchV) 
    })
    
    }
    if(this.Search==""){
      this.ArrayChange.emit(this.New_arr5)
   
    }
}

ngOnInit(): void {
 //this.searchItem()
}
}
