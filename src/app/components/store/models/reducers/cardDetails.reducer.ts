import { cardDetails } from '../cardDetails.model';
import { PaymentAction, PaymentActionType } from '../Actions/cardDetail.action';
//create a dummy initial state
const initialState: Array<cardDetails> = [
  
        {
          cardNum: '5123 4564 7899 1234',
          cardHolder: 'Mira',
          expirationMonth: '7',
          expirationYear: '2023',
          securityCode: '567',
          amount: 60000,
        },
];

export function paymentReducer(state  = initialState, action: any) {
  switch (action.type) {
    case PaymentActionType.ADD_ITEM:
      return [...state, action.payload];
    default:
      return state;
  }
}