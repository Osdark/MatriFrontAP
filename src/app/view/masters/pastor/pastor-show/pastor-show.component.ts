import {Component, ViewChild} from '@angular/core';
import {MasterUsecaseService} from '../../../../core/domain/usecase/master/master-usecase.service';
import {Pastor} from '../../../../core/domain/model/master/pastor/entity/pastor.model';
import {MatDialog, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {PastorCreateModalComponent} from './pastor-create-modal/pastor-create-modal.component';
import {mensajes} from '../../../../shared/utils/mensajes';
import {ToasterService} from 'angular2-toaster';

@Component({
  selector: 'app-pastor-show',
  templateUrl: './pastor-show.component.html',
  styleUrls: ['./pastor-show.component.scss']
})

export class PastorShowComponent {
  displayedColumns: string[] = ['names', 'lastNames', 'documentNumber', 'documentType'];
  dataSource: MatTableDataSource<Pastor>;
  messages: any;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private masterUseCase: MasterUsecaseService,
    public dialog: MatDialog,
    private toastr: ToasterService
  ) {
    this.getAllPastors();
    this.messages = mensajes.pastor;
  }

  applyFilter(filterValue: string) {
    console.log(filterValue);
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openModal(): void {
    const dialogRef = this.dialog.open(PastorCreateModalComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log('Closed');
    });
  }

  private getAllPastors() {
    this.masterUseCase.getAllPastores().subscribe(
      pastors => {
        this.dataSource = new MatTableDataSource(pastors);
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
