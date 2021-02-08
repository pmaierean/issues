import {Component, OnInit} from '@angular/core';
import {Element} from '@angular/compiler';
import {MyLink} from './beans';

@Component({
  selector: 'my-menu',
  templateUrl: './myMenu.component.html'
})
// tslint:disable-next-line:component-class-suffix
export class MyMenu implements OnInit {
  displayMenu = false;
  currentMenu = 0;
  ngOnInit(): void {
  }
  clickLnk(ev: Event): void {
    // @ts-ignore
    const title = ev.currentTarget.innerText;
    this.displayMenu = false;
    if (title === 'First') {
      this.displayMenu = true;
    }
  }
  setCurrentMenu(nr: number): void {
    if (this.currentMenu === nr) {
      this.currentMenu = 0;
    }
    else {
      this.currentMenu = nr;
    }
  }
  getStyle(nr: number): string {
    return (nr === this.currentMenu) ? 'display: block' : '';
  }
  getExpanded(nr: number): string {
    return this.currentMenu === 1 ? 'true' : 'false';
  }
  getLinks(i: number): MyLink[] {
    const ret = new Array<MyLink>();
    if (i === 1) {
      ret.push(this.getLink('First', 'This is my first link'));
      ret.push(this.getLink('Second', 'This is my second link'));
    }
    else if ( i === 2) {
      ret.push(this.getLink('Fourth', 'This is my Fourth link'));
      ret.push(this.getLink('Fifth', 'This is my Fifth link'));
      ret.push(this.getLink('Sixth', 'This is my Sixth link'));
    }
    return ret;
  }
  getLink(text: string, content: string): MyLink {
    const r = new MyLink();
    r.text = text;
    r.content = content;
    return r;
  }
  // tslint:disable-next-line:typedef
  clickOnLink(text: string) {
    console.log(text);
  }
}
