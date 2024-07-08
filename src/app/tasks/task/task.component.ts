import { Component, Input, Output, EventEmitter, inject } from '@angular/core';
import { userTask } from '../../Models/User';
import { CardComponent } from '../../shared/card/card.component';
import { DatePipe } from '@angular/common';
import { TasksService } from '../tasks.service';
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
  tasks = inject(TasksService);
  
  onComplete(){
    this.complete.emit(this.task.id);
  }
  onCompleteTask(){
    this.tasks.removeTask(this.task.id);
   }
}
