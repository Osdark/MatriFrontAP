import {Observable} from 'rxjs';
import {Matrimonio} from '../entity/matrimonio.model';

export abstract class MatrimonioGateway {
  abstract saveMatrimonio(): Observable<Matrimonio>;

  abstract getAllMatrimonios(): Observable<Matrimonio[]>;

  abstract getMatrimoniosByPastor(pastorName: string): Observable<Matrimonio[]>;

  abstract getMatrimoniosByIglesia(iglesiaName: string): Observable<Matrimonio[]>;
}
