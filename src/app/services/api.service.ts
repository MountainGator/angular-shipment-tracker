import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }

  async getShipment (shipment: any) {
    const res: any = await firstValueFrom(this.http.get(`https://www.jet-airways-stl.com/gt5ws.nsf/ws_trace?openagent&a=${shipment}`))
    console.log(res.awbs)
    return res.awbs;
    }
}
