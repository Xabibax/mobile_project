import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  startDate: Date;
  endDate: Date;

  constructor() {
    this.startDate = new Date(2020,10,22);
    this.endDate = new Date(2020,10,23);
  }


  ngOnInit() {}

  getDate(date): string {
    return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`
  }
  getStartDate(): string {
    return this.getDate(this.startDate)
  }
  getEndDate(): string {
    return this.getDate(this.endDate)
  }

}
