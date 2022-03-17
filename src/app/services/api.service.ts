import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }

  async getShipment (shipment: any) {
    const res = await axios.get(`https://www.jet-airways-stl.com/gt5ws.nsf/ws_trace?openagent&a=${shipment}`)
    return res.data.awbs;
    }
}
