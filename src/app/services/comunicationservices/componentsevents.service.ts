import { Injectable } from '@angular/core';
import { Component, Input, Output, EventEmitter } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class ComponentseventsService {
  isOpen = false;
  _CityID :number = 0;
  @Output() change: EventEmitter<boolean> = new EventEmitter();
 
  @Output() Refresh: EventEmitter<number> = new EventEmitter();
  toggle() {
    this.isOpen = !this.isOpen;
    this.change.emit(this.isOpen);
  }


  RefreshData(CityID : number) {
    this._CityID = CityID;
    this.Refresh.emit(this._CityID);
  }
  constructor() { }
}
