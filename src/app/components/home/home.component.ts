import { Component, OnInit } from '@angular/core';
import { CardDetail } from 'src/fake-server/cardDetail.data';
import { PaymentService } from '../payment-page/payment-page.service';
import { Subject } from 'rxjs';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { cardDetails } from '../store/models/cardDetails.model';
import { State } from '../store/state.model';
import { FormsModule, NgForm } from '@angular/forms';
import { AddItemAction } from '../store/models/Actions/cardDetail.action';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cardDetailss$!: Observable<cardDetails>;

  // private cardDetails: CardDetail;

  
    private _unsubscribeAll: Subject<any>;

  constructor(private _formPaymentService: PaymentService,private store: Store<State>) {
    this._unsubscribeAll = new Subject();
   }

  ngOnInit(): void {
    this.cardDetailss$ = this.store.select((store) => store.payments);

  }



}
