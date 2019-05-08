import {Component, ViewChild} from '@angular/core';
import {MasterUsecaseService} from '../../../../core/domain/usecase/master/master-usecase.service';
import {MatDialog, MatSort, MatTableDataSource} from '@angular/material';
import {Iglesia} from '../../../../core/domain/model/master/iglesia/entity/iglesia.model';
import {mensajes} from '../../../../shared/utils/mensajes';
import {ToasterService} from 'angular2-toaster';
import {IglesiaCreateModalComponent} from './iglesia-create-modal/iglesia-create-modal.component';

@Component({
  selector: 'app-iglesia-show',
  templateUrl: './iglesia-show.component.html',
  styleUrls: ['./iglesia-show.component.scss']
})
export class IglesiaShowComponent {

  displayedColumns: string[] = ['name', 'address'];
  dataSource: MatTableDataSource<Iglesia>;
  messages: any;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private masterUseCase: MasterUsecaseService, public dialog: MatDialog, private toastr: ToasterService) {
    this.getAllChurches();
    this.messages = mensajes.church;
  }

  applyFilter(value: string) {
    console.log(value);
    this.dataSource.filter = value.trim().toLowerCase();
  }

  openModal() {
    const dialogRef = this.dialog.open(IglesiaCreateModalComponent);
    dialogRef.afterClosed().subscribe(
      resuilt => {
        location.reload();
        console.log('Closed');
      }
    );
  }

  getAllChurches() {
    this.masterUseCase.getAllIglesias().subscribe(
      churches => {
        console.log(churches);
        this.dataSource = new MatTableDataSource(churches);
        this.dataSource.sort = this.sort;
      },
      err => {
        this.toastr.pop('error', 'Error', this.messages.show.noResults);
        console.log(err);
      }
    );
  }
}
