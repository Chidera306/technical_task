export interface cardDetails {
  id?: number;
  cardNum: string;
  cardHolder: string;
  expirationMonth: string;
  expirationYear: string;
  securityCode?: string;
  amount: number;

}