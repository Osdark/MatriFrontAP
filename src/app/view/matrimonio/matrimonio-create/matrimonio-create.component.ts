import {ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MatrimonioUsecaseService} from '../../../core/domain/usecase/matrimonio/matrimonio-usecase.service';
import {MasterUsecaseService} from '../../../core/domain/usecase/master/master-usecase.service';
import {Pastor} from '../../../core/domain/model/master/pastor/entity/pastor.model';
import {ToasterService} from 'angular2-toaster';
import {Matrimonio} from '../../../core/domain/model/matrimonio/entity/matrimonio.model';
import {Contrayente} from '../../../core/domain/model/contrayente/entity/contrayente.model';
import {mensajes} from '../../../shared/utils/mensajes';
import {Congregacion} from '../../../core/domain/model/master/congregacion/entity/congregacion.model';
import {Distrito} from '../../../core/domain/model/master/congregacion/entity/distrito.model';
import {ContrayenteUsecaseService} from '../../../core/domain/usecase/contrayente/contrayente-usecase.service';
import {ContrayenteCreateComponent} from '../../contrayente/contrayente-create/contrayente-create.component';

@Component({
  selector: 'app-matrimonio-create',
  templateUrl: './matrimonio-create.component.html',
  styleUrls: ['./matrimonio-create.component.scss']
})
export class MatrimonioCreateComponent implements OnInit {

  marriageData: FormGroup;
  churches: Congregacion[];
  distritos: Distrito[];
  pastors: Pastor[];
  messages: any;
  public newMarriage: Matrimonio;
  @ViewChild(ContrayenteCreateComponent) contrayenteCreatePointer: ContrayenteCreateComponent;
  private contrayentes: Contrayente[] = [];

  constructor(
    private fb: FormBuilder,
    private cdRef: ChangeDetectorRef,
    private matrimonioUseCase: MatrimonioUsecaseService,
    private contrayenteUseCase: ContrayenteUsecaseService,
    private masterUseCase: MasterUsecaseService,
    public toastr: ToasterService,
  ) {
    this.messages = mensajes.matrimonio.create;
    this.createForms();
    this.initMarriage();
  }

  ngOnInit() {
    this.cdRef.detectChanges();
    this.getPastors();
    this.getDistritos();
  }

  private createForms() {
    this.marriageData = this.fb.group({
      district: [{value: ''}, Validators.compose([Validators.required])],
      church: [{value: ''}, Validators.compose([Validators.required])],
      pastor: [{value: ''}, Validators.compose([Validators.required])],
      date: ['', Validators.compose([Validators.required])],
      regNumber: ['', Validators.compose([
        Validators.required,
        Validators.pattern('[0-9]+')
      ])],
      notaria: ['', Validators.compose([Validators.required])],
    });
  }

  private getChurches(districtName) {
    this.masterUseCase.getCongregacionesByDistritoName(districtName).subscribe(
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

  private getDistritos() {
    this.masterUseCase.getAllDistritos()
      .subscribe(
        distrito => {
          this.distritos = distrito;
        });
  }

  private initMarriage() {
    this.newMarriage = new Matrimonio(
      this.contrayentes,
      null,
      null,
      null,
      null,
      null,
      null,
    );
  }

  private showMessage(type: string, title: string, body: string) {
    this.toastr.pop(type, title, body);
  }

  private saveContrayentes(pointer) {
    console.log(pointer);
    const novia = new Contrayente(
      pointer.form.controls.names.value, pointer.form.controls.lastNames.value,
      pointer.form.controls.documentType.value, pointer.form.controls.documentNumber.value,
      pointer.form.controls.civilRegNumber.value, pointer.form.controls.notaria.value
    );
    const novio = new Contrayente(
      pointer.form1.controls.names.value, pointer.form1.controls.lastNames.value,
      pointer.form1.controls.documentType.value, pointer.form1.controls.documentNumber.value,
      pointer.form1.controls.civilRegNumber.value, pointer.form1.controls.notaria.value
    );
    console.log(novia);
    console.log(novio);
    this.newMarriage.contrayentes.push(novia);
    this.newMarriage.contrayentes.push(novio);
    console.log(this.newMarriage);
  }

  isDisabled(): boolean {
    const result = this.contrayenteCreatePointer.form.valid;
    const result1 = this.contrayenteCreatePointer.form1.valid;
    return !result || !result1;
  }

  isValid(): string {
    let color = 'warning';
    return this.marriageData.valid ? color = 'success' : color = 'warning';
  }
}
