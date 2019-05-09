import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatrimonioUsecaseService} from '../../../core/domain/usecase/matrimonio/matrimonio-usecase.service';
import {MasterUsecaseService} from '../../../core/domain/usecase/master/master-usecase.service';
import {Iglesia} from '../../../core/domain/model/master/iglesia/entity/iglesia.model';
import {Pastor} from '../../../core/domain/model/master/pastor/entity/pastor.model';
import {ToasterService} from 'angular2-toaster';
import {Matrimonio} from '../../../core/domain/model/matrimonio/entity/matrimonio.model';
import {Contrayente} from '../../../core/domain/model/contrayente/entity/contrayente.model';
import {mensajes} from '../../../shared/utils/mensajes';

@Component({
  selector: 'app-matrimonio-create',
  templateUrl: './matrimonio-create.component.html',
  styleUrls: ['./matrimonio-create.component.scss']
})
export class MatrimonioCreateComponent {

  marriageForm: FormGroup;
  contrayenteForm: FormGroup;
  churches: Iglesia[];
  pastors: Pastor[];
  messages: any;
  public newMarriage: Matrimonio;
  private contrayentes: Contrayente[];

  constructor(
    private fb: FormBuilder,
    private matrimonioUseCase: MatrimonioUsecaseService,
    private masterUseCase: MasterUsecaseService,
    public toastr: ToasterService,
  ) {
    this.messages = mensajes.matrimonio.create;
    this.getChurches();
    this.getPastors();
    this.initMarriage();
    this.createForms();
  }

  private createForms() {
    this.contrayenteForm = this.fb.group({
      valid: [null, Validators.required],
      contrayenteData: [null, Validators.required],
    });
    this.marriageForm = this.fb.group({
      church: [{value: ''}, Validators.compose([Validators.required])],
      pastor: [{value: ''}, Validators.compose([Validators.required])],
      date: ['', Validators.compose([Validators.required])],
      regNumber: ['', Validators.compose([Validators.required])],
      notaria: ['', Validators.compose([Validators.required])],
    });
  }

  private getChurches() {
    this.masterUseCase.getAllIglesias().subscribe(
      church => {
        this.churches = church;
      });
  }

  private getPastors() {
    this.masterUseCase.getAllPastores().subscribe(
      pastor => {
        this.pastors = pastor;
      });
  }

  private showMessage(type: string, title: string, body: string) {
    this.toastr.pop(type, title, body);
  }

  private initMarriage() {
    this.newMarriage = new Matrimonio(
      this.contrayentes = [
        new Contrayente(
          null,
          null,
          null,
          null,
          null,
          null
        ), new Contrayente(
          null,
          null,
          null,
          null,
          null,
          null
        ),
      ],
      null,
      null,
      null,
      null,
      null,
      null,
    );
  }
}
