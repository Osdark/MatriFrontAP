import {Injectable} from '@angular/core';
import {ContrayenteService} from '../../../infraestucture/services/contrayente/contrayente.service';
import {Observable} from 'rxjs';
import {Contrayente} from '../../model/contrayente/entity/contrayente.model';

@Injectable({
  providedIn: 'root'
})
export class ContrayenteUsecaseService {
  constructor(private contrayenteService: ContrayenteService) {}

  getAllContrayentes(): Observable<Contrayente[]> {
    return this.contrayenteService.getAllContrayentes();
  }

  getContrayenteByDocumentNumber(documentNumber: string): Observable<Contrayente> {
    return this.contrayenteService.getContrayenteByDocumentNumber(documentNumber);
  }

  saveContrayente(contrayente: Contrayente): Observable<Contrayente> {
    return this.contrayenteService.saveContrayente(contrayente);
  }
}
