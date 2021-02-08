import {Component, OnInit} from '@angular/core';
import { MyDate } from './beans';
import {Module} from '@ag-grid-community/core';
import {AllCommunityModules} from '@ag-grid-community/all-modules/dist/cjs/main';
import { AgGridAngular } from '@ag-grid-community/angular';

@Component({
  selector: 'my-grid',
  templateUrl: './myGrid.component.html'
})
export class MyGridComponent implements OnInit {
  gridApi;
  gridColumnApi;
  gridOptions;
  pageSize;
  rowSelection;
  overlayNoRowsTemplate = 'Empty table';
  title = 'SampleAngularApp';
  columnDefs: any;
  defaultColDef: any;
  localeText: any;
  rowClassRules: any;
  rowData: MyDate[];
  modules: Module[] = AllCommunityModules;
  gridContainerStyle: any;
  ngOnInit(): void {
    this.gridContainerStyle = this.getGridContainerStyle();
    this.localeText = {
      to: 'to',
      of: 'of',
      first: 'first',
      last: 'last',
      next: 'next',
      previous: 'previous'
    };
    this.rowClassRules = {
      highlight(params): any{
        return !params.data.isReviewed;
      }
    };
    this.defaultColDef = { sortable: true };
    this.columnDefs = [
      {headerName:  'Number',
        field: 'number' ,
        suppressSizeToFit: true,
        cellClass: ['cell-wrap-text', 'nummber'],
        cellStyle: { 'white-space': 'normal' , 'line-height': '16px', padding: '5px 10px' },
        cellClicked: this.onCellClicked,
        sortable: true
      },
      {headerName:  'Key',
        field: 'key' ,
        suppressSizeToFit: true,
        cellClass: ['cell-wrap-text', 'key'],
        cellStyle: { 'white-space': 'normal' , 'line-height': '16px', padding: '5px 10px' },
        cellClicked: this.onCellClicked,
        sortable: true
      },
      {headerName:  'Value',
        field: 'value' ,
        suppressSizeToFit: true,
        cellClass: ['cell-wrap-text', 'value'],
        cellStyle: { 'white-space': 'normal' , 'line-height': '16px', padding: '5px 10px' },
        cellClicked: this.onCellClicked,
        sortable: true
      }
    ];
  }

  getMyDate(nr: number, key: string, value: string): MyDate{
    const ret = new MyDate();
    ret.number = nr;
    ret.key = key;
    ret.value = value;
    return ret;
  }
  onCellClicked(ev: Event): void {
    console.log('Cell clicked');
  }
  onGridReady(params): void{
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.gridOptions = params.gridOptions;
    this.gridApi.resetRowHeights();
    this.onPageSizeInit();
    this.rowSelection = 'multiple';
    this.gridColumnApi.setColumnVisible('isReviewed', false);
    this.rowData = new Array<MyDate>();
    this.rowData.push(this.getMyDate(1, 'key1', 'this is a simple value'));
    this.rowData.push(this.getMyDate(2, 'key2', 'this is the second simple value'));
    this.rowData.push(this.getMyDate(3, 'key3', 'this is the third simple value'));
    this.gridApi.setColumnDefs(this.columnDefs);
    this.gridApi.setRowData(this.rowData);
    this.gridApi.setDomLayout('autoHeight');
  }
  onPageSizeInit(): void{
    this.pageSize = localStorage.getItem('reqDb.pageSize');
    if (this.pageSize === undefined || this.pageSize === null || this.pageSize === 'undefined') {
      this.pageSize = '10';
    }
    this.gridApi.paginationSetPageSize(Number(this.pageSize));
  }
  getRowStyle(params): any{
    params.data.ageStyle = '';
    return {
      'font-weight' : !params.data.isReviewed ? 'bold' : 'normal', width : '100%', height: '30px'
    };
  }
  getGridContainerStyle(): any {
    // tslint:disable-next-line:no-console
    console.debug('Get grid console style');
    const t = (document.getElementsByClassName('ag-full-width-container')[0] as HTMLElement);
    if (t !== undefined) {
      return {width: '100%', clear: 'both', height: (t.offsetHeight + 105) + 'px', overflow: 'hidden', 'background-color': '#FAF9FA'};
    }
    return t;
  }

}
