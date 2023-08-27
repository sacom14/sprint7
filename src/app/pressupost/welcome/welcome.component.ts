import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {

  public showCalculator:boolean = false;

  goToCalculator():void{
    this.showCalculator = true;
  }

}