import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
    { path: 'projects', component: ProjectsComponent },
    { path: 'contact', component: ContactComponent },
    { path: '', redirectTo: '/projects', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }