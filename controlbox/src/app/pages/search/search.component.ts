import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DeleteComponent } from 'src/app/component/modal/delete/delete.component';
import { ModalComponent } from 'src/app/component/modal/modal.component';
import { IUser } from 'src/app/interface/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  modalSwitch: boolean = false;

  isModalOpen: boolean = false;

  listUsers: IUser[] = [{
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
  }];

  //@ViewChild("modalRegister", {static: false}) modalRegister!: TemplateRef<any>

  constructor(
    private _userService: UserService,
    private modalService: NgbModal) {

  }

  ngOnInit(): void {
    this.getAll();
    //   this.update({
    //     id: 1,
    //     name: "Leanne Graham update",
    //     username: "Bret",
    //     email: "Sincere@april.biz",
    //     address: {
    //         street: "Kulas Light",
    //         suite: "Apt. 556",
    //         city: "Gwenborough",
    //         zipcode: "92998-3874",
    //         geo: {
    //             lat: "-37.3159",
    //             lng: "81.1496"
    //         }
    //     },
    //     phone: "1-770-736-8031 x56442",
    //     website: "hildegard.org",
    //   company: {
    //         name: "Romaguera-Crona",
    //         catchPhrase: "Multi-layered client-server neural-net",
    //         bs: "harness real-time e-markets"
    //     }
    // },);
  }

  getAll() {
    this._userService.getAll().subscribe(data => {
      this.listUsers = data;
      console.log(data);
    });
  }

  getById(id: number) {
    this._userService.getById(id).subscribe(data => {
      console.log(data)
    });
  }

  create(user: IUser) {
    this._userService.register(user).subscribe(data => {
      if (data != null) {
        this.listUsers.push(data);
        console.log(this.listUsers);
      }
    });
  }

  update(user: IUser) {

    this._userService.update(user).subscribe(data => {
      console.log(this.listUsers.slice());
      let userSerach = this.listUsers.findIndex(x => x.id == data.id);
      if (userSerach != -1) {
        this.listUsers[userSerach] = data;
      }
      console.log(this.listUsers);
    });
  }

  deleteUser(user: IUser) {
    //alert('borrado usuario');
    console.log(this.listUsers.slice());
    let userDelete = this.listUsers.findIndex(x => x.id == user.id)
    if (userDelete != -1) {
      this._userService.delete(Number(user.id)).subscribe(data => {
        this.listUsers.splice(userDelete, 1);
        console.log(this.listUsers);
      });
    }
  }

  openModalRegister(user?:IUser) {
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.title = 'Registrar user';
    modalRef.componentInstance.data = user;
    modalRef.closed.subscribe(data => {
      if (data != null) {
        if(user?.id == 0) this.create(data);
        else this.update(data);
      }
    })
    // this.modalService.open(ModalComponent)
  }

  openModalDelete(user: IUser) {
    const modalRef = this.modalService.open(DeleteComponent);
    modalRef.componentInstance.title = "ELiminar";
    modalRef.componentInstance.texto = `Esta seguro de eliminar al usuario ${user.name}`;
    modalRef.closed.subscribe(data => {
      if (data != null) {
        this.deleteUser(user);
      }
    });
  }



}
