import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-feed-show',
  templateUrl: './feed-show.component.html',
  styleUrls: ['./feed-show.component.scss']
})
export class FeedShowComponent implements OnInit {
 feed;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.feed = {
      fid: this.route.snapshot.params['fid'],
      fname: this.route.snapshot.params['fname'],
      fupdated: this.route.snapshot.params['updated'],
      fauthname: this.route.snapshot.params['authname']
    };
    this.route.params
    .subscribe(
      (params: Params) => {
        this.feed.fid = params['fid'];
        this.feed.fname = params['fname'];
        this.feed.fupdated = params['updated'];
        this.feed.fauthname = params['authname'];
        }
    );
  }

}
