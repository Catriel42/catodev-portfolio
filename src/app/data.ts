import { Injectable, signal, computed } from '@angular/core';
import { Project, Experience } from './models';

@Injectable({
  providedIn: 'root'
})
export class Data {
  private readonly _projects = signal<Project[]>([
    {
      id: '1',
      title: 'Semathic AI',
      description: 'Advanced RAG-based search engine for mathematical research. Features a 384-dimensional vector space, t-SNE dimensionality reduction (2D/3D), and Isolation Forest anomaly detection.',
      tags: ['Angular 21', 'FastAPI', 'ChromaDB', 't-SNE', 'RAG'],
      imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800',
      repoUrl: 'https://github.com/Catriel42/semathic-ai',
      deployUrl: 'https://semathic-ai.vercel.app'
    },
    {
      id: '2',
      title: 'Catodev Portfolio',
      description: 'My personal developer portfolio built with the latest Angular 21 features and Tailwind v4.',
      tags: ['Angular 21', 'Tailwind v4', 'Signals', 'Zoneless'],
      imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
      repoUrl: 'https://github.com/Catriel42/catodev-portfolio',
      deployUrl: 'https://github.com/Catriel42/catodev-portfolio',
    }
  ]);

  private readonly _experience = signal<Experience[]>([
    {
      id: '1',
      company: 'Jala University',
      role: 'Commercial Software Engineering Student',
      period: '2024 - Present',
      description: 'Commercial software engineer in training with a focus on high-impact product development. Specialized in scalable architectures, critical system optimization, and strategic AI integration for enterprise-grade solutions.'
    },
    {
      id: '2',
      company: 'NASA Space Apps Challenge',
      role: '1st Place Winner (Team CloudCatchers)',
      period: 'October 2025',
      description: 'Won 1st place in the Cochabamba NASA Space Apps Hackathon with project "WIRA". Developed an intelligent air quality prediction platform integrating NASA TEMPO satellite data with Machine Learning models and an AI-driven chatbot for natural language atmospheric analysis.'
    }
  ]);

  public readonly projects = this._projects.asReadonly();
  public readonly experience = this._experience.asReadonly();
}
