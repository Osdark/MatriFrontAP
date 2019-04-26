import {DocumentType} from '../../documentType/entity/documentType.model';

export class Pastor {
  constructor(
    public id: string,
    public names: string,
    public documentNumber: string,
    public documentType: DocumentType
  ) {
  }
}
