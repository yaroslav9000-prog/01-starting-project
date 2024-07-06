import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { UserTasksComponent } from './user-tasks/user-tasks.component';
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
  userTasks = dummyTasks;
  users = DUMMY_USERS;
  userName !: string;
  selectedUserTask !: userTask;

  onSelectUser(id:string){
    for(let index = 0; index < this.userTasks.length; index++){
      if(this.userTasks[index].userId == id){
        this.selectedUserTask = this.userTasks[index];
        break;
      }
    }
    this.userName = (DUMMY_USERS.filter((item:User)=>(item.id !== id)))[0].name;
  }
}
