import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
    <button *ngIf="!value">{{ value }}</button>
    <button class="xButton" *ngIf="value == 'X'">{{ value }}</button>
    <button class="oButton" *ngIf="value == 'O'">{{ value }}</button>
  `,
  styles: [
    'button { width: 100%; height: 100%; font-size: 7em !important; font-weight: bold; background-color: #641185;}',
    '.xButton { background-color: lightblue;  color: white}',
    '.oButton { background-color: white;  color: lightblue}'
  ]
})
export class SquareComponent {
  @Input()
  value: string;
}
