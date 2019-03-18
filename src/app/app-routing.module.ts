import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GroupListComponent } from './group-list/group-list.component';
import { GroupDetailComponent } from './group-detail/group-detail.component';
import { FeedComponent } from './group-detail/feed/feed.component';
import { AboutComponent } from './group-detail/about/about.component';
import { ResourceComponent } from './group-detail/resource/resource.component';
import { GoalComponent } from './group-detail/goal/goal.component';
import { FeedShowComponent } from './group-detail/feed/feed-show/feed-show.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'groups', component: GroupListComponent },
  { path: 'groups/:id/:name', component: GroupDetailComponent, children: [
      { path: 'feed', component: FeedComponent },
      { path: 'about', component: AboutComponent },
      { path: 'resource', component: ResourceComponent },
      { path: 'goal', component: GoalComponent }
    ]
  },
  { path: 'groups/:id/:name/feed/:fid', component: FeedShowComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
