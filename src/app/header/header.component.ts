import { Component, OnInit } from '@angular/core';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isAdmin: boolean;
  isNotification: boolean;
  
  constructor(private messageService: MessageService) { }
  
  ngOnInit() {
    this.messageService.isAdmin.subscribe(data => this.isAdmin = data);
    this.messageService.isNotification.subscribe(data => this.isNotification = data);
  }

  ngOnDestroy(): void {
  }

}
