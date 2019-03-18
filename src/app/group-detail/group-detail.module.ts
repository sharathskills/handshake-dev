import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupDetailComponent } from './group-detail.component';
import { FeedComponent } from './feed/feed.component';
import { ResourceComponent } from './resource/resource.component';
import { GoalComponent } from './goal/goal.component';
import { AboutComponent } from './about/about.component';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
import { AppRoutingModule } from '../app-routing.module';
import {MatDividerModule} from '@angular/material/divider';
import {MatTreeModule} from '@angular/material/tree';
import { NgxSmartModalModule } from 'ngx-smart-modal';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import { GoalCreateComponent } from './goal/goal-create/goal-create.component';
import { FeedShowComponent } from './feed/feed-show/feed-show.component';
import {MatFormFieldModule} from '@angular/material/form-field';



@NgModule({
  imports: [
    CommonModule,
    MatListModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatTabsModule,
    AppRoutingModule,
    MatSelectModule,
    MatDividerModule,
    MatTreeModule,
    NgxSmartModalModule,
    MatInputModule,
    MatCardModule,
    MatFormFieldModule
  ],
  // tslint:disable-next-line:max-line-length
  declarations: [GroupDetailComponent, FeedComponent, ResourceComponent, GoalComponent, AboutComponent, GoalCreateComponent, FeedShowComponent]
})
export class GroupDetailModule { }
