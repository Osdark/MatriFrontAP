import {Injectable} from '@angular/core';
import {MasterGateway} from '../../../domain/model/master/gateway/master-gateway.abstract';
import {environment} from '../../../../../environments/environment';
import {Observable} from 'rxjs';
import {DocumentType} from '../../../domain/model/master/documentType/entity/documentType.model';
import {Iglesia} from '../../../domain/model/master/iglesia/entity/iglesia.model';
import {Notaria} from '../../../domain/model/master/notaria/entity/notaria.model';
import {Pastor} from '../../../domain/model/master/pastor/entity/pastor.model';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MasterService extends MasterGateway {


  public masterURL = `${environment.host}:${environment.port}/maestros`;

  constructor(private http: HttpClient) {
    super();
  }

  getAllDocumentTypes(): Observable<DocumentType[]> {
    const URL = `${this.masterURL}/documentTypes`;
    return this.http.get<DocumentType[]>(URL).pipe();
  }

  getAllIglesias(): Observable<Iglesia[]> {
    const URL = `${this.masterURL}/iglesias`;
    return this.http.get<Iglesia[]>(URL).pipe();
  }

  getAllNotarias(): Observable<Notaria[]> {
    const URL = `${this.masterURL}/notarias`;
    return this.http.get<Notaria[]>(URL).pipe();
  }

  getAllPastores(): Observable<Pastor[]> {
    const URL = `${this.masterURL}/pastores`;
    return this.http.get<Pastor[]>(URL).pipe();
  }

  getDocumentTypeByIdType(idType: string): Observable<DocumentType> {
    const URL = `${this.masterURL}/documentType/${idType}`;
    return this.http.get<DocumentType>(URL).pipe();
  }

  getIglesiaByName(name: string): Observable<Iglesia> {
    const URL = `${this.masterURL}/iglesia/${name}`;
    return this.http.get<Iglesia>(URL).pipe();
  }

  getNotariaByName(name: string): Observable<Notaria> {
    const URL = `${this.masterURL}/notaria/${name}`;
    return this.http.get<Notaria>(URL).pipe();
  }

  getPastorByDocumentNumber(documentNumber: string): Observable<Pastor> {
    const URL = `${this.masterURL}/pastor/${documentNumber}`;
    return this.http.get<Pastor>(URL).pipe();
  }

  saveNotaria(notaria: Notaria): Observable<Notaria> {
    const URL = `${this.masterURL}/notaria/nueva`;
    return this.http.post<Notaria>(URL, notaria).pipe();
  }

  savePastor(pastor: Pastor): Observable<Pastor> {
    const URL = `${this.masterURL}/pastor/nuevo`;
    return this.http.post<Pastor>(URL, pastor).pipe();
  }
}
