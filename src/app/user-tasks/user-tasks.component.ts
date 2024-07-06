import { userTask } from '../Models/User';
import { dummyTasks } from './../dummyTasks';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-tasks',
  standalone: true,
  imports: [],
  templateUrl: './user-tasks.component.html',
  styleUrl: './user-tasks.component.css'
})
export class UserTasksComponent {
  @Input() name !: string;
  @Input() userTask !: userTask;
  
}
