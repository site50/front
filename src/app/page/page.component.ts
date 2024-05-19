import { Component ,Input, Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-page',
  standalone: true,
  imports: [],
  templateUrl: './page.component.html',
  styleUrl: './page.component.scss'
})
export class PageComponent {

@Input() page:number=5;
@Output() pageChange=new EventEmitter()

 showPage(){
  console.log('PAGE')
this.page=this.page+5;
this.pageChange.emit(this.page)
} 
}
