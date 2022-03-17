import {AfterViewInit, Component, ViewChild} from '@angular/core';
import { Subscription } from 'rxjs';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import {MatTableDataSource} from '@angular/material/table';
import { SafetyDocs } from '../SafetyDocs/safety-docs';
import { SafetyDocument } from '../services/safety-document/safety-document.service';

@Component({
  selector: 'safety-documents',
  templateUrl: './safety-documents.component.html',
  styleUrls: ['./safety-documents.component.css']
})
export class SafetyDocumentsComponent implements AfterViewInit {

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  displayedColumns: string[] = ['id', 'type', 'workPlan','crew', 'status', 'user', 'phone', 'notes', 'details'];
  public columnsToDisplay: string[] = [...this.displayedColumns];
  displayAddForm:boolean=false;
  displayTable: boolean=true;
  public columnsFilters = {};

  public dataSource: MatTableDataSource<SafetyDocs>;
  private serviceSubscribe!: Subscription;



  constructor(private deviceService: SafetyDocument, public dialog: MatDialog) {
    this.dataSource = new MatTableDataSource<SafetyDocs>();
  
  }

  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }

  /*private filter() {

    this.dataSource.filterPredicate = (data: SafetyDocs, filter: string) => {
      let find = true;

      for (var columnName in this.columnsFilters) {

        let currentData = "" + data[columnName];

        if (!this.columnsFilters[columnName]) {
          return;
        }


        let searchValue = this.columnsFilters[columnName]["contains"];

        if (!!searchValue && currentData.indexOf("" + searchValue) < 0) {
          find = false;
          return;
        }

        searchValue = this.columnsFilters[columnName]["equals"];
        if (!!searchValue && currentData != searchValue) {
          find = false;
          return;
        }

        searchValue = this.columnsFilters[columnName]["greaterThan"];
        if (!!searchValue && currentData <= searchValue) {
          find = false;
          return;
        }

        searchValue = this.columnsFilters[columnName]["lessThan"];
        if (!!searchValue && currentData >= searchValue) {
          find = false;
          return;
        }

        searchValue = this.columnsFilters[columnName]["startWith"];

        if (!!searchValue && !currentData.startsWith("" + searchValue)) {
          find = false;
          return;
        }

        searchValue = this.columnsFilters[columnName]["endWith"];
        if (!!searchValue && !currentData.endsWith("" + searchValue)) {
          find = false;
          return;
        }

      }

      return find;
    };

    this.dataSource.filter = null;
    this.dataSource.filter = 'activate';

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  applyFilter(columnName: string, operationType: string, searchValue: string) {
    this.columnsFilters[columnName] = {};
    this.columnsFilters[columnName][operationType] = searchValue;
    this.filter();
  }

  clearFilter(columnName: string) {
    if (this.columnsFilters[columnName]) {
      delete this.columnsFilters[columnName];
      this.filter();
    }
  }*/

  add() {
    this.displayTable=false;
    this.displayAddForm=true;
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

 
  ngOnInit() {
    this.deviceService.docs$.subscribe(data => this.dataSource.data = data);
    this.deviceService.ResetGlavnaForma();
    console.log("Posle Resetovanje forme");
    this.deviceService.glavnaFormaIzmjena.subscribe(forma=> console.log(forma));
    this.deviceService.glavnaFormaIzmjena.subscribe(forma=> console.log(forma.value));
  }
}
