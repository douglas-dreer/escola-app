import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContactService } from './services/contact.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent  implements OnInit {
  title = 'Escola Online'
  private contactList: any[] = []
  constructor(private contactService: ContactService){    
  }

  ngOnInit(): void {   
    this.contactService.findAll().subscribe( (result) => this.contactList = result)
  }

  createContact() {
    const data = { contactType: 'MOBILE', value: '43 9 1234 5678', notes: 'Principal Mobile', isMain: true }
    this.contactService.create(data)
  }  
}
