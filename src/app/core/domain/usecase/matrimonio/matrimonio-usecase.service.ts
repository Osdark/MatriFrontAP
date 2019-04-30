import {Injectable} from '@angular/core';
import {MatrimonioService} from '../../../infraestucture/services/matrimonio/matrimonio.service';
import {Observable} from 'rxjs';
import {Matrimonio} from '../../model/matrimonio/entity/matrimonio.model';

@Injectable({
  providedIn: 'root'
})
export class MatrimonioUsecaseService {
 constructor(private matrimonioService: MatrimonioService) {}

  getAllMatrimonios(): Observable<Matrimonio[]> {
    return this.matrimonioService.getAllMatrimonios();
  }

  getMatrimoniosByIglesia(iglesiaName: string): Observable<Matrimonio[]> {
    return this.matrimonioService.getMatrimoniosByIglesia(iglesiaName);
  }

  getMatrimoniosByPastor(pastorName: string): Observable<Matrimonio[]> {
    return this.matrimonioService.getMatrimoniosByPastor(pastorName)
  }

  saveMatrimonio(matrimonio: Matrimonio): Observable<Matrimonio> {
    return this.matrimonioService.saveMatrimonio(matrimonio);
  }
}
