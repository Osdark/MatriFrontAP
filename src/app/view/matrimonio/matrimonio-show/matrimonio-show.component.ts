import {Component, ViewChild} from '@angular/core';
import {mensajes} from '../../../shared/utils/mensajes';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {Matrimonio} from '../../../core/domain/model/matrimonio/entity/matrimonio.model';
import {MatrimonioUsecaseService} from '../../../core/domain/usecase/matrimonio/matrimonio-usecase.service';
import {MasterUsecaseService} from '../../../core/domain/usecase/master/master-usecase.service';
import {ToasterService} from 'angular2-toaster';
import {AuthService} from "../../../auth/auth.service";

@Component({
  selector: 'app-matrimonio-show',
  templateUrl: './matrimonio-show.component.html',
  styleUrls: ['./matrimonio-show.component.scss']
})
export class MatrimonioShowComponent {
  messages: any;
  displayedColumns: string[] =
    ['actaNumber', 'contrayente1', 'contrayente2', 'church', 'pastor', 'date', 'marriageRegistrationNumber', 'notaria'];
  dataSource: MatTableDataSource<Matrimonio>;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private matrimonioUSeCase: MatrimonioUsecaseService,
    private masterUseCase: MasterUsecaseService,
    private toastr: ToasterService,
    private auth: AuthService,
  ) {
    this.getAllMarriages();
    this.messages = mensajes.matrimonio.show;
  }

  applyFilter(filterValue: string) {
    console.log(filterValue);
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  private getAllMarriages() {
    this.matrimonioUSeCase.getAllMatrimonios().subscribe(
      marriage => {
        console.log(marriage);
        this.dataSource = new MatTableDataSource(marriage);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      err => {
        this.toastr.pop('error', 'Error', this.messages.noResults);
        console.log(err);
      }
    );
  }
}
