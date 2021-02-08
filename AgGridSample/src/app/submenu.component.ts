import {Component, Input, OnInit} from '@angular/core';
import {Element} from '@angular/compiler';
import {MyLink} from './beans';

@Component({
  selector: 'sub-menu',
  templateUrl: './submenu.component.html'
})
// tslint:disable-next-line:component-class-suffix
export class Submenu implements OnInit {
  @Input() comps: MyLink[];
  ngOnInit(): void {
  }
  clickSub(ev: Event): void {
    // @ts-ignore
    const t = ev.currentTarget.name;
    console.log('Clicked on the rendered link ' + t);
  }

}
