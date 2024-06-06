import { Component, signal,effect, computed,OnInit, Input,Output, EventEmitter} from '@angular/core';
import { Ex } from '../examp/exam';
import { NgForm} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppService } from '../app.service';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-mytask',
  standalone: true,
  imports: [ FormsModule, ChildComponent],
  templateUrl: './mytask.component.html',
  styleUrl: './mytask.component.scss'
})
export class MytaskComponent implements OnInit{
@Input() Array:any=[]
mesC:string='CHILD_MES';

constructor(private service:AppService){ }
change(){
this.service.changM('PARENT_MES')
}

ngOnInit(): void {
this.service.curMes.subscribe((i)=>this.mesC=i)

}

}
