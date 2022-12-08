import { Component } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})

// function mod(n:number) {
//   if(n%2==0){
//     return true;
//   }
//   return false;
// }

export class AddComponent {
  public a="";
  public b="";
  public sum="";
  public isEven=false;
  // public isOdd=true;

  

  add(){
    this.sum=this.a+this.b;

    let t:number =Number( this.a+this.b);
    if(t%2===0){
      this.even['test-danger']=false;
      this.even['test-success']=true;
      console.log("even");

    }
    else{
      this.even['test-danger']=true;
      this.even['test-success']=false;
      console.log("odd");
    }
  }


  public even={
    "test-success":this.isEven,
    "test-danger":this.isEven
  }
  
}
