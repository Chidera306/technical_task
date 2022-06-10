import { Action } from '@ngrx/store';
import { cardDetails } from '../cardDetails.model';

export enum PaymentActionType {
  ADD_ITEM = '[PAYMENT] Add Payment',
  GET_ITEM = '[PAYMENT] Get Payment',
  PUT_ITEM = '[PAYMENT] PUT Payment'
}
export class AddItemAction implements Action {
  readonly type = PaymentActionType.ADD_ITEM

  //add an optional payload

  constructor(public payload: any ) {}
}

export class PutItemAction implements Action {
  readonly type = PaymentActionType.PUT_ITEM

  //add an optional payload

  constructor(public payload: any ) {}
}

export class GetItemAction implements Action {
  readonly type = PaymentActionType.GET_ITEM

  //add an optional payload


}
export type PaymentAction = AddItemAction | GetItemAction