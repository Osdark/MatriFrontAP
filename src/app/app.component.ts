import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {NbMenuItem} from "@nebular/theme";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'MatriFront';
  items: NbMenuItem[] = [
    {
      title: 'Home',
      link: '/'
    },
    {
      title: 'Pastores',
      link: '/pastores'
    }
  ];

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.router.navigate(['']);
  }
}
