import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupDetailComponent } from './group-detail.component';
import { FeedComponent } from './feed/feed.component';
import { ResourceComponent } from './resource/resource.component';
import { GoalComponent } from './goal/goal.component';
import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from '../app-routing.module';
import { GoalCreateComponent } from './goal/goal-create/goal-create.component';
import { FeedShowComponent } from './feed/feed-show/feed-show.component';
import { FeedCreateComponent } from './feed/feed-create/feed-create.component';
import { MaterialModule } from '../shared/material.module';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    MaterialModule,
  ],
  // tslint:disable-next-line:max-line-length
  declarations: [
    GroupDetailComponent,
    FeedComponent,
    ResourceComponent,
    GoalComponent,
    AboutComponent,
    GoalCreateComponent,
    FeedShowComponent,
    FeedCreateComponent
  ]
})
export class GroupDetailModule { }
