import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IUser } from 'src/app/interface/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {

  @Output() delete = new EventEmitter<IUser>();
  @Output() edit = new EventEmitter<IUser>();

  @Input() data: IUser = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496"
      }
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets"
    }
  }

  // user:IUser;

  constructor() {
    // this.user = {

    // }    
  }

  deleteUser() {
    this.delete.emit(this.data);
    console.log(this.data);
  }

  //Mandar a abri el modal de editar
  editUser() {
    this.edit.emit(this.data);
  }

};

