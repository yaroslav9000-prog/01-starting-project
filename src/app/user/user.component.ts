import { Component, computed, Input, signal, input, Output, EventEmitter } from '@angular/core';
import { DUMMY_USERS } from '../dummyUsers';



@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
    @Input({required:true}) id!: string;
    @Input({required: true}) avatar!: string;
    @Input({required: true}) name!: string;
    //This section is about events.
    //First put Decorator @Output()
    @Output() select = new EventEmitter();
    // avatar = input.required<string>(); 
    // name = input.required<string>();
    // if no state is set i can assign it a default state, be it a string or number
    // or i can ignore that and make it recieve a value in the future with type assertion <string>
    // also i can make that property a required one with input.required()

    // imgPath = computed(()=> '../../assets/users/' + this.avatar());
    get imagePath() {
      return '../../assets/users/' + this.avatar;
    }
    onSelectUser(){
      //The following method triggers event according to my needs.
      this.select.emit(this.id);
    }
}
