import { User, userTask } from '../Models/User';
import { dummyTasks } from '../dummyTasks';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
// import { NgFor } from '@angular/common';
@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class UserTasksComponent {
  @Input({required: true}) userID !: string | undefined;
  @Input({required: true}) name !: string | undefined;
  // @Output() addTask = new EventEmitter<string>();
  isAddingTask = false;
  tasks = dummyTasks; 
  
  getSelectedUserTasks(){
    return this.tasks.filter((item:userTask)=>(item.userId === this.userID));
  }
  onCompleteTask(id: string){
    this.tasks = this.tasks.filter((item: userTask)=> (item.id !== id))
  }
  onStartAddTask(){
    this.isAddingTask = true;
  }
}
