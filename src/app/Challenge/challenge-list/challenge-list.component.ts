import {Component, OnInit} from '@angular/core';
import {Challenge} from '../../Models/challenge';
import {ChallengeService} from '../../Service/challenge.service';
import {ActivatedRoute, Router} from '@angular/router';
import {TransferDataService} from '../../Service/transfer-data.service';
import {GridRowData} from '../../Models/gridRowData';

@Component({
  selector: 'app-challenge-list',
  templateUrl: './challenge-list.component.html',
  styleUrls: ['./challenge-list.component.css']
})


export class ChallengeListComponent implements OnInit {

  selectedChallenge: GridRowData = {
    columnNameClicked: '',
    columnData: null
  };
  private getRowNodeId: (data) => any;
  private rowData: ({
    id: string,
    title: string,
    description: string,
    deadline: string,
    firstBounce: number,
    secondBounce: number,
    thirdBounce: number,
    companyName: number,
    challengeType: boolean,
    challengeStateCode: number
  }) [];
  private defaultColDef: { filter: boolean; resizable: boolean; editable: boolean; sortable: boolean };
  private gridApi: any;
  private gridColumnApi: any;
  private columnDefs: any;
  private readonly route: ActivatedRoute;

  public constructor(private challengeService: ChallengeService,
                     private router: Router,
                     private transferData: TransferDataService,
                     activatedRoute: ActivatedRoute) {
    this.route = activatedRoute;
    this.columnDefs = require('../../shared/challengeColumnConfig.json');
    this.rowData = require('../../shared/challengeData.json');
    this.defaultColDef = {
      editable: false,
      sortable: true,
      filter: true,
      resizable: true
    };
    this.getRowNodeId = function (data) {
      return data.id;
    };


  }

  ngOnInit(): void {
  }

  public onCellClick(data: any): any {
    this.selectedChallenge.columnNameClicked = data.column;
    this.selectedChallenge.columnData = data.row;
    console.log(this.selectedChallenge);
    this.transferData.storage = this.selectedChallenge;
    this.router.navigate(['panelChallenge'], {relativeTo: this.route});
  }

  onGridReady(params: any) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    // this.autoSizeAll();
    this.sizeToFit();
  }

  autoSizeAll() {
    const allColumnIds = [];
    this.gridColumnApi.getAllColumns().forEach(function (column) {
      allColumnIds.push(column.colId);
    });
    this.gridColumnApi.autoSizeColumns(allColumnIds);
  }

  sizeToFit() {
    this.gridApi.sizeColumnsToFit();
  }

  onSelectionChanged($event: any) {
    // this.selectedChallenge.columnNameClicked = data.column;
    // this.selectedChallenge.columnData = data.row;
    // console.log(this.selectedChallenge);

    const selectedRows: Challenge[] = this.gridApi.getSelectedRows();
    this.transferData.storage = selectedRows[0];
    this.router.navigate(['panelChallenge'], {relativeTo: this.route});

    console.log(selectedRows);
    // document.querySelector('#selectedRows').innerHTML = selectedRowsString;

  }
}


