import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { IUser } from 'src/app/interface/user';
import { Validators } from '@angular/forms';
import { Mapper } from '@dynamic-mapper/mapper';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  /**
   *
   */

  user!: IUser;

  @Input() title!: string;
  @Input() data!: IUser;

  constructor(public activeModal: NgbActiveModal) 
  {
  }

  ngOnInit(): void {
    if (this.data != null){
      // this.data.id = this.formUser.setValue.
      this.mapper(this.data, this.formUser);
      this.mapper(this.data.address?.geo, this.formGeo);
      this.mapper(this.data.address, this.formAddress);
      this.mapper(this.data.company, this.formCompany);
    }
    else console.log('Sin datos de edición')
  }

  formUser = new FormGroup({
    id: new FormControl({ value: 0, disabled: false }),
    name: new FormControl({ value: '', disabled: false }, [Validators.required]),
    username: new FormControl({ value: '', disabled: false }, [Validators.required]),
    email: new FormControl({ value: '', disabled: false }, [Validators.required]),
    phone: new FormControl({ value: '', disabled: false }, [Validators.required]),
    website: new FormControl({ value: '', disabled: false }, [Validators.required])
  });

  formAddress = new FormGroup({
    street: new FormControl({ value: '', disabled: false }, [Validators.required]),
    suite: new FormControl({ value: '', disabled: false }, [Validators.required]),
    city: new FormControl({ value: '', disabled: false }, [Validators.required]),
    zipcode: new FormControl({ value: '', disabled: false }, [Validators.required])
  })

  formGeo = new FormGroup({
    lat: new FormControl({ value: '', disabled: false }, [Validators.required]),
    lng: new FormControl({ value: '', disabled: false }, [Validators.required])
  })

  formCompany = new FormGroup({
    name: new FormControl({ value: '', disabled: false }, [Validators.required]),
    catchPhrase: new FormControl({ value: '', disabled: false }, [Validators.required]),
    bs: new FormControl({ value: '', disabled: false }, [Validators.required])
  })

  mapper(origen:any, form:FormGroup) {
    console.log(origen,form.value);
    for (const key in origen) {
      let element = origen[key];
      let ctl = form.controls[key];
      if(ctl) ctl.setValue(element);
    }
    console.log(origen,form.value);
  }

  // mapper(user: IUser) {
  //   this.mapper.map(user, this.formUser.value);
  // }

  submit() {

    this.formUser.markAllAsTouched();
    this.formAddress.markAllAsTouched();
    this.formCompany.markAllAsTouched();
    this.formGeo.markAllAsTouched();

    console.log(this.formUser,this.formAddress, this.formCompany, this.formGeo);

    if (!this.formUser.valid || !this.formAddress.valid || !this.formCompany.valid || !this.formGeo.valid) {
      return;
    }
    this.user = {
      ...this.formUser.value,
      address: {
        ...this.formAddress.value,
        geo: this.formGeo.value
      },
      company: {
        ...this.formCompany.value
      }
    }
    this.activeModal.close(this.user);
  }
}
