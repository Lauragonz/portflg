import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  softData: any;
  hardData: any;
  langData: any;
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.obtainData().subscribe(data => {
      this.softData = data.soft;
    })
    this.dataService.obtainData().subscribe(data => {
      this.hardData = data.hard;
    })
    this.dataService.obtainData().subscribe(data => {
      this.langData = data.lang;
    })
  }

}
