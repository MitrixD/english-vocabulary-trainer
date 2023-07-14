import { shuffle } from './utils';

export class TrainerModel {
  private readonly words: string[];
  private answeredWord: string;
  private currentWord: string;
  private currentQuestion: number;
  private readonly totalQuestions: number;
  private totalCorrectAnswers: number;
  private totalErrors: number;
  private currentErrors: number;
  private wordWithMostErrors: string;
  private maxErrors: number;
  private shuffledWords: string[];

  constructor(words: string[], totalQuestions: number) {
    this.words = words;
    this.shuffledWords = [];
    this.currentQuestion = 1;
    this.totalQuestions = totalQuestions;
    this.answeredWord = '';
    this.currentWord = '';
    this.totalCorrectAnswers = 0;
    this.totalErrors = 0;
    this.currentErrors = 0;
    this.wordWithMostErrors = '';
    this.maxErrors = 0;
  }

  public startTraining(): void {
    this.shuffledWords = shuffle(this.words);
    this.displayQuestion(this.shuffledWords[this.currentQuestion - 1]);
  }

  public restartTraining(): void {
    this.currentQuestion = 1;
    this.totalCorrectAnswers = 0;
    this.totalErrors = 0;
    this.wordWithMostErrors = '';
    this.maxErrors = 0;

    this.startTraining();
  }

  public getCurrentQuestion(): number {
    return this.currentQuestion;
  }

  public getTotalQuestions(): number {
    return this.totalQuestions;
  }

  public getCurrentWord(): string {
    return this.currentWord;
  }

  public getTotalCorrectAnswers(): number {
    return this.totalCorrectAnswers;
  }

  public getTotalErrors(): number {
    return this.totalErrors;
  }

  public getCurrentErrors(): number {
    return this.currentErrors;
  }

  public getWordWithMostErrors(): string {
    return this.wordWithMostErrors;
  }

  public isCurrentWordComplete(): boolean {
    return this.answeredWord === this.currentWord;
  }

  public checkAnswer(letter: string): boolean {
    const currentAnsweredWord = this.answeredWord + letter;

    if (this.currentWord[currentAnsweredWord.length - 1] !== letter) {
      this.incrementErrors();
      return false;
    }

    this.answeredWord += letter;
    if (this.answeredWord === this.currentWord && this.currentErrors === 0) {
      this.totalCorrectAnswers++;
    }
    return true;
  }

  private displayQuestion(word: string): void {
    this.currentWord = word;
    this.answeredWord = '';
    this.currentErrors = 0;
  }

  public moveToNextQuestion(): void {
    this.currentQuestion++;

    if (this.currentQuestion <= this.totalQuestions) {
      this.displayQuestion(this.shuffledWords[this.currentQuestion - 1]);
    }
  }

  public isValidLetter(letter: string): boolean {
    const letters = this.currentWord.split('');
    return letters.includes(letter);
  }

  public incrementErrors(): void {
    this.totalErrors++;
    this.currentErrors++;
    if (this.totalErrors === 1) {
      this.wordWithMostErrors = this.currentWord;
      this.maxErrors = 1;
    } else {
      if (this.currentErrors >= this.maxErrors) {
        this.wordWithMostErrors = this.currentWord;
        this.maxErrors = this.currentErrors;
      }
    }
  }
}
