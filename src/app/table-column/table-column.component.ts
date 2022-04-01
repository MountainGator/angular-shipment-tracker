import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table-column',
  templateUrl: './table-column.component.html',
  styleUrls: ['./table-column.component.css']
})
export class TableColumnComponent implements OnInit {

  constructor() { }
  @Input('part') part: any;
  @Input('origin') origin: any;
  @Input('originCity') originCity: any;
  @Input('destination') destination: any;
  @Input('destinationCity') destinationCity: any;
  @Input('pieces') pieces: any;
  @Input('weight') weight: any;
  @Input('departed') departed: any;
  @Input('arrival') arrival: any;

  arrivalFalse: boolean = true;
  arrivalTrue: boolean = false;
  departPending: boolean = false;
  departNotPending: boolean = true;

  checkForData (): void {
    if (this.arrival) {
      this.arrivalFalse = false;
      this.arrivalTrue = true;
    }
    if (this.departed === 'Pending') {
      this.departPending = true;
      this.departNotPending = false;
    }
  }
  
  ngOnInit(): void {
    this.checkForData()
  }

}
