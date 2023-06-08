import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IUser } from 'src/app/interface/user';

@Component({
  selector: 'app-lista-users',
  templateUrl: './lista-users.component.html',
  styleUrls: ['./lista-users.component.scss']
})
export class ListaUsersComponent {

  @Output() delete = new EventEmitter<IUser>();
  @Output() edit = new EventEmitter<IUser>();

  @Input() data? : IUser[];

  deleteUser(user: IUser) {
    this.delete.emit(user);
  }

  editUser(user: IUser) {
    this.edit.emit(user);
  }

}


