import { Component, OnInit, OnDestroy, DoCheck} from '@angular/core';
import { Hero } from '../../models/Hero';
import { HeroService } from '../../services/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit, OnDestroy, DoCheck{
  
  public heroes:Array<Hero> = [];
  

  constructor(private _sHeroService:HeroService){
    console.log("Constructor de HeroesComponent");
  }
  
  ngOnInit(){
    console.log("ngOnInit: de HeroesComponent");

    this._sHeroService.getHeores().then((heroes)=>{
      this.heroes = heroes;
    }).catch((error)=>{
      this.heroes = [];
    });
  }

  ngOnDestroy(){
    console.log("ngOnDestroy: de HeroesComponent");
  }

  ngDoCheck(){
    console.log("ngDoCheck: de HeroesComponent");
  }


  eliminar(heroe:Hero){
    this._sHeroService.deleteHeroById(heroe.id).then((response:Hero[])=>{
      this.heroes = response;
    }).catch(()=>{
      console.log("Hubo un error");
    })
  }

}
  
