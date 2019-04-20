import { Component, OnInit } from '@angular/core';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isAdmin: boolean;

  constructor(private messageService: MessageService) { }
  
  ngOnInit() {
  this.messageService.isAdmin.subscribe(data => this.isAdmin = data);
  console.log('value' + this.isAdmin);
  }

}
