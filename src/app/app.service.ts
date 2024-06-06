import { Component, Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';



@Injectable({
  providedIn: "root"
})
export class AppService implements OnInit {

private mes=new BehaviorSubject('servive _mes');
curMes=this.mes.asObservable()
constructor(){}

changM(mesM:string){
this.mes.next(mesM)
}

ngOnInit(): void {
  
}
}