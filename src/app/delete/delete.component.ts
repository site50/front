import { Component, Output, Input, EventEmitter, OnInit } from '@angular/core';
import { PageComponent } from '../page/page.component';
import { SearchComponent } from '../search/search.component';

@Component({
  selector: 'app-delete',
  standalone: true,
  imports: [PageComponent, SearchComponent],
  templateUrl: './delete.component.html',
  styleUrl: './delete.component.scss'
})
export class DeleteComponent implements OnInit {
  deleteArr: any[] = [];
  Page: number = 5;
  newArrDelete: any[] = []
  searchDeleted: any = ''
  deleteArrCopy: any[] = []

  showDeleted() {

    let keys = Object.keys(localStorage);
    let keysRemoveArray = keys.filter((x: any) => isNaN(x))

    for (let keyR of keysRemoveArray) {
      let jsonObj = localStorage.getItem(keyR)!
      let arrObj = JSON.parse(jsonObj)
      this.newArrDelete.push(arrObj)
      this.deleteArr = this.newArrDelete
      console.log(this.deleteArr)
    }

  }

  ngOnInit(): void {
    this.showDeleted()
    this.deleteArrCopy = this.deleteArr
    console.log(this.deleteArrCopy)
  }

}
