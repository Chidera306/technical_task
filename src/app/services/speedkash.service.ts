import { Injectable } from '@angular/core';
import { Store} from '@ngrx/store';
import { State } from '../components/store/state.model';

import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { cardDetails } from '../components/store/models/cardDetails.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class SpeedkashService {
  cardDetails: cardDetails | undefined;
  constructor(private store: Store<State>,private httpClient:HttpClient, private toastr: ToastrService) { 

    this.store.select((store) => store.payments).subscribe(value =>this.cardDetails=value)
  }

  getCardMonths(startMonth: number): Observable<number[]> {
    let data: number[] = [];
    for (let theMonth = startMonth; theMonth <= 12; theMonth++) {
      data.push(theMonth);
    }
    return of(data);
  }

  getCardYears(): Observable<number[]> {
    let data: number[] = [];

    const startYear: number = new Date().getFullYear();
    const endYear: number = startYear + 10;

    for (let theYear = startYear; theYear <= endYear; theYear++) {
      data.push(theYear);
    }
    return of(data);
  }

  createDatabase(): any {
    this.showSuccess
    return this.httpClient.post<cardDetails>(environment.baseURl+'card_details',this.cardDetails).subscribe(val=>{
      this.showSuccess();
    })
  }

  showSuccess() {
    this.toastr.success('Successful!');
  }
  
}
