import { Injectable, signal, computed } from '@angular/core';
import { Project, Experience } from './models';

@Injectable({
  providedIn: 'root'
})
export class Data {
  private readonly _projects = signal<Project[]>([
    {
      id: '1',
      title: 'Semantic AI Search',
      description: 'A RAG-based search engine for technical documentation using ChromaDB and Google Gemini.',
      tags: ['Angular', 'Python', 'ChromaDB', 'Gemini'],
      imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800',
      repoUrl: 'https://github.com/Catriel42/semantic-ai',
      deployUrl: 'https://semantic-ai.catodev.com'
    },
    {
      id: '2',
      title: 'Portfolio 2026',
      description: 'My personal developer portfolio built with the latest Angular 21 features and Tailwind v4.',
      tags: ['Angular 21', 'Tailwind v4', 'Signals', 'Zoneless'],
      imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
      repoUrl: 'https://github.com/Catriel42/catodev-portfolio'
    }
  ]);

  private readonly _experience = signal<Experience[]>([
    {
      id: '1',
      company: 'Jala University',
      role: 'Full Stack Student / Developer',
      period: '2023 - Present',
      description: 'Focusing on high-performance web applications and AI integration.'
    }
  ]);

  public readonly projects = this._projects.asReadonly();
  public readonly experience = this._experience.asReadonly();
}
