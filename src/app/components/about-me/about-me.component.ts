import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {

  aboutData: any;
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.obtainData().subscribe(data => {
      this.aboutData = data;
    })
  }

}
