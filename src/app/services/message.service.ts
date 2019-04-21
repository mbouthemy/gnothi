import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  isAdmin: BehaviorSubject<boolean> = new BehaviorSubject(false);
  isNotification: BehaviorSubject<boolean> = new BehaviorSubject(false);
  cast = this.isAdmin.asObservable();
  castNotification = this.isNotification.asObservable();
  
  constructor() { }
  changeAdmin() {
      this.isAdmin.next(true);
  }
  changeUser() {
    this.isAdmin.next(false);
  }
  notificationOn(){
    this.isNotification.next(true);
  }
  notificationOff(){
    this.isNotification.next(false);
  }

}
