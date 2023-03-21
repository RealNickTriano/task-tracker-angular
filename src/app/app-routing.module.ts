import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProjectsComponent } from './components/projects/projects.component';
import { AccountComponent } from './components/account/account.component';
import { DiscussionComponent } from './components/discussion/discussion.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './common/guards/auth.guard';
import { MainComponent } from './components/main/main.component';

const routes: Routes = [
  { path: 'app', 
    component: MainComponent,
    children: [ 
      { path: 'projects', 
        component: ProjectsComponent,
        //canActivate: [AuthGuard],
      }, 
      { path: 'account', 
        component: AccountComponent,
        //canActivate: [AuthGuard] 
      }, 
      { path: 'discussion', 
        component: DiscussionComponent,
        //canActivate: [AuthGuard]
      }, 
      { path: 'projects/:id', 
        component: TasksComponent,
        //canActivate: [AuthGuard]
      }, 
    ]
  },
  { 
    path: 'login', 
    component: LoginComponent,
  },
  { path: '**', redirectTo: '/app/projects' }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
