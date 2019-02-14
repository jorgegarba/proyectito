import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'HEROES APPLICATION';
  public switch:boolean;

  constructor(){
    this.switch = true;
  }

  toogle(){
    if(this.switch){
      this.switch = false;
    }else{
      this.switch = true;
    }
  }

}
