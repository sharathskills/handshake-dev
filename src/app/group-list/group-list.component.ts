import { Component, ValueProvider } from '@angular/core';
import { ValueTransformer } from '@angular/compiler/src/util';
import { AuthService } from '../shared/services/auth.service';

export interface Section {
  id: number;
  name: string;
  member: number;
}

@Component({
  selector: 'app-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.scss']
})
export class GroupListComponent {

  constructor(public auth: AuthService) {}

  Groups: Section[] = [
    {
      id:  1223,
      name: 'Self Actualization',
      member: 10
    },
    {
      id:  1224,
      name: 'Computer Architecture',
      member: 20
    },
    {
      id:  12223,
      name: 'Student Welfare Committee',
      member: 15
    },
    {
      id:  12243,
      name: 'Web Dev Teams',
      member: 45
    }
  ];
}
