import { cardDetails } from "./models/cardDetails.model";

export interface State {
  readonly payments: Array<cardDetails>;
}