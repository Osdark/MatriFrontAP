import {Injectable} from '@angular/core';
import {MasterGateway} from '../../../domain/model/master/gateway/master-gateway.abstract';
import {environment} from '../../../../../environments/environment';
import {Observable} from 'rxjs';
import {DocumentType} from '../../../domain/model/master/documentType/entity/documentType.model';
import {Pastor} from '../../../domain/model/master/pastor/entity/pastor.model';
import {HttpClient} from '@angular/common/http';
import {Congregacion} from "../../../domain/model/master/congregacion/entity/congregacion.model";
import {Distrito} from "../../../domain/model/master/congregacion/entity/distrito.model";

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

  getAllPastores(): Observable<Pastor[]> {
    const URL = `${this.masterURL}/pastores`;
    return this.http.get<Pastor[]>(URL).pipe();
  }

  getDocumentTypeByIdType(idType: string): Observable<DocumentType> {
    const URL = `${this.masterURL}/documento/${idType}`;
    return this.http.get<DocumentType>(URL).pipe();
  }

  getPastorByDocumentNumber(documentNumber: string): Observable<Pastor> {
    const URL = `${this.masterURL}/pastor/${documentNumber}`;
    return this.http.get<Pastor>(URL).pipe();
  }

  savePastor(pastor: Pastor): Observable<Pastor> {
    const URL = `${this.masterURL}/pastor/nuevo`;
    return this.http.post<Pastor>(URL, pastor).pipe();
  }

  getAllCongregaciones(): Observable<Congregacion[]> {
    const URL = `${this.masterURL}/congregaciones`;
    return this.http.get<Congregacion[]>(URL).pipe();
  }

  getCongregacionesByDistritoName(distritoName: string): Observable<Congregacion[]> {
    const URL = `${this.masterURL}/congregaciones/distrito/${distritoName}`;
    return this.http.get<Congregacion[]>(URL).pipe();
  }

  getCongregacionesByName(name: string): Observable<Congregacion[]> {
    const URL = `${this.masterURL}/congregaciones/name/${name}`;
    return this.http.get<Congregacion[]>(URL).pipe();
  }

  getCongregacionesByType(type: string): Observable<Congregacion[]> {
    const URL = `${this.masterURL}/congregaciones/distrito/${type}`;
    return this.http.get<Congregacion[]>(URL).pipe();
  }

  getAllDistritos(): Observable<Distrito[]> {
    const URL = `${this.masterURL}/distritos`;
    return this.http.get<Distrito[]>(URL).pipe();
  }
}
