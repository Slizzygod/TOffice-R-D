import { Component, OnInit } from '@angular/core';

import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  mainMenuitems: MenuItem[] = [
    { label:'Календарь'},
    { label:'Карточки сотрудников'},
    { label:'Список сотрудников'},
    { label:'Статусы сервисов'}
  ];

  profileMenuItems: MenuItem[] = [
    { label: 'Профиль' },
    { label: 'Настройки' },
    { label: 'Выход' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
