import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  number!: number;
  modalOpen = false;

  constructor(private router: Router) {}

  openPhoneModal() {
    this.modalOpen = true;
  }

  closePhoneModal() {
    this.modalOpen = false;
  }

  continue() {
    void this.router.navigate(['send-number']);
  }
}
