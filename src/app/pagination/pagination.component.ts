import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  @Output() indexSelected: EventEmitter<object> = new EventEmitter<object>();
  index = {
    min: 1,
    max: 3
  };
  @Input() dataLength: number;
  @Input() step = 3;

  constructor() { }

  ngOnInit() {
    this.indexSelected.emit(this.index);
  }

  start() {
    this.index = {
      min: 1,
      max: 3
    };
    this.indexSelected.emit(this.index);
  }

  end() {
    this.index = {
      min: this.dataLength - 3,
      max: this.dataLength - 1
    };
    this.indexSelected.emit(this.index);
  }

  previousPage() {
    if (this.index.min > this.step || this.index.max > this.step) {
      this.index = {
        min: this.index.min - this.step,
        max: this.index.max - this.step
      };
      this.indexSelected.emit(this.index);
    }
  }

  nextPage() {
    if (this.index.min < this.dataLength - this.step - 1 || this.index.max < this.dataLength - this.step) {
      this.index = {
        min: this.index.min + this.step,
        max: this.index.max + this.step
      };
      this.indexSelected.emit(this.index);
    }
  }
}
