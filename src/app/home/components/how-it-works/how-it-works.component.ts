import { trigger, state, style, transition, animate, group } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

export const SlideInOutAnimation = [
  trigger('slideInOut', [
    state('in', style({
      'max-height': '100vh', 'opacity': '1', 'visibility': 'visible'
    })),
    state('out', style({
      'max-height': '0px', 'opacity': '0', 'visibility': 'hidden'
    })),
    transition('in => out', [group([
      animate('400ms ease-in-out', style({
        'opacity': '0'
      })),
      animate('600ms ease-in-out', style({
        'max-height': '0px'
      })),
      animate('700ms ease-in-out', style({
        'visibility': 'hidden'
      }))
    ]
    )]),
    transition('out => in', [group([
      animate('1ms ease-in-out', style({
        'visibility': 'visible'
      })),
      animate('600ms ease-in-out', style({
        'max-height': '100vh'
      })),
      animate('800ms ease-in-out', style({
        'opacity': '1'
      }))
    ]
    )])
  ]),
]

@Component({
  selector: 'app-how-it-works',
  templateUrl: './how-it-works.component.html',
  styleUrls: ['./how-it-works.component.scss'],
  animations: [SlideInOutAnimation]
})
export class HowItWorksComponent implements OnInit {
  registerInterest = false;
  animationState = 'out';
  constructor() { }

  ngOnInit(): void {
  }
  showRegisterInterest() {
    this.registerInterest = true;
    this.animationState = this.animationState === 'out' ? 'in' : 'out';
  }
  closeEvnt() {
    this.animationState = this.animationState === 'out' ? 'in' : 'out';
  }
}
