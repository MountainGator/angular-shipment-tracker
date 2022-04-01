import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-shipment-form',
  templateUrl: './shipment-form.component.html',
  styleUrls: ['./shipment-form.component.css']
})
export class ShipmentFormComponent implements OnInit {
  public shipmentForm:FormGroup;
  shipment: string = '';
  
  dataList: any;

  constructor(
    private ApiService: ApiService,
    private FormBuilder: FormBuilder
  ) { 
    this.shipmentForm = this.FormBuilder.group({
    ship_num: ''
  })}

  ngOnInit(): void {
  }

  async handleSubmit () {
    console.debug(this.handleSubmit);
    console.log(this.shipment);
    this.shipment = this.shipmentForm.get('ship_num')?.value;
    console.log(this.shipment);
    this.dataList = await this.ApiService.getShipment(this.shipment);
  }

}
