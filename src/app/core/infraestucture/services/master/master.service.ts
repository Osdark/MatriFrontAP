import {Injectable} from '@angular/core';
import {MasterGateway} from '../../../domain/model/master/gateway/master-gateway.abstract';
import {environment} from '../../../../../environments/environment';
import {Observable} from 'rxjs';
import {DocumentType} from '../../../domain/model/master/documentType/entity/documentType.model';
import {Iglesia} from '../../../domain/model/master/iglesia/entity/iglesia.model';
import {Pastor} from '../../../domain/model/master/pastor/entity/pastor.model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MasterService extends MasterGateway {


  public masterURL = `${environment.host}:${environment.port}/maestros`;

  constructor(private http: HttpClient) {
    super();
  }

  getAllDocumentTypes(): Observable<DocumentType[]> {
    const URL = `${this.masterURL}/documentos_identidad`;
    return this.http.get<DocumentType[]>(URL).pipe();
  }

  getAllIglesias(): Observable<Iglesia[]> {
    const URL = `${this.masterURL}/iglesias`;
    return this.http.get<Iglesia[]>(URL).pipe();
  }

  getAllPastores(): Observable<Pastor[]> {
    const URL = `${this.masterURL}/pastores`;
    return this.http.get<Pastor[]>(URL).pipe();
  }

  getDocumentTypeByIdType(idType: string): Observable<DocumentType> {
    const URL = `${this.masterURL}/documento/${idType}`;
    return this.http.get<DocumentType>(URL).pipe();
  }

  getIglesiaByName(name: string): Observable<Iglesia> {
    const URL = `${this.masterURL}/iglesia/${name}`;
    return this.http.get<Iglesia>(URL).pipe();
  }

  getPastorByDocumentNumber(documentNumber: string): Observable<Pastor> {
    const URL = `${this.masterURL}/pastor/${documentNumber}`;
    return this.http.get<Pastor>(URL).pipe();
  }

  savePastor(pastor: Pastor): Observable<Pastor> {
    const URL = `${this.masterURL}/pastor/nuevo`;
    return this.http.post<Pastor>(URL, pastor).pipe();
  }

  saveChurch(church: Iglesia) {
    const URL = `${this.masterURL}/iglesia/nueva`;
    return this.http.post<Iglesia>(URL, church).pipe();
  }
}
