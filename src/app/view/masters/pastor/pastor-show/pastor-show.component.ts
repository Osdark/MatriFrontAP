import {Component, ViewChild} from '@angular/core';
import {MasterUsecaseService} from '../../../../core/domain/usecase/master/master-usecase.service';
import {Pastor} from '../../../../core/domain/model/master/pastor/entity/pastor.model';
import {MatDialog, MatSort, MatTableDataSource} from '@angular/material';
import {PastorCreateModalComponent} from './pastor-create-modal/pastor-create-modal.component';
import {mensajes} from "../../../../shared/utils/mensajes";

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

  constructor(private masterUseCase: MasterUsecaseService, public dialog: MatDialog) {
    this.getAllPastores();
    this.messages = mensajes.pastor;
  }

  applyFilter(filterValue: string) {
    console.log(filterValue);
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  private getAllPastores() {
    this.masterUseCase.getAllPastores().subscribe(
      pastor => {
        console.log(pastor);
        this.dataSource = new MatTableDataSource(pastor);
        this.dataSource.sort = this.sort;
      }
    );
  }

  openModal(): void {
    const dialogRef = this.dialog.open(PastorCreateModalComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log('Closed');
    });
  }
}
