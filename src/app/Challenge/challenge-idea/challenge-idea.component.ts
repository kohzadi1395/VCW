import {Component, Input, OnInit} from '@angular/core';
import {Challenge} from '../../Models/challenge';
import {Idea} from '../../Models/idea';
import {ChallengeGetDTO, ChallengePostIdeaDTO} from '../../DTOs/challengeDTOs';
import {ChallengeService} from '../../Service/challenge.service';
import {NewGuid} from '../../../Utilities/UtilityStringFunc';


@Component({
  selector: 'app-challenge-idea',
  templateUrl: './challenge-idea.component.html',
  styleUrls: ['./challenge-idea.component.css']
})
export class ChallengeIdeaComponent implements OnInit {

  @Input()
  challenge: Challenge;

  columnDefs: [];

  defaultColDef: any;
  private rowData: Array<Idea> = [];
  private idea: Idea;
  private gridColumnApi: any;
  private gridApi: any;
  private getRowNodeId: (data) => any;
  private challengeDTO: ChallengeGetDTO;

  constructor(private challengeService: ChallengeService) {
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
    this.idea = {
      description: '',
      title: '',
      id: '',
      isPassed: false
    };
  }

  get Idea(): Idea {
    return this.idea;
  }

  set Idea(value: Idea) {
    this.idea = value;
  }

  ngOnInit() {
    this.challengeService.getChallenge(this.challenge.id).subscribe((data: ChallengeGetDTO) => {
      this.challengeDTO = data;
      if (this.challengeDTO.ideas) {
        this.rowData = this.challengeDTO.ideas;
      }
    });
  }

  public addFile() {
    if (this.idea) {
      this.idea.id = NewGuid();
      this.rowData.push(Object.assign({}, this.idea));
      this.gridApi.setRowData(this.rowData);
      this.idea.title = '';
      this.idea.description = '';
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
    if (selectedRows && selectedRows.length > 0) {
      this.Idea = selectedRows[0];
    }
  }

  submitForm() {
    const challengePostIdeaDTO = new ChallengePostIdeaDTO();
    challengePostIdeaDTO.id = this.challenge.id;
    challengePostIdeaDTO.Ideas = this.rowData;
    this.challengeService.postChallengeIdea(challengePostIdeaDTO);
  }

  closeForm() {
  }
}

