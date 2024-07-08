import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { UserTasksComponent } from './tasks/tasks.component';
import { DUMMY_USERS } from './dummyUsers';
import { dummyTasks } from './dummyTasks';
import { User, userTask } from './Models/User';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, UserTasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  // userTasks = dummyTasks;
  users = DUMMY_USERS;
  selectedUserTask !: userTask;
  selectedUserId !: string;
  addTaskFotUserId ?: string;
  selectedUser(){
    return this.users.find((user: User)=> user.id === this.selectedUserId); 
  }
  onSelectUser(id:string){
    this.selectedUserId = id 
  }
 
}
