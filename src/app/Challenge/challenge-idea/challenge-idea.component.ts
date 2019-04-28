import {Component, Input, OnInit} from '@angular/core';
import {Challenge} from '../../Models/challenge';
import {Idea} from '../../Models/idea';
import {GridRowData} from '../../Models/gridRowData';

@Component({
  selector: 'app-challenge-idea',
  templateUrl: './challenge-idea.component.html',
  styleUrls: ['./challenge-idea.component.css']
})
export class ChallengeIdeaComponent implements OnInit {
  @Input() gridRowData: GridRowData;
  @Input() challenge: Challenge;
  columnDefs: [];
  defaultColDef: any;
  private readonly rowData: Array<Idea> = [];
  private readonly Idea: Idea;
  private gridColumnApi: any;
  private gridApi: any;
  private getRowNodeId: (data) => any;

  constructor() {
    this.columnDefs = require('../../shared/IdeaColumnConfig.json');
    this.defaultColDef = {
      editable: false,
      sortable: true,
      filter: true,
      resizable: true
    };
    this.getRowNodeId = function (data) {
      return data.id;
    };
    this.Idea = {
      ideaDescription: '',
      ideaTitle: '',
      id: ''
    };
  }

  ngOnInit() {
  }

  public addFile() {
    console.log(this.Idea);
    if (this.Idea) {
      this.rowData.push(Object.assign({}, this.Idea));
      this.gridApi.setRowData(this.rowData);
      this.Idea.ideaDescription = '';
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
    const selectedRows: Idea[] = this.gridApi.getSelectedRows();
    console.log(selectedRows);

  }
}

