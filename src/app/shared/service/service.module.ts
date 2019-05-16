import {forwardRef, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ContrayenteGateway} from '../../core/domain/model/contrayente/gateway/contrayente-gateway.abstract';
import {ContrayenteService} from '../../core/infraestucture/services/contrayente/contrayente.service';
import {MasterGateway} from '../../core/domain/model/master/gateway/master-gateway.abstract';
import {MasterService} from '../../core/infraestucture/services/master/master.service';
import {NbMenuService, NbSidebarService} from '@nebular/theme';
import {NbMenuInternalService} from '@nebular/theme/components/menu/menu.service';
import {AuthService} from "../../auth/auth.service";

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
    },
    NbSidebarService,
    NbMenuInternalService,
    NbMenuService,
    AuthService,
    // Matrimonio Service
  ]
})
export class ServiceModule {
}
