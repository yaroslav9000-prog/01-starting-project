import { TasksService } from './../tasks.service';
import { Component, Output, EventEmitter, Input, inject} from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { newTaskData, userTask } from '../../Models/User';
@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  // @Output() submit = new EventEmitter<boolean>();
  @Output() close = new EventEmitter<void>();
  @Output() addTask = new EventEmitter<newTaskData>()
  @Input() userID !: string;
  private TasksService = inject(TasksService);
  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';


  onCancel(){
    this.close.emit();
  }
  onSubmit(){
    this.TasksService.onAddTask(
      {
        title: this.enteredTitle,
        summary: this.enteredSummary,
        dueDate: this.enteredDate

      }, this.userID
    )
    this.userID
  }
}
