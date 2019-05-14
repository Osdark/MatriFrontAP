import {Component, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from "@angular/material";
import {Congregacion} from "../../../../core/domain/model/master/congregacion/entity/congregacion.model";
import {MasterUsecaseService} from "../../../../core/domain/usecase/master/master-usecase.service";
import {ToasterService} from "angular2-toaster";
import {mensajes} from "../../../../shared/utils/mensajes";

@Component({
  selector: 'app-congregacion-show',
  templateUrl: './congregacion-show.component.html',
  styleUrls: ['./congregacion-show.component.scss']
})
export class CongregacionShowComponent {

  displayedColumns: string[] = ['distritoName', 'name', 'type'];
  dataSource: MatTableDataSource<Congregacion>;
  messages: any;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private masterUseCase: MasterUsecaseService,
    private toastr: ToasterService
  ) {
    this.getAllIglesias();
    this.messages = mensajes.church;
  }

  applyFilter(value: string) {
    console.log(value);
    this.dataSource.filter = value.trim().toLowerCase();
  }

  private getAllIglesias() {
    this.masterUseCase.getAllCongregaciones().subscribe(
      congregaciones => {
        this.dataSource = new MatTableDataSource(congregaciones);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
        err => {
        this.toastr.pop('error', 'Error', this.messages.show.noResults);
        console.log(err);
      }
    );
  }
}
