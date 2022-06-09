
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { SpeedkashService } from 'src/fake-server/speedkash.service';

import { Observable, Subject } from 'rxjs';
import {
  tap,
  switchMap,
  debounceTime,
  distinctUntilChanged,
} from 'rxjs/operators';

import { CardDetail } from 'src/fake-server/cardDetail.data';
import { Store } from '@ngrx/store';
import { cardDetails } from '../store/models/cardDetails.model';
import { State } from '../store/state.model';
import { FormsModule, NgForm } from '@angular/forms';
import { AddItemAction } from '../store/models/Actions/cardDetail.action';

@Component({
  selector: 'app-payment-page',
  templateUrl: './payment-page.component.html',
  styleUrls: ['./payment-page.component.css']
})
export class PaymentPageComponent implements OnInit {
cardDetails$!: Observable<CardDetail[]>;

  cardHolder = "";
  cardNum = "";
  securityCode = "";
  amount = Number;
  submitted = false;

  cardYears: number[] = [];
  cardMonths: number[] = [];


  form: FormGroup;
  constructor(public fb: FormBuilder, private speedkashService: SpeedkashService, private store: Store<State>) { 

    this.form = this.fb.group({
      cardNum:  new FormControl('',  [Validators.required, Validators.pattern('[0-9]{16}')]),
      cardHolder:  new FormControl('', [Validators.required, Validators.minLength(2)]),
      securityCode: new FormControl('',  [Validators.pattern('^[0-9]{3}$')]),
      expirationMonth:  ['', Validators.required],
      expirationYear: ['', Validators.required],
      amount: ['', Validators.required, Validators.pattern('^[1-9][0-9]*$')]
    })

   
  }

  ngOnInit(): void {
    // this.cardDetailss$ = this.store.select((store) => store.payments);

    const startMonth: number = new Date().getMonth() +1;
    console.log('startMonth: + startMonth');
    this.speedkashService.getCardMonths(startMonth).subscribe(
      data => {
        console.log("Retrieved credit card months: " + JSON.stringify(data));
        this.cardMonths = data
      }
    );

    this.speedkashService.getCardYears().subscribe(
      data => {
        console.log("Retrieved credit card years: " + JSON.stringify(data));
        this.cardYears = data
      }
    )


   
  }

  get paymentForm() {
    return this.form.controls;
  }

  onSubmit() {
    this.submitted = true;
    
    if (this.form.invalid) {
      return;
    }
    // console.log(this.form.value);
  }



  addPayment(form:any) {
    this.store.dispatch(new AddItemAction(form.value));
    form.reset();
  }


}
