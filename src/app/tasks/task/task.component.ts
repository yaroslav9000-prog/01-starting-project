import { Component, Input, Output, EventEmitter } from '@angular/core';
import { userTask } from '../../Models/User';
import { CardComponent } from '../../shared/card/card.component';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({required: true}) task !: userTask ;
  @Output() complete = new EventEmitter<string>();
  // title : string = this.task.title;
  // time : string = this.task.dueDate;
  // summary: string = this.task.summary;
  onComplete(){
    this.complete.emit(this.task.id);
  }
}
