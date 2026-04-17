// src/app/app.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileHeader } from './components/profile-header/profile-header';
import { SocialLinks } from './components/social-links/social-links';
import { LinkCardComponent } from './components/link-card/link-card';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProfileHeader, SocialLinks, LinkCardComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class AppComponent {
  profile = {
    name: 'Lucas Galindo',
    title: 'CEO e Fundador Genesis Hitech',
    image: 'assets/locasgenesis.png', // Coloque sua foto aqui
    logoGenesis: 'assets/logo.png',
    linkGenesis: 'https://genesishitech.com.br/'
  };

  videoProjects = [
    { title: 'Projeto Irrigaclima', youtubeId: 'Xfy9Bq4zL4k', thumb: 'assets/thumb1.png' },
    { title: 'Sistema de Automação', youtubeId: 'ZOHgt51zj6o', thumb: 'assets/thumb2.png' }
  ];

  activeVideo: string | null = null;

  toggleVideo(videoId: string) {
    // Se clicar no mesmo vídeo, ele fecha. Se clicar em outro, ele troca.
    this.activeVideo = this.activeVideo === videoId ? null : videoId;
  }
}