import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SideNavBarComponent } from './components/side-nav-bar/side-nav-bar.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { AccountComponent } from './components/account/account.component';
import { DiscussionComponent } from './components/discussion/discussion.component';
import { ProjectDetailsComponent } from './components/projects/project-details/project-details.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { NewButtonComponent } from './common/components/new-button/new-button.component';
import { DropdownComponent } from './common/components/dropdown/dropdown.component';
import { TextInputComponent } from './common/components/text-input/text-input.component';
import { TaskModalComponent } from './components/tasks/task-modal/task-modal.component';
import { TaskFormComponent } from './components/tasks/task-form/task-form.component';
import { TextBoxComponent } from './common/components/text-box/text-box.component';
import { DropdownFilterComponent } from './common/components/dropdown-filter/dropdown-filter.component';
import { LoginComponent } from './components/login/login.component';

import { devEnviornment } from './environments/enviornment.dev';
import { FirebaseService } from './common/services/firebase.service';


@NgModule({
  declarations: [
    AppComponent,
    SideNavBarComponent,
    ProjectsComponent,
    AccountComponent,
    DiscussionComponent,
    ProjectDetailsComponent,
    TasksComponent,
    NewButtonComponent,
    DropdownComponent,
    TextInputComponent,
    TaskModalComponent,
    TaskFormComponent,
    TextBoxComponent,
    DropdownFilterComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    HttpClientModule,
    FormsModule,

    AngularFireModule.initializeApp(devEnviornment.firebase)
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
