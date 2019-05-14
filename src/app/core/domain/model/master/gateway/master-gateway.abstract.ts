import {Observable} from 'rxjs';
import {Pastor} from '../pastor/entity/pastor.model';
import {DocumentType} from '../documentType/entity/documentType.model';
import {Congregacion} from '../congregacion/entity/congregacion.model';
import {Distrito} from "../congregacion/entity/distrito.model";

export abstract class MasterGateway {
  abstract getAllPastores(): Observable<Pastor[]>;

  abstract getPastorByDocumentNumber(documentNumber: string): Observable<Pastor>;

  abstract savePastor(pastor: Pastor): Observable<Pastor>;

  abstract getAllDocumentTypes(): Observable<DocumentType[]>;

  abstract getDocumentTypeByIdType(idType: string): Observable<DocumentType>;

  abstract getAllCongregaciones(): Observable<Congregacion[]>;

  abstract getCongregacionesByName(name: string): Observable<Congregacion[]>;

  abstract getCongregacionesByType(type: string): Observable<Congregacion[]>;

  abstract getCongregacionesByDistritoName(distritoName: string): Observable<Congregacion[]>;

  abstract getAllDistritos(): Observable<Distrito[]>;
}
