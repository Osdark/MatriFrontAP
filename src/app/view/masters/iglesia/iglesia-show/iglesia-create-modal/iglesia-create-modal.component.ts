import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from "@angular/material";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MasterUsecaseService} from "../../../../../core/domain/usecase/master/master-usecase.service";
import {ToasterService} from "angular2-toaster";
import {Iglesia} from "../../../../../core/domain/model/master/iglesia/entity/iglesia.model";
import {mensajes} from "../../../../../shared/utils/mensajes";

@Component({
  selector: 'app-iglesia-create-modal',
  templateUrl: './iglesia-create-modal.component.html',
  styleUrls: ['./iglesia-create-modal.component.scss']
})
export class IglesiaCreateModalComponent {

  public form: FormGroup;
  messages: any;
  private newChurch: Iglesia;

  constructor(
    public dialogRef: MatDialogRef<IglesiaCreateModalComponent>,
    public fb: FormBuilder,
    private masterUseCase: MasterUsecaseService,
    private toastr: ToasterService,
  ) {
    this.messages = mensajes.church;
    this.initData();
    this.createForm();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  addChurch() {
    if (this.form.valid) {
      this.newChurch.name = this.form.controls.name.value;
      this.newChurch.address = this.form.controls.address.value;
      console.log(JSON.stringify(this.newChurch));
      this.masterUseCase.saveChurch(this.newChurch).subscribe(
        result => {
          console.log(result);
        }
      ); /* Save Church to DB */
      this.dialogRef.close(this.showMessage(
        'success', this.messages.create.title, this.messages.create.successful)
      );
    } else {
      console.log('Error');
      this.showMessage('error', this.messages.create.title, this.messages.create.unsuccessful);
    }
  }

  private initData() {
    this.newChurch = new Iglesia(
      null,
      null,
      null
    );
  }

  private createForm() {
    this.form = this.fb.group({
      name: ['', Validators.compose([Validators.required])],
      address: ['', Validators.compose([Validators.required])],
    });
  }

  private showMessage(type: string, title: string, body: string, ) {
    this.toastr.pop(type, title, body);
  }
}
