import { Component } from '@angular/core';
import {animate, group, keyframes, query, state, style, transition, trigger} from "@angular/animations";
import { AnimationEvent } from '@angular/animations'
import {boxAnimation} from "./app.animations";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [boxAnimation],
})
export class AppComponent {
  boxState = 'start';
  visible = true;

  animate() {
    this.boxState = this.boxState === 'end' ? 'start' : 'end';
  }

  animationStarted(event: AnimationEvent) {
    console.log('animationStarted', event)
  }

  animationDone(event: AnimationEvent) {
    console.log('animationDone', event)
  }
}
