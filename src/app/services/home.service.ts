import { Injectable } from '@angular/core';
import { BackendService } from './backend.service';
import { LocalTime } from '../models/local-time.model';


@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private backend: BackendService) { }

  getAllLocalDateTimes(): Promise<LocalTime[]> {
    return this.backend.getAllLocalDateTimes();
  }
}
