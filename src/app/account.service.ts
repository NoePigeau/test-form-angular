import { Injectable } from '@angular/core';
import { Observable, of  } from 'rxjs';

import { Account, accounts } from './account';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor() { }

  getAccount(): Observable<Account[]> {
    return of(accounts).pipe();
  }

  addAccount( account: Account) {
    const newAccount = accounts.unshift(account);
    return of(newAccount).pipe();
  }
    
}
