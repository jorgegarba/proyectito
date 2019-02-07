import { Component, OnInit, OnDestroy, DoCheck} from '@angular/core';
import { Hero } from '../../models/Hero';
import { HEROES } from '../../seeders/seederHeroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit, OnDestroy, DoCheck{
  
  public heroes:Array<Hero> = [];
  public selectedHero:Hero;

  constructor(){
    console.log("Constructor de HeroesComponent");
  }
  
  ngOnInit(){
    console.log("ngOnInit: de HeroesComponent");
    this.heroes = HEROES;
    console.log(this.heroes);
  }

  onSelect(hero:Hero):void{
    this.selectedHero = hero;
  }

  ngOnDestroy(){
    console.log("ngOnDestroy: de HeroesComponent");
  }

  ngDoCheck(){
    console.log("ngDoCheck: de HeroesComponent");
  }

}
  
