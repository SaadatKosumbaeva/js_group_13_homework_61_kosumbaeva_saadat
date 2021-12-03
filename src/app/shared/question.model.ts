export class Question {
  answerStatus: string = 'no-answer';

  constructor(public question: string, public answer: string, public help: string) {}
}
