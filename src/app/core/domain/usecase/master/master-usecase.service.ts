import {Injectable} from '@angular/core';
import {MasterService} from '../../../infraestucture/services/master/master.service';
import {Observable} from 'rxjs';
import {DocumentType} from '../../model/master/documentType/entity/documentType.model';
import {Iglesia} from '../../model/master/iglesia/entity/iglesia.model';
import {Notaria} from '../../model/master/notaria/entity/notaria.model';
import {Pastor} from '../../model/master/pastor/entity/pastor.model';

@Injectable({
  providedIn: 'root'
})
export class MasterUsecaseService {
  constructor(private masterService: MasterService) {}

  getAllDocumentTypes(): Observable<DocumentType[]> {
    return this.masterService.getAllDocumentTypes();
  }

  getAllIglesias(): Observable<Iglesia[]> {
    return this.masterService.getAllIglesias();
  }

  getAllNotarias(): Observable<Notaria[]> {
    return this.masterService.getAllNotarias();
  }

  getAllPastores(): Observable<Pastor[]> {
    return this.masterService.getAllPastores();
  }

  getDocumentTypeByIdType(idType: string): Observable<DocumentType> {
    return this.masterService.getDocumentTypeByIdType(idType);
  }

  getIglesiaByName(name: string): Observable<Iglesia> {
    return this.masterService.getIglesiaByName(name);
  }

  getNotariaByName(name: string): Observable<Notaria> {
    return this.masterService.getNotariaByName(name);
  }

  getPastorByDocumentNumber(documentNumber: string): Observable<Pastor> {
    return this.masterService.getPastorByDocumentNumber(documentNumber);
  }

  saveNotaria(notaria: Notaria): Observable<Notaria> {
    return this.masterService.saveNotaria(notaria);
  }
}
