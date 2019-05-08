import {Component, Input, OnInit} from '@angular/core';
import {Challenge} from '../../Models/challenge';
import {ActivatedRoute, Router} from '@angular/router';
import {ChallengeService} from '../../Service/challenge.service';
import {TransferDataService} from '../../Service/transfer-data.service';
import {Attachment} from '../../Models/attachment';
import {GridRowData} from '../../Models/gridRowData';

@Component({
  selector: 'app-main-challenge',
  templateUrl: './main-challenge.component.html',
  styleUrls: ['./main-challenge.component.css']
})
export class MainChallengeComponent implements OnInit {
  @Input()
  gridRowData: GridRowData;

  @Input()
  challenge: Challenge;

  docTypes = ['Macro & Micro Analysis',
    'Internal & External Analysis',
    'SWOT & TOWS',
    '5Cs',
    'PESTEL',
    'Porter\'s 5 Forces',
    'Vision',
    'Mission',
    'Value',
    'Objective',
    'Perceptual Mapping',
    'Cause & Effect Analysis',
    '5WHYs',
    '3Ms & KPIs'];
  row: Attachment = {
    fileName: '',
    docType: ''
  };
  getRowNodeId: (data) => any;
  private readonly route: ActivatedRoute;
  defaultColDef: { filter: boolean; resizable: boolean; editable: boolean; sortable: boolean };
  private gridApi: any;
  private gridColumnApi: any;
  columnDefs: [];
  readonly rowData: Array<Attachment> = [];

  public constructor(private challengeService: ChallengeService,
                     private router: Router,
                     private transferData: TransferDataService,
                     activatedRoute: ActivatedRoute) {
    this.route = activatedRoute;
    this.columnDefs = require('../../shared/AttachmentColumnConfig.json');
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

  public ngOnInit(): void {

  }

  public addFile() {
    if (this.row.docType && this.row.fileName) {
      this.rowData.push({
        fileName: this.row.fileName,
        docType: this.row.docType
      });
      this.row.docType = '';
      this.row.fileName = '';
      this.gridApi.setRowData(this.rowData);
    }
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

  onSelectionChanged() {
    const selectedRows: Attachment[] = this.gridApi.getSelectedRows();
    console.log(selectedRows);
  }


}


