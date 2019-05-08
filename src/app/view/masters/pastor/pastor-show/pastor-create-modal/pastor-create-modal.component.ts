import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MasterUsecaseService} from '../../../../../core/domain/usecase/master/master-usecase.service';
import {DocumentType} from '../../../../../core/domain/model/master/documentType/entity/documentType.model';
import {mensajes} from '../../../../../shared/utils/mensajes';
import {Pastor} from '../../../../../core/domain/model/master/pastor/entity/pastor.model';
import {ToasterService} from 'angular2-toaster';

@Component({
  selector: 'app-pastor-create-modal',
  templateUrl: './pastor-create-modal.component.html',
  styleUrls: ['./pastor-create-modal.component.scss']
})
export class PastorCreateModalComponent implements OnInit {
  public form: FormGroup;
  docTypes: DocumentType[];
  messages: any;
  private newPastor: Pastor;

  constructor(
    public dialogRef: MatDialogRef<PastorCreateModalComponent>,
    public fb: FormBuilder,
    private masterUseCase: MasterUsecaseService,
    private toastr: ToasterService,
  ) {
    this.messages = mensajes.pastor;
    this.initData();
    this.createForm();
  }

  initData(): any {
    this.newPastor = new Pastor(
      null,
      null,
      null,
      null
    );
  }

  ngOnInit() {
    this.getDocumentTypes();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  addPastor() {
    if (this.form.valid) {
      this.newPastor.names = this.form.controls.names.value;
      this.newPastor.lastNames = this.form.controls.lastNames.value;
      this.newPastor.documentNumber = this.form.controls.documentNumber.value;
      this.newPastor.documentType = this.form.controls.documentType.value;
      console.log(this.newPastor.documentType);
      console.log(JSON.stringify(this.newPastor));
      /*this.masterUseCase.savePastor(this.newPastor).subscribe(
         result => {
           console.log(result);
         }
       ); /* Save Pastor To DB */
      this.dialogRef.close(this.showMessage(
        'success', this.messages.create.title, this.messages.create.successful)
      );
    } else {
      console.log('error');
      this.showMessage('error', this.messages.create.title, this.messages.create.unsuccessful);
    }
  }


  private createForm() {
    this.form = this.fb.group({
      names: ['', Validators.compose([Validators.required])],
      lastNames: ['', Validators.compose([Validators.required])],
      documentNumber: ['', Validators.compose([
        Validators.required,
        Validators.pattern('[0-9]+')
      ])],
      documentType: [{value: ''}, Validators.compose([Validators.required])],
    });
  }

  private getDocumentTypes() {
    this.masterUseCase.getAllDocumentTypes().subscribe(
      docType => {
        this.docTypes = docType;
      }
    );
  }

  private showMessage(type: string, title: string, body: string) {
    this.toastr.pop(type, title, body);
  }
}
