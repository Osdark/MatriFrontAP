import {Contrayente} from '../../contrayente/entity/contrayente.model';
import {Iglesia} from '../../master/iglesia/entity/iglesia.model';
import {Pastor} from '../../master/pastor/entity/pastor.model';
import {Notaria} from '../../master/notaria/entity/notaria.model';

export class Matrimonio {
  constructor(
    public id: string,
    public contrayentes: Contrayente[],
    public iglesia: Iglesia,
    public pastor: Pastor,
    public date: Date,
    public marriageRegistrationNumber: string,
    public notaria: Notaria,
    public actaNumber: string
  ) {
  }
}
