import { Component } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {  Output, EventEmitter } from '@angular/core';
import {ApiservicesService} from '../../services/apiservices/apiservices.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-addcity',
  templateUrl: './addcity.component.html',
  styleUrls: ['./addcity.component.css']
})
export class AddcityComponent {

  @Output() passEntry: EventEmitter<any> = new EventEmitter();
  constructor(public activeModal: NgbActiveModal,private apiservicesservice :ApiservicesService) { }
  user = {};
  country : any[] = [];
  selectedCountry  : any;  
  CityRequest : any;
  cityname = "";
  Guardar() {
    this.passEntry.emit(this.user);
    this.activeModal.close('guarde ');
    this.CityRequest  = {CountryID:this.selectedCountry.id,
      cityname : this.cityname};

    console.log(this.selectedCountry) ; 
    console.log(this.CityRequest)      ;             
    this.apiservicesservice.addCity(this.CityRequest).subscribe((data: any) => {


      console.log(data);
    });

    console.log(this.selectedCountry);
  }

  ngOnInit() {

    this.apiservicesservice.getCountrys().subscribe((data: any[]) => {

      this.country = data;
      console.log(data);
    });
   
  }

  change(event: any){
    this.cityname = event.target.value;
  }

}
