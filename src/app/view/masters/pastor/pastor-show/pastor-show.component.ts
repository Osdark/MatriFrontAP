import {Component} from '@angular/core';
import {MasterUsecaseService} from '../../../../core/domain/usecase/master/master-usecase.service';
import {Pastor} from '../../../../core/domain/model/master/pastor/entity/pastor.model';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-pastor-show',
  templateUrl: './pastor-show.component.html',
  styleUrls: ['./pastor-show.component.scss']
})

export class PastorShowComponent {
  displayedColumns: string[] = ['names', 'lastNames', 'documentNumber', 'documentType'];
  dataSource: MatTableDataSource<Pastor>;

  constructor(private masterUseCase: MasterUsecaseService) {
    this.getAllPastores();
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
      }
    );
  }
}
