import {Contrayente} from '../entity/contrayente.model';
import {Observable} from 'rxjs';

export abstract class ContrayenteGateway {
  abstract saveContrayente(contrayente: Partial<Contrayente>): Observable<Contrayente>;

  abstract getAllContrayentes(): Observable<Contrayente[]>;

  abstract getContrayenteByDocumentNumber(docuemntNumber: string): Observable<Contrayente>;
}
