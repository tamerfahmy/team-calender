import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LocalTime } from '../models/local-time.model';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private http: HttpClient) { }

  /**
   * Gets app config
   * @returns app config
   */
  getAllLocalDateTimes(): Promise<LocalTime[]> {
    return this.http.get<LocalTime[]>(`/api/date-time/`).toPromise();
  }
}
