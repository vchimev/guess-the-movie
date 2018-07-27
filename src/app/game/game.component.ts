import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Movie } from '../movie';

@Component({
  selector: 'gtm-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  @Input() movies: Movie[];
  @Output() endGame = new EventEmitter();
  movie: Movie;
  guessed: boolean;
  private currentIndex: number;

  private static sanitize(text: string) {
    return text.replace(/[^\w]/gi, '').toLowerCase();
  }

  constructor() { }

  ngOnInit() {
    this.loadFirstMovie();
  }

  checkIfGuessed(value: string) {
    const actual = GameComponent.sanitize(value);
    const expected = GameComponent.sanitize(this.movie.title);

    if (actual === expected) {
      this.guessed = true;
    }
  }

  loadNextMovie() {
    this.updateMovie();
  }

  private loadFirstMovie() {
    this.updateMovie(0);
  }

  private updateMovie(index = this.currentIndex + 1) {

    if (index === this.movies.length) {
      this.endGame.emit();
    } else {
      this.movie = this.movies[index];
      this.currentIndex = index;
      this.guessed = false;
    }
  }
}
