import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ContrayenteGateway} from '../../core/domain/model/contrayente/gateway/contrayente-gateway.abstract';
import {ContrayenteService} from '../../core/infraestucture/services/contrayente/contrayente.service';
import {MasterGateway} from '../../core/domain/model/master/gateway/master-gateway.abstract';
import {MasterService} from '../../core/infraestucture/services/master/master.service';

@NgModule({
  imports: [CommonModule],
  providers: [
    {
      provide: ContrayenteGateway,
      useClass: ContrayenteService
    },
    {
      provide: MasterGateway,
      useClass: MasterService
    }
    // Matrimonio Service
  ]
})
export class ServiceModule {
}
