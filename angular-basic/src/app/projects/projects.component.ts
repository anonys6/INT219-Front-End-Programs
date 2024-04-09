import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects = [
    { name: 'Project 1', description: 'This is a description of Project 1.', link: 'https://example.com', image: 'https://via.placeholder.com/150' },
    { name: 'Project 2', description: 'This is a description of Project 2.', link: 'https://example.com', image: 'https://via.placeholder.com/150' },
    { name: 'Project 3', description: 'This is a description of Project 3.', link: 'https://example.com', image: 'https://via.placeholder.com/150' },
    { name: 'Project 4', description: 'This is a description of Project 4.', link: 'https://example.com', image: 'https://via.placeholder.com/150' },
  ];
}