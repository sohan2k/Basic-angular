import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  public n="";
  public res=[];

  table(){
    let t=Number(this.n);
    let a=[];
    for(let i=0;i<=10;i++){
      a[i]=i*t;
    }
    return a;
  }
  
}
