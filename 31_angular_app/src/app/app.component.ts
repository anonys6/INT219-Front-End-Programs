import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgFor } from '@angular/common';
import { NgIf } from '@angular/common';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
    // title = '31_angular_app';
    title = "tanmaya";

    subTitle = "Welcome to my page";

    images = [
        'https://source.unsplash.com/random/800x600',
        'https://source.unsplash.com/random/800x600',
        'https://source.unsplash.com/random/800x600',
        'https://source.unsplash.com/random/800x600',
        'https://source.unsplash.com/random/800x600'
    ];

    
}