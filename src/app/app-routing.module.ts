import { ModalComponent } from './modal/modal.component';
import { CoursesComponent } from './courses/courses.component';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'post-details', component: PostDetailsComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'modal', component: ModalComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
