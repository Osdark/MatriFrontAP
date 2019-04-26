import {Component, OnInit} from '@angular/core';
import {MasterUsecaseService} from '../../core/domain/usecase/master/master-usecase.service';
import {Pastor} from '../../core/domain/model/master/pastor/entity/pastor.model';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-pastor-show',
  templateUrl: './pastor-show.component.html',
  styleUrls: ['./pastor-show.component.scss']
})
export class PastorShowComponent implements OnInit {
  public pastores: Pastor[];
  public displayedColumns: string[] = ['names', 'lastNames', 'documentNumber', 'documentType'];

  constructor(private masterUseCase: MasterUsecaseService) {
    this.getAllPastores();
  }

  ngOnInit() {
    console.log('pastores!');
    console.log(this.pastores);
  }

  private getAllPastores() {
    this.masterUseCase.getAllPastores().subscribe(
      pastores => {
        console.log(pastores);
        this.pastores = pastores;
      }
    );
  }
}
