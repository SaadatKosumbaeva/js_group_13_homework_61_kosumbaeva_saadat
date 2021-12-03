import { Component } from '@angular/core';

@Component({
  selector: 'app-send-number',
  template: `<p class="alert alert-primary mt-3 mb-3">Your number has been successfully sent! Please wait for the
    call.</p>`,
  styles: [`
    p {
      font-size: 20px;
    }
  `]
})
export class SendNumberComponent {
}
