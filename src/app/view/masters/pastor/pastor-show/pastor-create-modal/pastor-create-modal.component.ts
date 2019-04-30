import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MasterUsecaseService} from '../../../../../core/domain/usecase/master/master-usecase.service';
import {DocumentType} from '../../../../../core/domain/model/master/documentType/entity/documentType.model';
import {mensajes} from '../../../../../shared/utils/mensajes';
import {Pastor} from '../../../../../core/domain/model/master/pastor/entity/pastor.model';

@Component({
  selector: 'app-pastor-create-modal',
  templateUrl: './pastor-create-modal.component.html',
  styleUrls: ['./pastor-create-modal.component.scss']
})
export class PastorCreateModalComponent implements OnInit {

  form: FormGroup;
  docTypes: DocumentType[];
  messages: any;
  private newPastor: Pastor;

  constructor(
    public dialogRef: MatDialogRef<PastorCreateModalComponent>,
    public fb: FormBuilder,
    private masterUseCase: MasterUsecaseService,
  ) {
    this.messages = mensajes.pastor;

  }

  ngOnInit() {
    this.getDocumentTypes();
    this.createForm();
    console.log(this.docTypes);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  addPastor() {
    let names = this.form.controls.names.value;
    let lastNames = this.form.controls.lastNames.value;
    let docNumber = this.form.controls.documentNumber.value;
    let docType = this.form.controls.documentType.value;
    this.newPastor = new Pastor(
      names, lastNames, docNumber, docType
    );
    console.log(this.newPastor);
    // this.masterUseCase.savePastor(this.newPastor);
  }

  private createForm() {
    this.form = this.fb.group({
      names: ['', Validators.compose([Validators.required])],
      lastNames: ['', Validators.compose([Validators.required])],
      documentNumber: ['', Validators.compose([
        Validators.required,
        Validators.pattern('[0-9]+')
      ])
      ],
      documentType: [{value: ''}, Validators.compose([Validators.required])],
    });
  }

  private getDocumentTypes() {
    this.masterUseCase.getAllDocumentTypes().subscribe(
      docType => {
        console.log(docType);
        this.docTypes = docType;
      }
    );
  }
}
