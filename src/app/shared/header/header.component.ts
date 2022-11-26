import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  headerData: any;
  constructor(private Service:DataService) { }

  ngOnInit(): void {
    this.Service.obtainData().subscribe(data => {
      this.headerData = data;
    })
  }

}
