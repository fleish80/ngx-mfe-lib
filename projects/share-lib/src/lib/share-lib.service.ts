import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable() // Remove providerIn:root
export class ShareLibService {
  
  #text = new BehaviorSubject('');
  readonly text$ = this.#text.asObservable();

  addName(text: string) {
    this.#text.next(text);
  }
}
