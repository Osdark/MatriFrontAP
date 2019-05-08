import {Injectable} from '@angular/core';
import {ContrayenteGateway} from '../../../domain/model/contrayente/gateway/contrayente-gateway.abstract';
import {Observable} from 'rxjs';
import {Contrayente} from '../../../domain/model/contrayente/entity/contrayente.model';
import {environment} from '../../../../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContrayenteService extends ContrayenteGateway {

  public contrayenteURL = `${environment.host}:${environment.port}`;

  constructor(private http: HttpClient) {
    super();
  }

  getAllContrayentes(): Observable<Contrayente[]> {
    const URL = `${this.contrayenteURL}/contrayentes`;
    return this.http.get<Contrayente[]>(URL).pipe();
  }

  getContrayenteByDocumentNumber(documentNumber: string): Observable<Contrayente> {
    const URL = `${this.contrayenteURL}/contrayente/${documentNumber}`;
    return this.http.get<Contrayente>(URL).pipe();
  }

  saveContrayente(contrayente: Partial<Contrayente>): Observable<Contrayente> {
    const URL = `${this.contrayenteURL}/contrayente/nuevo`;
    return this.http.post<Contrayente>(URL, contrayente).pipe();
  }
}
