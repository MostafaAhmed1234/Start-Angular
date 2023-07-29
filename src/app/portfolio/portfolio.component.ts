import { Component, OnInit, NgModule } from '@angular/core';
import { modelData } from '../interfaces';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent implements OnInit {
  boxes: modelData[] = [
    { title: 'LOG CABIN', url: 'assets/images/cabin.png' },
    { title: 'TASTY CAKE', url: 'assets/images/cake.png' },
    { title: 'CIRCUS TENT', url: 'assets/images/circus.png' },
    { title: 'CONTROLLER', url: 'assets/images/game.png' },
    { title: 'LOCKED SAFE', url: 'assets/images/safe.png' },
    { title: 'SUBMARINE', url: 'assets/images/submarine.png' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
