import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnInit {

  trainingData: any;
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.obtainData().subscribe(data => {
      this.trainingData = data.training;
    })
  }

}
