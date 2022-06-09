import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { CardDetail } from './cardDetail.data';

@Injectable({
  providedIn: 'root'
})
export class SpeedkashService {

  constructor() { }

  getCardMonths(startMonth: number): Observable<number[]>{
    let data: number[] = [];
    for (let theMonth = startMonth; theMonth <= 12; theMonth++){
      data.push(theMonth);
    }
    return of (data);
  }

  getCardYears(): Observable<number[]> {
    let data: number[] = [];

    const startYear: number = new Date().getFullYear();
    const endYear: number = startYear + 10;

    for (let theYear = startYear; theYear <= endYear; theYear++){
      data.push(theYear);
    }
    return of (data);
  }

  createDatabase(): any {
    return {
      'card_details' : CardDetail.cardData
    }
  }
}
