import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { QuestionsComponent } from './testing-app/questions/questions.component';
import { QuestionComponent } from './testing-app/questions/question/question.component';
import { AnswerComponent } from './testing-app/answer/answer.component';
import { FormsModule } from '@angular/forms';
import { QuestionService } from './shared/question.service';
import { BackgroundDirective } from './directives/background.directive';
import { DisplayDirective } from './directives/display.directive';
import { CounterComponent } from './testing-app/counter/counter.component';
import { TestingAppComponent } from './testing-app/testing-app.component';
import { UsersAppComponent } from './users-app/users-app.component';
import { NewUserComponent } from './users-app/new-user/new-user.component';
import { GroupsComponent } from './users-app/groups/groups.component';
import { NewGroupComponent } from './users-app/new-group/new-group.component';
import { GroupComponent } from './users-app/groups/group/group.component';
import { UsersComponent } from './users-app/users/users.component';
import { UserComponent } from './users-app/users/user/user.component';
import { UserService } from './shared/user.service';
import { GroupService } from './shared/group.service';
import { RouletteAppComponent } from './roulette-app/roulette-app.component';
import { RouletteService } from './shared/roulette.service';
import { ColorDirective } from './directives/color.directive';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'users', component: UsersAppComponent},
  {path: 'testing', component: TestingAppComponent},
  {path: 'roulette', component: RouletteAppComponent},
  // {path: '**', component: RouletteAppComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    QuestionsComponent,
    QuestionComponent,
    AnswerComponent,
    BackgroundDirective,
    DisplayDirective,
    CounterComponent,
    TestingAppComponent,
    UsersAppComponent,
    NewUserComponent,
    GroupsComponent,
    NewGroupComponent,
    GroupComponent,
    UsersComponent,
    UserComponent,
    RouletteAppComponent,
    ColorDirective,
    ToolbarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [QuestionService, UserService, GroupService, RouletteService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
