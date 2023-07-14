import { shuffle } from './utils';
import { TrainerModel } from './trainerModel';

export class TrainerView {
  private readonly model: TrainerModel;
  private readonly currentQuestionElem: HTMLElement;
  private readonly totalQuestionsElem: HTMLElement;
  private readonly answerElem: HTMLElement;
  private readonly lettersElem: HTMLElement;
  private isStatisticsShown: boolean;

  constructor(model: TrainerModel) {
    this.model = model;
    this.currentQuestionElem = document.getElementById('current_question')!;
    this.totalQuestionsElem = document.getElementById('total_questions')!;
    this.answerElem = document.getElementById('answer')!;
    this.lettersElem = document.getElementById('letters')!;
    this.isStatisticsShown = false;
  }

  public startTraining(): void {
    this.model.startTraining();
    this.displayQuestion();
    this.renderLetters();
    this.setupEventListeners();
  }

  public restartTraining(): void {
    this.model.restartTraining();
    this.displayQuestion();
    this.renderLetters();
  }

  private setupEventListeners(): void {
    const restartButton = document.getElementById('restart_button')!;
    restartButton.addEventListener('click', () => {
      this.hideStatistics();
      this.restartTraining();
    });

    window.addEventListener('keydown', this.handleKeyPress.bind(this));
  }

  private handleLetterClick(event: MouseEvent): void {
    const button = event.target as HTMLButtonElement;
    const letter = button.innerText;
    this.checkAnswer(button, letter);
  }

  private handleKeyPress(event: KeyboardEvent): void {
    if (this.isStatisticsShown) {
      return;
    }

    const letter = event.key.toLowerCase();

    if (this.model.isValidLetter(letter)) {
      const letterButtons = Array.from(
        this.lettersElem?.querySelectorAll(
          '.letter',
        ) as NodeListOf<HTMLButtonElement>,
      );
      for (const button of letterButtons) {
        if (button.textContent === letter) {
          this.checkAnswer(button, letter);
          break;
        }
      }
    } else {
      this.model.incrementErrors();
      if (this.model.getCurrentErrors() >= 3) {
        this.showCorrectWord();
      }
    }
  }

  private renderAnswerLetter(letter: string): void {
    const selectedButton = document.createElement('button');
    selectedButton.textContent = letter;
    selectedButton.classList.add('selected-letter');
    this.answerElem.appendChild(selectedButton);
  }

  private renderLetters(): void {
    const currentWord = this.model.getCurrentWord();
    const letters: string[] = shuffle(currentWord.split(''));
    letters.forEach((letter) => {
      const button = this.createLetterButton(
        letter,
        this.handleLetterClick.bind(this),
      );
      this.lettersElem.appendChild(button);
    });
  }

  private createLetterButton(
    letter: string,
    onClick: (event: MouseEvent) => void,
  ): HTMLButtonElement {
    const button = document.createElement('button');
    button.type = 'button';
    button.innerText = letter;
    button.classList.add('letter');
    button.addEventListener('click', onClick);
    return button;
  }

  private checkAnswer(button: HTMLButtonElement, letter: string): void {
    if (!this.model.checkAnswer(letter)) {
      if (this.model.getCurrentErrors() >= 3) {
        this.showCorrectWord();
        return;
      }
      button.classList.add('error-blink');
      setTimeout(() => {
        button.classList.remove('error-blink');
      }, 1000);
    } else {
      button.remove();
      this.renderAnswerLetter(letter);
    }

    if (this.model.isCurrentWordComplete()) {
      setTimeout(() => this.moveToNextQuestion(), 1000);
    }
  }

  private showCorrectWord(): void {
    if (this.answerElem.childElementCount > 0) {
      this.answerElem.innerHTML = '';
    }
    const currentWordLetters: string[] = this.model.getCurrentWord().split('');
    currentWordLetters.forEach((wordLetter) => {
      const button = document.createElement('button');
      button.textContent = wordLetter;
      button.classList.add('selected-letter', 'selected-letter-error');
      this.answerElem?.appendChild(button);
    });
    this.lettersElem.innerHTML = '';

    setTimeout(() => this.moveToNextQuestion(), 3000);
  }

  private displayQuestion(): void {
    this.answerElem.innerHTML = '';
    this.lettersElem.innerHTML = '';
    this.currentQuestionElem.innerText = this.model
      .getCurrentQuestion()
      .toString();
    this.totalQuestionsElem.innerText = this.model
      .getTotalQuestions()
      .toString();
  }

  private moveToNextQuestion(): void {
    this.model.moveToNextQuestion();
    if (this.model.getCurrentQuestion() > this.model.getTotalQuestions()) {
      this.displayStatistics();
    } else {
      this.displayQuestion();
      this.renderLetters();
    }
  }

  private displayStatistics(): void {
    const statisticsElem = document.getElementById('statistics')!;
    const correctAnswersElem = document.getElementById('correct_answers')!;
    const totalErrorsElem = document.getElementById('total_errors')!;
    const wordWithMostErrorsElem = document.getElementById(
      'word_with_most_errors',
    )!;

    correctAnswersElem.innerText = this.model
      .getTotalCorrectAnswers()
      .toString();
    totalErrorsElem.innerText = this.model.getTotalErrors().toString();
    wordWithMostErrorsElem.innerText =
      this.model.getWordWithMostErrors() || '-';
    statisticsElem.style.display = 'block';
    this.isStatisticsShown = true;
  }

  private hideStatistics(): void {
    const statisticsElem = document.getElementById('statistics')!;
    statisticsElem.style.display = 'none';
    this.isStatisticsShown = false;
  }
}
