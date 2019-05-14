import {Injectable} from '@angular/core';
import {MasterService} from '../../../infraestucture/services/master/master.service';
import {Observable} from 'rxjs';
import {DocumentType} from '../../model/master/documentType/entity/documentType.model';
import {Pastor} from '../../model/master/pastor/entity/pastor.model';
import {Congregacion} from "../../model/master/congregacion/entity/congregacion.model";
import {Distrito} from "../../model/master/congregacion/entity/distrito.model";

@Injectable({
  providedIn: 'root'
})
export class MasterUsecaseService {
  constructor(private masterService: MasterService) {
  }

  getAllDocumentTypes(): Observable<DocumentType[]> {
    return this.masterService.getAllDocumentTypes();
  }

  getAllPastores(): Observable<Pastor[]> {
    return this.masterService.getAllPastores();
  }

  getDocumentTypeByIdType(idType: string): Observable<DocumentType> {
    return this.masterService.getDocumentTypeByIdType(idType);
  }

  getPastorByDocumentNumber(documentNumber: string): Observable<Pastor> {
    return this.masterService.getPastorByDocumentNumber(documentNumber);
  }

  savePastor(pastor: Pastor): Observable<Pastor> {
    return this.masterService.savePastor(pastor);
  }

  getAllCongregaciones(): Observable<Congregacion[]> {
    return this.masterService.getAllCongregaciones();
  }

  getCongregacionesByName(name: string): Observable<Congregacion[]> {
    return this.masterService.getCongregacionesByName(name);
  }

  getCongregacionesByType(type: string): Observable<Congregacion[]> {
    return this.masterService.getCongregacionesByType(type);
  }

  getCongregacionesByDistritoName(distritoName: string): Observable<Congregacion[]> {
    return this.masterService.getCongregacionesByDistritoName(distritoName);
  }

  getAllDistritos(): Observable<Distrito[]> {
    return this.masterService.getAllDistritos();
  }
}
