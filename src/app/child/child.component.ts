import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent implements OnInit{
mesP:string='child_MES';
f:any=['FFF','KKKK']
x:string='XXX'
show:boolean=false
constructor(private service:AppService){}

changeC(){
  this.show =!this.show
  this.show? this.f:this.x
  //this.service.changM('MYchild')
  }

ngOnInit(): void {
  this.service.curMes.subscribe((i)=>this.mesP=i)
}
}
