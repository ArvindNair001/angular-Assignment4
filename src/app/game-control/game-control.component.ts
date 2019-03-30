import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  counter: number;
  isPlaying = false;
  @Output() gameStarted = new EventEmitter<number>();
  @Output() gameStopped = new EventEmitter();
  private timeID: number;

  constructor() {
  }

  ngOnInit() {
    this.counter = 0;
  }

  onStartGame() {
    if (this.isPlaying) {
      console.log('Game has already started');
    } else {
      this.isPlaying = true;
      console.log('Game has started');
      this.timeID = setInterval(() => {
        this.counter++;
        this.gameStarted.emit(this.counter);
        // console.log(this.gameCounter);
      }, 1000);
      // console.log(this.timeID);
    }
  }

  onStopGame() {
    if (!this.isPlaying) {
      console.log('Game has already stopped');
      // cleartimer
    } else {
      this.isPlaying = false;
      console.log('Game has stopped');
      clearInterval(this.timeID);
      this.gameStopped.emit();
      this.counter = 0;
    }
  }

}
