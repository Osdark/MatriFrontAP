import {DocumentType} from '../../master/documentType/entity/documentType.model';

export class Contrayente {
  constructor(
    public names: string,
    public lastNames: string,
    public documentType: DocumentType,
    public documentNumber: string,
    public civilRegistrationNumber: string,
    public notaria: string,
    public id?: string
  ) {
  }
}
