import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../../shared/question.service';
import { Question } from '../../shared/question.model';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  questions!: Question[];

  constructor(private questionService: QuestionService) {}

  ngOnInit(): void {
    this.questions = this.questionService.getQuestions();
  }
}
