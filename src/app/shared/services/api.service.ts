import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiURL: string = '../../assets/json';

  constructor(private httpClient: HttpClient) {}

  public loadFlightData(): Observable<any>{
    return this.httpClient.get(`${this.apiURL}/flight-collection.json`);
  }

  public filterMyFlights(result, toBeSearched) {
    const filteredData = [];
    for (let i = 0; i < result.length; i++) {
      const isMatchedData = result[i]['departureCity'] === toBeSearched['departureCity']['code']
        && result[i]['destinationCity'] === toBeSearched['destinationCity']['code']
        && result[i]['departDate'] === toBeSearched['departDate'];
      const matchedClassType = toBeSearched['classType']['code'];
      const isSeatLeft = result[i][matchedClassType]['seatsLeft'] > 0
      if (isMatchedData && isSeatLeft) {
        filteredData.push(result[i]);
      }
    }
    return filteredData;
  }

}