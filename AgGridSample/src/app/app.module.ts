import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AgGridModule} from '@ag-grid-community/angular';
import { AppComponent } from './app.component';
import { MyGridComponent } from './myGrid.component';
import { MyMenu } from './myMenu.components';
import { Submenu } from './submenu.component';

@NgModule({
  declarations: [
    Submenu,
    MyMenu,
    MyGridComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    AgGridModule.withComponents([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
