import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'platform'
})
export class SharedPlatformService {

  #text = new BehaviorSubject('');
  readonly text$ = this.#text.asObservable();

  addName(text: string) {
    this.#text.next(text);
  }
}
