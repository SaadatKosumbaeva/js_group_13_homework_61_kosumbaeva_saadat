import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../../shared/question.service';
import { Question } from '../../shared/question.model';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  questions!: Question[];
  correctAnswers = 0;

  constructor(private questionService: QuestionService) {}

  ngOnInit(): void {
    this.questions = this.questionService.getQuestions();
    this.correctAnswers = this.questionService.correctAnswers;
    this.questionService.correctAnswersChange.subscribe((correctAnswers: number) => {
      this.correctAnswers = correctAnswers;
    })
  }
}
