import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


import { ToastrService } from 'ngx-toastr';
import { PaymentCard } from './paymentModel/card.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})

export class PaymentService {
  path: string = environment.baseURl;

  public onCardDetailsChanged: BehaviorSubject<{}>;


  private cardDetails!: PaymentCard;

  data: any;
  //  cCardDetails = '';


  constructor(private http: HttpClient, private toastr: ToastrService) {

     this.onCardDetailsChanged = new BehaviorSubject({});
  }

  updateCreditCardPayment(): any {
    this.http.post<PaymentCard>(this.path + 'card-details', this.cardDetails).subscribe(
      (res: any) => {
      },() => {
        this.showSuccess(); // Get Notification Toast on Successful post
        console.log('Completed successfully');
      }
    );
  }

  showSuccess() {
    this.toastr.success('Successful!');
  }

  setCreditCardDetails(cCardDetails: PaymentCard) {
    this.cardDetails = cCardDetails;
    this.onCardDetailsChanged.next(this.cardDetails);
  
    this.updateCreditCardPayment();
  }

}