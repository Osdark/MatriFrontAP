import {Component, OnInit} from '@angular/core';
import {ContrayenteUsecaseService} from '../../../core/domain/usecase/contrayente/contrayente-usecase.service';
import {mensajes} from '../../../shared/utils/mensajes';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Contrayente} from '../../../core/domain/model/contrayente/entity/contrayente.model';
import {ToasterService} from 'angular2-toaster';
import {MasterUsecaseService} from '../../../core/domain/usecase/master/master-usecase.service';
import {DocumentType} from '../../../core/domain/model/master/documentType/entity/documentType.model';

@Component({
  selector: 'app-contrayente-create',
  templateUrl: './contrayente-create.component.html',
  styleUrls: ['./contrayente-create.component.scss']
})
export class ContrayenteCreateComponent implements OnInit {
  public form: FormGroup;
  messages: any;
  docTypes: DocumentType[];
  private newContrayente: Contrayente;


  constructor(
    public fb: FormBuilder,
    private masterUseCase: MasterUsecaseService,
    private contrayenteUseCase: ContrayenteUsecaseService,
    private toastr: ToasterService,
  ) {
    this.messages = mensajes.contrayente;
    this.initContrayente();
    this.createForm();
  }

  ngOnInit() {
    this.getDocumentTypes();
  }

  addContrayente() {
    if (this.form.valid) {
      this.newContrayente.names = this.form.controls.names.value;
      this.newContrayente.lastNames = this.form.controls.lastNames.value;
      this.newContrayente.documentNumber = this.form.controls.documentNumber.value;
      this.newContrayente.documentType = this.form.controls.documentType.value;
      this.newContrayente.civilRegistrationNumber = this.form.controls.civilRegNumber.value;
      this.newContrayente.notaria = this.form.controls.notaria.value;
      console.log(this.newContrayente.documentType);
      console.log(JSON.stringify(this.newContrayente));
      /*this.contrayenteUseCase.saveContrayente(this.newContrayente).subscribe(
        contrayente => console.log(contrayente)
      ); /* Save Contrayente To DB */
      this.showMessage('success', this.messages.create.title, this.messages.create.successful);
      location.reload();
    } else {
      console.log('Formulario inválido');
      this.showMessage('error', this.messages.create.title, this.messages.create.unsuccessful);
    }
  }

  onNoClick() {
    location.reload();
  }

  private initContrayente() {
    this.newContrayente = new Contrayente(
      null,
      null,
      null,
      null,
      null,
      null
    );
  }

  private getDocumentTypes() {
    this.masterUseCase.getAllDocumentTypes().subscribe(
      docType => this.docTypes = docType
    );
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
      civilRegNumber: ['', Validators.compose([
        Validators.required,
        Validators.pattern('[0-9]+')
      ])],
      notaria: ['', Validators.compose([Validators.required])],
    });
  }

  private showMessage(type: string, title: string, body: string) {
    this.toastr.pop(type, title, body);
  }
}
