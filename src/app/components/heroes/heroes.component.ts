import { Component } from '@angular/core';
import { Hero } from '../../models/Hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {
  public hero:Hero = {
      id:10,
      name:'SuperMan'
  };
}
  
