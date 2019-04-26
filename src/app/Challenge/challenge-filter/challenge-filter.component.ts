import {Component, Input, OnInit} from '@angular/core';
import {Challenge} from '../../Models/challenge';
import {Filter} from '../../Models/filter';
import {GridRowData} from '../../Models/gridRowData';

@Component({
  selector: 'app-challenge-filter',
  templateUrl: './challenge-filter.component.html',
  styleUrls: ['./challenge-filter.component.css']
})
export class ChallengeFilterComponent implements OnInit {
  @Input() gridRowData: GridRowData;
  @Input() challenge: Challenge;
  columnDefs: [];
  defaultColDef: any;
  private readonly rowData: Array<Filter> = [];
  private readonly Filter: Filter;
  private gridColumnApi: any;
  private gridApi: any;
  private getRowNodeId: (data) => any;

  constructor() {
    this.columnDefs = require('../../shared/FilterColumnConfig.json');
    this.defaultColDef = {
      editable: false,
      sortable: true,
      filter: true,
      resizable: true
    };
    this.getRowNodeId = function (data) {
      return data.id;
    };
    this.Filter = {filterDescription: ''};
  }

  ngOnInit() {
  }

  public addFile() {
    console.log(this.Filter);
    if (this.Filter) {
      this.rowData.push(Object.assign({}, this.Filter));
      this.gridApi.setRowData(this.rowData);
      this.Filter.filterDescription = '';
    }
  }

  onGridReady(params: any) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    // this.autoSizeAll();
    this.sizeToFit();
  }

  sizeToFit() {
    this.gridApi.sizeColumnsToFit();
  }

  onSelectionChanged($event: any) {
    const selectedRows: Filter[] = this.gridApi.getSelectedRows();
    console.log(selectedRows);

  }
}

