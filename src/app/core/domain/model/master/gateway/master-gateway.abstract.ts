import {Observable} from 'rxjs';
import {Pastor} from '../pastor/entity/pastor.model';
import {Iglesia} from '../iglesia/entity/iglesia.model';
import {DocumentType} from '../documentType/entity/documentType.model';

export abstract class MasterGateway {
  abstract getAllPastores(): Observable<Pastor[]>;

  abstract getPastorByDocumentNumber(documentNumber: string): Observable<Pastor>;

  abstract savePastor(pastor: Pastor): Observable<Pastor>;

  abstract getAllIglesias(): Observable<Iglesia[]>;

  abstract getIglesiaByName(name: string): Observable<Iglesia>;

  abstract getAllDocumentTypes(): Observable<DocumentType[]>;

  abstract getDocumentTypeByIdType(idType: string): Observable<DocumentType>;
}
