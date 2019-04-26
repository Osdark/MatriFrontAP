import {DocumentType} from '../../master/documentType/entity/documentType.model';
import {Notaria} from '../../master/notaria/entity/notaria.model';

export class Contrayente {
  constructor(
    public id: string,
    public names: string,
    public lastNames: string,
    public documentType: DocumentType,
    public documentNumber: string,
    public civilRegistrationNumber: string,
    public notaria: Notaria
  ) {
  }
}
