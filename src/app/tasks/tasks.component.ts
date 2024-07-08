import { User, userTask, newTaskData } from '../Models/User';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { CardComponent } from '../shared/card/card.component';
import { TasksService } from './tasks.service';

// import { NgFor } from '@angular/common';
@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent, CardComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class UserTasksComponent {
  @Input({required: true}) userID !: string;
  @Input({required: true}) name !: string | undefined;
  // @Output() addTask = new EventEmitter<string>();
  isAddingTask = false;
   
  constructor(private tasksService: TasksService){}

  get selectedUserTasks(){
    return this.tasksService.getSelectedUserTasks(this.userID);
  }  
   

  onStartAddTask(){
    this.isAddingTask = true;
  }
  onCloseAddTask(){
    this.isAddingTask = false;
  }
  
}
