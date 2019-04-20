import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  isAdmin: BehaviorSubject<boolean> = new BehaviorSubject(false);
  cast = this.isAdmin.asObservable();
  constructor() { }
  changeAdmin() {
      this.isAdmin.next(true);
  }
  changeUser() {
    this.isAdmin.next(false);
  }

}
