import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';


const today = new Date();
const month = today.getMonth();
const year = today.getFullYear();

@Component({
  selector: 'app-asistencia', 
  templateUrl: './asistencia.page.html',
  styleUrls: ['./asistencia.page.scss'],
})
export class AsistenciaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

export class DatepickerInlineCalendarExample {
  selected: Date | null;
}

export class AppComponent{
  title: "navbar"
  opened = false;
}

export class DateRangePickerComparisonExample {
  campaignOne = new FormGroup({
    start: new FormControl(new Date(year, month, 13)),
    end: new FormControl(new Date(year, month, 16)),
  });
  campaignTwo = new FormGroup({
    start: new FormControl(new Date(year, month, 15)),
    end: new FormControl(new Date(year, month, 19)),
  });
}