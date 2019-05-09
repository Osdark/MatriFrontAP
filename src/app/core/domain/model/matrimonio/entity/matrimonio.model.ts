import {Contrayente} from '../../contrayente/entity/contrayente.model';
import {Iglesia} from '../../master/iglesia/entity/iglesia.model';
import {Pastor} from '../../master/pastor/entity/pastor.model';

export class Matrimonio {
  constructor(
    public contrayentes: Contrayente[],
    public iglesia: Iglesia,
    public pastor: Pastor,
    public date: Date,
    public marriageRegistrationNumber: string,
    public notaria: string,
    public actaNumber: string,
    public id?: string,
  ) {
  }
}
