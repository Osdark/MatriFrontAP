import {Contrayente} from '../../contrayente/entity/contrayente.model';
import {Pastor} from '../../master/pastor/entity/pastor.model';
import {Congregacion} from '../../master/congregacion/entity/congregacion.model';

export class Matrimonio {
  constructor(
    public contrayentes: Contrayente[],
    public iglesia: Congregacion,
    public pastor: Pastor,
    public date: Date,
    public marriageRegistrationNumber: string,
    public notaria: string,
    public actaNumber: string,
    public id?: string,
  ) {
  }
}
