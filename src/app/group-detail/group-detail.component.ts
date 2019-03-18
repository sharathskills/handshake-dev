import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-group-detail',
  templateUrl: './group-detail.component.html',
  styleUrls: ['./group-detail.component.scss']
})
export class GroupDetailComponent implements OnInit {
  group: { id: any; name: any; };

  constructor(private route: ActivatedRoute, public auth: AuthService) { }

  ngOnInit() {
    this.group = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name']
    };
    this.route.params
    .subscribe(
      (params: Params) => {
        this.group.id = params['id'];
        this.group.name = params['name'];
        }
    );
  }

}
