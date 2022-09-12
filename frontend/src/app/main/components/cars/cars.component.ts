import { Component, OnInit } from '@angular/core';
import { DataSources } from 'src/app/models/data-source';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.sass']
})
export class CarsComponent implements OnInit {

  displayedColumns: string[] = [ 
    'brand',
    'model',  
  ];

  dataSource: any;

  constructor(private cars: CarService) {
    this.reloadData();
  }

  ngOnInit(): void {
  }

  reloadData() {
    this.cars.getCarsList().subscribe(data => {
      this.dataSource = new DataSources([ ...data ]);
    });
  }
}
