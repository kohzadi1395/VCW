import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-only-for-test',
  templateUrl: './only-for-test.component.html',
  styleUrls: ['./only-for-test.component.css']
})
export class OnlyForTestComponent implements OnInit {
  gridColumnApi: any;
  columnDefs: ({ headerName: string; field: string } | { filter: string; headerName: string; field: string })[];
  public gridApi: any;
  public defaultColDef: { filter: boolean; editable: boolean; sortable: boolean };
  public readonly rowData: ({ price: number; model: string; id: string; make: string })[];
  public getRowNodeId;

  constructor() {
    this.columnDefs = [
      {
        headerName: 'Make',
        field: 'make'
      },
      {
        headerName: 'Model',
        field: 'model'
      },
      {
        headerName: 'Price',
        field: 'price',
        filter: 'agNumberColumnFilter'
      }
    ];
    this.rowData = [
      {
        id: 'aa',
        make: 'Toyota',
        model: 'Celica',
        price: 35000
      },
      {
        id: 'bb',
        make: 'Ford',
        model: 'Mondeo',
        price: 32000
      },
      {
        id: 'cc',
        make: 'Porsche',
        model: 'Boxter',
        price: 72000
      },
      {
        id: 'dd',
        make: 'BMW',
        model: '5 Series',
        price: 59000
      },
      {
        id: 'ee',
        make: 'Dodge',
        model: 'Challanger',
        price: 35000
      },
      {
        id: 'ff',
        make: 'Mazda',
        model: 'MX5',
        price: 28000
      },
      {
        id: 'gg',
        make: 'Horse',
        model: 'Outside',
        price: 99000
      }
    ];
    this.defaultColDef = {
      editable: true,
      sortable: true,
      filter: true
    };
    this.getRowNodeId = (data) => {
      return data.id;
    };
  }

  ngOnInit(): void {
  }

  Addrow() {
    this.rowData.push({
      id: 'gg',
      make: 'Hossein ',
      model: 'Kohzado',
      price: 99000
    });
    this.gridApi.setRowData(this.rowData);
    console.log(this.gridApi);
  }

  updateSort() {
    this.gridApi.refreshClientSideRowModel('sort');
  }

  updateFilter() {
    this.gridApi.refreshClientSideRowModel('filter');
  }

  setPriceOnToyota() {
    const rowNode = this.gridApi.getRowNode('aa');
    const newPrice = Math.floor(Math.random() * 100000);
    rowNode.setDataValue('price', newPrice);
  }

  setDataOnFord() {
    const rowNode = this.gridApi.getRowNode('bb');
    const newPrice = Math.floor(Math.random() * 100000);
    const newModel = 'T-' + Math.floor(Math.random() * 1000);
    const newData = {
      id: 'bb',
      make: 'Ford',
      model: newModel,
      price: newPrice
    };
    rowNode.setData(newData);

  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    params.api.sizeColumnsToFit();
  }
}
