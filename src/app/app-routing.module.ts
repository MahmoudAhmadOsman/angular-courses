import { CommentsComponent } from './comments/comments.component';
import { ModalComponent } from './modal/modal.component';
import { CoursesComponent } from './courses/courses.component';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { LiveSessionComponent } from './live-session/live-session.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'post-details', component: PostDetailsComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'modal', component: ModalComponent },
  { path: 'session', component: LiveSessionComponent },
  { path: 'comments', component: CommentsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
