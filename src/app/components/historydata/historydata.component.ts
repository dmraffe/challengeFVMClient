import { Component } from '@angular/core';
import {ApiservicesService} from '../../services/apiservices/apiservices.service'
import {ComponentseventsService} from '../../services/comunicationservices/componentsevents.service';
@Component({
  selector: 'app-historydata',
  templateUrl: './historydata.component.html',
  styleUrls: ['./historydata.component.css']
})
export class HistorydataComponent {

  isOpen = false;
  Mensaje = "sin click";
  CityID = 0;
  HistoryWeather :  any[] = [];
  constructor(
    private componentseventsService: ComponentseventsService,
    private apiservicesservice :ApiservicesService
    
  ) { }
 
  ngOnInit() {
    this.componentseventsService.Refresh.subscribe(Cityid => {
      this.CityID = Cityid;
      this.Mensaje = "con click";
      console.log("llamo");
      this.apiservicesservice.GetWeather( this.CityID).subscribe((data: any[]) => {

        this.HistoryWeather = data;
        console.log(data);
      });
    });
  }
}
