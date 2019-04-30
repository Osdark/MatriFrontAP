import {Injectable} from '@angular/core';
import {environment} from '../../../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {MatrimonioGateway} from '../../../domain/model/matrimonio/gateway/matrimonio-gateway.abstract';
import {Matrimonio} from '../../../domain/model/matrimonio/entity/matrimonio.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MatrimonioService extends MatrimonioGateway {
  private matrimonioURL = `${environment.host}:${environment.port}/matrimonio`;

  constructor(private http: HttpClient) {
    super();
  }

  getAllMatrimonios(): Observable<Matrimonio[]> {
    return this.http.get<Matrimonio[]>(this.matrimonioURL).pipe();
  }

  getMatrimoniosByIglesia(iglesiaName: string): Observable<Matrimonio[]> {
    const URL = `${this.matrimonioURL}/iglesia/${iglesiaName}`;
    return this.http.get<Matrimonio[]>(URL).pipe();
  }

  getMatrimoniosByPastor(pastorName: string): Observable<Matrimonio[]> {
    const URL = `${this.matrimonioURL}/pastor/${pastorName}`;
    return this.http.get<Matrimonio[]>(URL).pipe();
  }

  saveMatrimonio(matrimonio: Matrimonio): Observable<Matrimonio> {
    return this.http.post<Matrimonio>(this.matrimonioURL, matrimonio).pipe();
  }
}
