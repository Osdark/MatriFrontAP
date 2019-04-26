import {Observable} from 'rxjs';
import {Pastor} from '../pastor/entity/pastor.model';
import {Iglesia} from '../iglesia/entity/iglesia.model';
import {Notaria} from '../notaria/entity/notaria.model';
import {DocumentType} from '../documentType/entity/documentType.model';

export abstract class MasterGateway {
  abstract getAllPastores(): Observable<Pastor[]>;

  abstract getPastorByDocumentNumber(documentNumber: string): Observable<Pastor>;

  abstract getAllIglesias(): Observable<Iglesia[]>;

  abstract getIglesiaByName(name: string): Observable<Iglesia>;

  abstract getAllNotarias(): Observable<Notaria[]>;

  abstract getNotariaByName(name: string): Observable<Notaria>;

  abstract saveNotaria(notaria: Notaria): Observable<Notaria>;

  abstract getAllDocumentTypes(): Observable<DocumentType[]>;

  abstract getDocumentTypeByIdType(idType: string): Observable<DocumentType>;
}
