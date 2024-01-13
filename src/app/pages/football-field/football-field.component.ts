import { Component, OnInit } from '@angular/core';
import { Player } from 'src/app/interfaces/player';

@Component({
  selector: 'app-football-field',
  templateUrl: './football-field.component.html',
  styleUrls: ['./football-field.component.scss']
})
export class FootballFieldComponent implements OnInit {

  public path: string = '../../../assets/players/'
  public players: Player[] = [
    {number: 4, surname: 'Кривцов', name: 'Олександр', path: `${this.path}4.jpg`},
    {number: 22, surname: 'Матвиенко', name: 'Дмитро', path: `${this.path}22.jpg`},
    {number: 10, surname: 'Шапаренко', name: 'Назар', path: `${this.path}10.jpg`},
    {number: 2, surname: 'Соболь', name: 'Андрей', path: `${this.path}2.jpg`},
    {number: 6, surname: 'Степаненко', name: 'Василь', path: `${this.path}6.jpg`},
    {number: 18, surname: 'Тимчук', name: 'Ярослав', path: `${this.path}18.jpg`},
    {number: 15, surname: 'Циганков', name: 'Володымир', path: `${this.path}15.jpg`},
    {number: 9, surname: 'Яремчук', name: 'Арсений', path: `${this.path}9.jpg`},
    {number: 7, surname: 'Ярмоленко', name: 'Змицер', path: `${this.path}7.jpg`},
    {number: 13, surname: 'Забарный', name: 'Серго', path: `${this.path}13.jpg`},

  ]

  

  constructor() { }

  ngOnInit(): void {
    
  }

}
