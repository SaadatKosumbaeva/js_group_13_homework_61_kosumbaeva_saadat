import { Component, OnInit } from '@angular/core';
import { RouletteService } from '../shared/roulette.service';

@Component({
  selector: 'app-roulette-app',
  templateUrl: './roulette-app.component.html',
  styleUrls: ['./roulette-app.component.css']
})
export class RouletteAppComponent implements OnInit {
  numbers: number[] = [];
  balance = 100;
  bet = 1;
  colorBet = 'red';
  startDisabled = false;
  gameOver = false;

  constructor(private rouletteService: RouletteService) {
  }

  ngOnInit() {
    this.rouletteService.newNumber.subscribe((number: number) => {
      this.numbers.push(number);
      this.getBalance(number);
    })
  }

  onStart() {
    this.rouletteService.start();
  }

  onStop() {
    this.rouletteService.stop();
  }

  onReset() {
    this.numbers = [];
    this.balance = 100;
    this.bet = 1;
    this.colorBet = 'red';
    this.gameOver = false;
    this.startDisabled = false;
  }

  getBalance(number: number) {
    if (this.colorBet === 'red' || this.colorBet === 'black') {
      const color = this.rouletteService.getColor(number);

      if (color === this.colorBet) {
        this.balance += this.bet;
      } else {
        this.balance -= this.bet;
      }
    } else {
      if (number === 0) {
        this.balance += this.bet * 35;
      } else {
        this.balance -= this.bet;
      }
    }
  }
}
