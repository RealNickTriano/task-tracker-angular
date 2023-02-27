import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProjectsComponent } from './components/projects/projects.component';
import { AccountComponent } from './components/account/account.component';
import { DiscussionComponent } from './components/discussion/discussion.component';
import { TasksComponent } from './components/tasks/tasks.component';

const routes: Routes = [
  { path: 'projects', component: ProjectsComponent}, 
  { path: 'account', component: AccountComponent }, 
  { path: 'discussion', component: DiscussionComponent }, 
  { path: 'projects/:id', component: TasksComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
