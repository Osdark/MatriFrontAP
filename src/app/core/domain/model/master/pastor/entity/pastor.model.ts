import {DocumentType} from '../../documentType/entity/documentType.model';

export class Pastor {
  constructor(
    public names: string,
    public lastNames: string,
    public documentNumber: string,
    public documentType: DocumentType,
    public id?: string,
  ) {
  }
}
