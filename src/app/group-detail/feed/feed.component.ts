import { Component, OnInit } from '@angular/core';
import { NgxSmartModalService } from 'ngx-smart-modal';
export interface Section {
  fid: string;
  fname: string;
  updated: Date;
  authname: string;
}
@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent {

  constructor() { }

  links: Section[] = [
    {
      fid: '1',
      fname: 'Questions about Spiral Dynamics',
      updated: new Date('1/1/18'),
      authname: 'SahilPandit',
    },
    {
      fid: '2',
      fname: 'Is bitcoin stage orange?',
      updated: new Date('1/1/18'),
      authname: 'SahilPandit',
    },
    {
      fid: '3',
      fname: 'Tomorrow is National Holiday',
      updated: new Date('1/1/18'),
      authname: 'SahilPandit',
    },
    {
      fid: '4',
      fname: 'Reprogramming',
      updated: new Date('1/1/18'),
      authname: 'SahilPandit',
    },
  ];

}
