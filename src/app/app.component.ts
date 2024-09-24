import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
<<<<<<< HEAD
import {MatToolbarModule} from '@angular/material/toolbar';

=======
import { ContactService } from './services/contact.service';
>>>>>>> 3a6ffda8bd07643f4dc98cc6b6f40eb0776d1865

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MatToolbarModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
<<<<<<< HEAD
export class AppComponent {
  title = 'EscolaOnLine';
=======

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
>>>>>>> 3a6ffda8bd07643f4dc98cc6b6f40eb0776d1865
}
