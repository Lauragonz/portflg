import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  coursesData: any;
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.obtainData().subscribe(data => {
      this.coursesData = data.courses;
    })
  }

}
