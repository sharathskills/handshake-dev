import { Component } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';

export interface Section {
  name: string;
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

  constructor(public auth: AuthService) {}

  members: Section[] = [
    {
      name: 'Arun',
    },
    {
      name: 'Mohan',
    },
    {
      name: 'Sharath',
    },
    {
      name: 'Killer'
    },
  ];

}
