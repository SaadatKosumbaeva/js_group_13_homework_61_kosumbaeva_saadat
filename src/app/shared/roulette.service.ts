import { EventEmitter } from '@angular/core';

export class RouletteService {
  newNumber = new EventEmitter<number>();
  private interval!: number;

  generateNumber() {
    return Math.floor(Math.random() * 37);
  }

  start() {
    if (this.interval) return;
    this.interval = setInterval(() => {
      this.newNumber.emit(this.generateNumber());
    }, 1000);
  }

  stop() {
    clearInterval(this.interval);
    this.interval = 0;
  }

  getColor(number: number) {
    if (number >= 1 && number <= 10 || number >= 19 && number <= 28) {
      return (number % 2 === 0) ? 'black' : 'red';
    } else if (number >= 11 && number <= 18 || number >= 29 && number <= 36) {
      return (number % 2 === 0) ? 'red' : 'black';
    } else if (number === 0) {
      return 'zero';
    } else {
      return 'unknown';
    }
  }
}
