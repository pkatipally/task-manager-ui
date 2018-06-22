import { Component, OnInit } from '@angular/core';
import {DataStorageService} from "../../shared/data-storage.service";

@Component({
  selector: 'app-details-table-list',
  templateUrl: './details-table-list.component.html',
  styleUrls: ['./details-table-list.component.css']
})
export class DetailsTableListComponent implements OnInit {
  title = 'list';
  columnDefs = [
    {headerName: '#', field: 'id'},
    {headerName: 'TaskName', field: 'taskName'},
    {headerName: 'TaskDescription', field: 'taskDescription'},
    {headerName: 'Email', field: 'email'},
    {headerName: 'Contact', field: 'contact'}
  ] ;

   rowData = [
    {id: '1', taskName: 'Article1', taskDescription: 'Article1', email: 'Raj123@gmail.com', Cotact: '7176388094'},
    {id: '2', taskName: 'Article1', taskDescription: 'Article1', email: 'Priya123@gmail.com', Cotact: '7176388094' }
  ] ;

  constructor(private dataStorageService: DataStorageService) { }

  ngOnInit() {
    this.dataStorageService.getUser().subscribe((response: Response)=> (console.log(response)));
  }

}
