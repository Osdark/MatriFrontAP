import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {NbMenuItem, NbSidebarService} from "@nebular/theme";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'MatriFront';
  items: NbMenuItem[] = [
    {
      title: 'Inicio',
      home: true,
      link: '/',
      icon: 'fa fa-home',
    },
    {
      title: 'Matrimonios',
      icon: 'fa fa-book',
      children: [
        {
          title: 'Ver',
          link: '/matrimonios'
        },
        {
          title: 'Registrar',
          link: '/matrimonio/nuevo'
        }
      ]
    },
    {
      title: 'Maestros',
      icon: 'fa fa-user',
      children: [
        {
          title: 'Pastores',
          link: '/pastores',
          icon: 'fa fa-black-tie'
        },
        {
          title: 'Iglesias',
          link: '/congregaciones',
          icon: 'fa fa-institution'
        },
      ]
    },
  ];

  constructor(
    private router: Router,
    private sidebarService: NbSidebarService,
  ) {
  }

  ngOnInit(): void {
    this.router.navigate(['']);
  }

  toggle() {
    this.sidebarService.toggle(true);
    return false;
  }
}
