import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { cardDetails } from './components/store/cardDetails.model';
import { State } from './components/store/state.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'speedkashApp';

  cardDetailss$!: Observable<cardDetails>;

  constructor(private store: Store<State>) { }
  ngOnInit(): void {
    this.cardDetailss$ = this.store.select((store) => store.payments)
  }

}
