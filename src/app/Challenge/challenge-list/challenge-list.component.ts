import {Component, OnInit} from '@angular/core';
import {Challenge, GridRowData} from '../../shared/Track.model';
import {ChallengeService} from '../../Service/challenge.service';


@Component({
  selector: 'app-challenge-list',
  templateUrl: './challenge-list.component.html',
  styleUrls: ['./challenge-list.component.css']
})


export class ChallengeListComponent implements OnInit {
  public rows: Array<any> = [];
  public columns: Array<any> = [
    {title: 'Title', name: 'title', filtering: {filterString: '', placeholder: 'Filter by title'}},
    {
      title: 'Description',
      name: 'description',
      sort: false,
      filtering: {filterString: '', placeholder: 'Filter by description'}
    },
    // {title: 'Deadline', className: ['office-header', 'text-success'], name: 'deadline', sort: 'asc'},
    {title: 'Deadline', name: 'deadline', sort: 'asc'},
    {
      title: 'FirstBounce ($).',
      name: 'firstBounce',
      sort: '',
      filtering: {filterString: '', placeholder: 'Filter by firstBounce.'}
    },
    {
      title: 'SecondBounce ($).',
      name: 'secondBounce',
      sort: '',
      filtering: {filterString: '', placeholder: 'Filter by secondBounce.'}
    },
    {
      title: 'ThirdBounce ($).',
      name: 'thirdBounce',
      sort: '',
      filtering: {filterString: '', placeholder: 'Filter by thirdBounce.'}
    },
    {title: 'CompanyName', className: 'text-warning', name: 'companyName'},
  ];


  public page = 1;
  public itemsPerPage = 10;
  public maxSize = 5;
  public numPages = 1;
  public length = 0;

  public config: any = {
    paging: true,
    sorting: {columns: this.columns},
    filtering: {filterString: ''},
    className: ['table-striped', 'table-bordered']
  };
  isModalOpen = false;
  selectedChallenge: GridRowData = {
    columnNameClicked: '',
    columnData: null
  };
  private data: Array<Challenge> =
    [
      {
        id: 'cecd780c-8626-5601-7bc9-0a368be3c6e3',
        title: 'Inside the SQL Server Query Optimize',
        description: 'rarendum et gravum gravis quo Id estum. quis quantare estis ut manifestum quo, travissimantor imaginator',
        deadline: '2018-12-19T18:21:20.6609984',
        firstBounce: '8973.20',
        secondBounce: '4337.08',
        thirdBounce: '2084.87',
        companyName: 'Remunommover Direct Inc',
        challengeType: true,
      },
      {
        id: 'e33969a0-b921-4603-6221-1f12254da39f',
        title: 'SQL Server Statistic',
        description: 'quo dolorum non quoque Versus quis plurissimum Versus quorum eggredior. quo quad Id brevens, quis e et',
        deadline: '2012-12-09T21:06:21.6108402',
        firstBounce: '5780.46',
        secondBounce: '4710.17',
        thirdBounce: '2108.14',
        companyName: 'Lomquesticator Direct Company',
        challengeType: false,

      },
      {
        id: '4a1070ca-b306-8f23-412b-2c569d091387',
        title: 'SQL Server Hardwar',
        description: 'homo, e egreddior quorum delerium. linguens gravum estis quad bono novum gravis fecit, vantis. transit.',
        deadline: '2015-08-07T21:29:47.4181423',
        firstBounce: '5920.42',
        secondBounce: '4413.02',
        thirdBounce: '1457.87',
        companyName: 'Tuppickazz Direct ',
        challengeType: true,

      },
      {
        id: '309145d3-fb78-3196-4b8e-34a2d6cefe85',
        title: 'Inside the SQL Server Query Optimize',
        description: 'delerium. novum quo apparens vobis estum. Longam, fecundio, plorum quo transit. manifestum Longam, non volcans',
        deadline: '2017-03-20T21:09:41.6293491',
        firstBounce: '5397.87',
        secondBounce: '3745.98',
        thirdBounce: '2332.83',
        companyName: 'Qwibanepicator',
        challengeType: true,

      },
      {
        id: '02d00dc2-9ee2-ff41-9543-3e504538564c',
        title: 'SQL Server Hardwar',
        description: 'quoque imaginator Versus transit. t novum quorum plorum non pladior et si rarendum trepicandor',
        deadline: '2007-12-14T11:12:35.2997777',
        firstBounce: '7623.41',
        secondBounce: '4952.34',
        thirdBounce: '1855.31',
        companyName: 'Unfropadan',
        challengeType: true,

      },
      {
        id: '0bbf92a0-fa10-dfd0-65d6-423496f0cdc4',
        title: 'SQL Server Statistic',
        description: 'manifestum quo, pars volcans nomen brevens, linguens parte sed quartu venit. in in et cognitio, parte',
        deadline: '2010-01-07T19:14:05.6955725',
        firstBounce: '8401.86',
        secondBounce: '3256.85',
        thirdBounce: '2152.97',
        companyName: 'Upbanower Holdings ',
        challengeType: true,

      },
      {
        id: '1b01187e-6ba9-8531-35dd-680d10a1657e',
        title: 'Inside the SQL Server Query Optimize',
        description: 'eggredior. eggredior. Et et lingue transit. regit, novum fecundio, non',
        deadline: '2017-08-02T19:18:42.7356311',
        firstBounce: '5916.65',
        secondBounce: '4104.16',
        thirdBounce: '2841.67',
        companyName: 'Barkilackicator Holdings Group',
        challengeType: false,

      },
      {
        id: '9d45efe8-d1c6-65b8-b8f2-6d3fdd30c0e9',
        title: 'The Red Gate Guide to SQL Server Team-based Developmen',
        description: 'sed non habitatio funem. gravis si non quis quis imaginator linguens estum. vantis. Multum gravis et',
        deadline: '2015-11-11T04:06:50.1065601',
        firstBounce: '9475.87',
        secondBounce: '3217.23',
        thirdBounce: '1644.12',
        companyName: 'Repickicator WorldWide ',
        challengeType: false,

      },
      {
        id: '62737632-b99a-5f92-e276-a435a7a5dd23',
        title: 'SQL Server Hardwar',
        description: 'in imaginator funem. travissimantor gravis trepicandor esset nomen gravis quad linguens volcans quo,',
        deadline: '2010-09-03T21:56:40.9541507',
        firstBounce: '7032.02',
        secondBounce: '4060.24',
        thirdBounce: '2307.68',
        companyName: 'Inerax International Group',
        challengeType: false,

      },
      {
        id: 'acfa58e1-25ab-2720-e38c-dcd3d5076b48',
        title: 'The Red Gate Guide to SQL Server Team-based Developmen',
        description: 'Et gravis ut novum vobis si esset regit, si trepicandor novum pars quartu bono e Longam, fecit. quad',
        deadline: '2015-01-22T07:01:12.3361983',
        firstBounce: '5608.58',
        secondBounce: '4246.80',
        thirdBounce: '1250.17',
        companyName: 'Unjubollantor',
        challengeType: true,
      }
    ];

  public constructor(private challengeService: ChallengeService) {
  }

  public ngOnInit(): void {
    // this.challengeService.getChallenges();
    //
    // this.data = this.challengeService.ChallengeList;
    // console.log(this.data);
    this.length = this.data.length;
    // console.log(this.data.length);

    this.onChangeTable(this.config);
  }

  public changePage(page: any, data: Array<any> = this.data): Array<any> {
    const start = (page.page - 1) * page.itemsPerPage;
    const end = page.itemsPerPage > -1 ? (start + page.itemsPerPage) : data.length;
    return data.slice(start, end);
  }

  public changeSort(data: any, config: any): any {
    if (!config.sorting) {
      return data;
    }

    const columns = this.config.sorting.columns || [];
    let columnName: string = void 0;
    let sort: string = void 0;

    for (let i = 0; i < columns.length; i++) {
      if (columns[i].sort !== '' && columns[i].sort !== false) {
        columnName = columns[i].name;
        sort = columns[i].sort;
      }
    }

    if (!columnName) {
      return data;
    }

    // simple sorting
    return data.sort((previous: any, current: any) => {
      if (previous[columnName] > current[columnName]) {
        return sort === 'desc' ? -1 : 1;
      } else if (previous[columnName] < current[columnName]) {
        return sort === 'asc' ? -1 : 1;
      }
      return 0;
    });
  }

  public changeFilter(data: any, config: any): any {
    let filteredData: Array<any> = data;
    this.columns.forEach((column: any) => {
      if (column.filtering) {
        filteredData = filteredData.filter((item: any) => {
          return item[column.name].match(column.filtering.filterString);
        });
      }
    });

    if (!config.filtering) {
      return filteredData;
    }

    if (config.filtering.columnName) {
      return filteredData.filter((item: any) =>
        item[config.filtering.columnName].match(this.config.filtering.filterString));
    }

    const tempArray: Array<any> = [];
    filteredData.forEach((item: any) => {
      let flag = false;
      this.columns.forEach((column: any) => {
        if (item[column.name].toString().match(this.config.filtering.filterString)) {
          flag = true;
        }
      });
      if (flag) {
        tempArray.push(item);
      }
    });
    filteredData = tempArray;

    return filteredData;
  }

  public onChangeTable(config: any, page: any = {page: this.page, itemsPerPage: this.itemsPerPage}): any {
    if (config.filtering) {
      Object.assign(this.config.filtering, config.filtering);
    }

    if (config.sorting) {
      Object.assign(this.config.sorting, config.sorting);
    }

    const filteredData = this.changeFilter(this.data, this.config);
    const sortedData = this.changeSort(filteredData, this.config);
    this.rows = page && config.paging ? this.changePage(page, sortedData) : sortedData;
    this.length = sortedData.length;
  }

  public onCellClick(data: any): any {
    this.selectedChallenge.columnNameClicked = data.column;
    this.selectedChallenge.columnData = data.row;
    this.isModalOpen = true;
    console.log(data);
  }

  closeForm() {
    this.isModalOpen = false;

  }
}


