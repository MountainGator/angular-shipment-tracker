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

  checkForArrival () {
    if (this.arrival) {
      return true;
    } else return false;
  }
  
  checkForDepart () {
    if (this.departed === 'Pending') {
      return false;
    } else return true;
  }
  
  ngOnInit(): void {
    this.checkForDepart()
    this.checkForArrival()
  }

}
