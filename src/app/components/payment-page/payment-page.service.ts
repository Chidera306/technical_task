import { HttpClient } from  '@angular/common/http';
import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

import { ToastrService } from 'ngx-toastr';
import { PaymentCard } from './paymentModel/card.model';

@Injectable({
    providedIn: 'root',
  })

  export class PaymentService {
    public onCardDetailsChanged: BehaviorSubject<{}>;
   

    private cardDetails!: PaymentCard;

     data: any;
    //  cCardDetails = '';
    

    constructor(private http: HttpClient, private toastr: ToastrService) {
      
        this.onCardDetailsChanged = new BehaviorSubject({});
      }

      updateCreditCardPayment(): any {
        return new Promise<void>((resolve, reject) => {
          this.http
            .post<PaymentCard>(
              'api/card-details',
              this.cardDetails
            )
            .subscribe(
              (response: any) => {
                console.log('Updated details are : ', response); // Log the POST data
                resolve();
              },
              reject, //If rejected do nothing
              () => {
                this.showSuccess(); // Get Notification Toast on Successful Completion
                console.log('Completed Successfully'); // Completed log
              }
            );
        });
      }

      showSuccess() {
        this.toastr.success('Hello world!', 'Toastr fun!');
      }

      setCreditCardDetails(cCardDetails: PaymentCard) {
        this.cardDetails = cCardDetails;
        this.onCardDetailsChanged .next(this.cardDetails);
        // POST request after data is updated
        this.updateCreditCardPayment();
      }

  }