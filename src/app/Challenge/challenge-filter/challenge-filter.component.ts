import {Component, Input, OnInit} from '@angular/core';
import {Challenge} from '../../Models/challenge';
import {Filter} from '../../Models/filter';
import {GridRowData} from '../../Models/gridRowData';
import {NewGuid} from '../../../Utilities/UtilityStringFunc';
import {ChallengePostFilterDTO} from '../../DTOs/challengeDTOs';
import {ChallengeService} from '../../Service/challenge.service';

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
  private Filter: Filter;
  private gridColumnApi: any;
  private gridApi: any;
  private getRowNodeId: (data) => any;

  constructor(private challengeService: ChallengeService) {
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
    this.Filter = {
      description: '',
      title: '',
      id: ''
    };
  }

  ngOnInit() {
  }

  public addFile() {
    console.log(this.Filter);
    if (this.Filter) {
      this.Filter.id = NewGuid();
      this.rowData.push(Object.assign({}, this.Filter));
      this.gridApi.setRowData(this.rowData);
      this.Filter = {
        description: '',
        title: '',
        id: ''
      };
      console.log(this.Filter);
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
    console.log($event);

  }

  submitForm() {
    const challengePostFilterDTO = new ChallengePostFilterDTO();
    challengePostFilterDTO.id = this.challenge.id;
    challengePostFilterDTO.filters = this.rowData;
    this.challengeService.postChallengeFilter(challengePostFilterDTO);
  }

  closeForm() {
  }
}

