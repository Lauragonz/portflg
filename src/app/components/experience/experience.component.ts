import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  experienceData: any;
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.obtainData().subscribe(data => {
      this.experienceData = data.experience;
    })
  }

}
