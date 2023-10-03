import { Component } from '@angular/core';
import {AddCityModalService} from '../../services/addcitymodalservices'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {AddcityComponent} from '../addcity/addcity.component'
import {ComponentseventsService} from '../../services/comunicationservices/componentsevents.service';
import {ApiservicesService} from '../../services/apiservices/apiservices.service'

 
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-formweather',
  templateUrl: './formweather.component.html',
  styleUrls: ['./formweather.component.css']
})
export class FormweatherComponent {
  constructor(private modalService: NgbModal,private componentseventsService: ComponentseventsService,private apiservicesservice :ApiservicesService) { }

  name = 'Angular ' 
  opinion: string = '';
  citys : any[] = [];
  selectedCity : any;
  WeatherRequest : any;
  WeatherResponse : any;
  isChecked = false;
  showModalPopup() {
    
    const modalRef = this.modalService.open(AddcityComponent);
    modalRef.result.then((result) => {
      console.log(result);
      this.componentseventsService.toggle();
    }, (reason) => {
      

    });
 
    
  }

  ngOnInit() {

    this.apiservicesservice.getCitys().subscribe((data: any) => {

      this.citys = data._data;
      console.log(data._data);
    });
   
  }

  ConsultarClima(){
    this.WeatherRequest  = {cityId:this.selectedCity.id,
      saveHistory : this.isChecked};

    console.log( this.WeatherRequest) ; 
      ;             
    this.apiservicesservice.ConsultWeather(this.WeatherRequest).subscribe((data: any) => {

      this.componentseventsService.RefreshData(this.selectedCity.id);
      this.WeatherResponse = data._data;
      console.log( this.WeatherResponse) ; 
    });
  }
}
