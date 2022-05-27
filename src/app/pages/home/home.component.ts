import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../services/home.service';
import { LocalTime } from '../../models/local-time.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  localDateTimes: LocalTime[] = [];

  constructor(public homeService: HomeService) { }

  async ngOnInit(): Promise<void> {
    this.localDateTimes = await this.homeService.getAllLocalDateTimes();
  }

}
