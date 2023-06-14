import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable() // Remove providerIn:root
export class ShareLibService {
  
  #name = new BehaviorSubject('');
  readonly name$ = this.#name.asObservable();

  addName(name: string) {
    this.#name.next(name);
  }
}
