import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projectsData: any;
  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.dataService.obtainData().subscribe(data => {
      this.projectsData = data.project;
    })
  }

}
