import { Component } from '@angular/core';

@Component({
  selector: 'app-not-found',
  template: `
    <div class="row justify-content-center align-items-center">
      <p class="alert alert-danger mt-5">Not found</p>
    </div>
  `,
  styles: [`
    p {
      font-size: 25px;
    }
  `]
})

export class NotFoundComponent {
}
