import { Injectable, signal, computed } from '@angular/core';
import { Project, Experience, Article } from './models';

@Injectable({
  providedIn: 'root'
})
export class Data {
  private readonly _projects = signal<Project[]>([
    {
      id: '1',
      title: 'BattleTanks',
      description: 'Real-time multiplayer tank battle game featuring a 2D tile-based arena. Built with HTTP REST, SignalR for state synchronization, and MQTT (EMQX) for ultra-low latency event messaging. Deployed on AWS with Terraform.',
      tags: ['Angular', '.NET', 'SignalR', 'MQTT', 'PostgreSQL', 'AWS'],
      imageUrl: '/projects/battle-tanks.png',
      repoUrl: 'https://github.com/Catriel42/battle-tanks',
      areas: ['Full-Stack & Web', 'Backend & Cloud']
    },
    {
      id: '2',
      title: 'Event Manager - Jala U',
      description: 'Full-stack platform for university event management with Google OAuth, ticketing, and real-time capacity tracking. Built with Angular (Zoneless) and NestJS monorepo, Prisma ORM, and automated with Playwright and k6 load tests.',
      tags: ['Angular', 'NestJS', 'TypeScript', 'Prisma', 'PostgreSQL', 'Docker'],
      imageUrl: '/projects/event-jalau.png',
      repoUrl: 'https://github.com/Catriel42/events-manager-jalau',
      deployUrl: 'https://events-jalau.me/events',
      areas: ['Full-Stack & Web', 'Backend & Cloud']
    },
    {
      id: '3',
      title: 'Semathic AI',
      description: 'Advanced RAG-based search engine for mathematical research. Features a 384-dimensional vector space, t-SNE dimensionality reduction (2D/3D), and Isolation Forest anomaly detection.',
      tags: ['Angular', 'FastAPI', 'ChromaDB', 't-SNE', 'RAG'],
      imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800',
      repoUrl: 'https://github.com/Catriel42/semathic-ai',
      areas: ['Full-Stack & Web', 'AI & Algorithms']
    },
    {
      id: '4',
      title: 'Weather Dashboard',
      description: 'Interactive real-time weather web application consuming the OpenWeatherMap API with dynamic search, detailed atmospheric metrics, and light/dark theme. Deployed to AWS CloudFront and S3 via AWS CDK.',
      tags: ['React', 'TypeScript', 'Vite', 'AWS CDK', 'CloudFront', 'S3'],
      imageUrl: '/projects/weather-dashboard.png',
      repoUrl: 'https://github.com/Catriel42/weather-dashboard',
      deployUrl: 'https://dnr3v5hngcmwc.cloudfront.net',
      areas: ['Full-Stack & Web', 'Backend & Cloud']
    },
    {
      id: '5',
      title: 'Chess Sorting Visualizer CLI',
      description: 'Command-line educational visualization tool in Java that visualizes classic sorting algorithms (Bubble, Insertion, Quick, Merge Sort) using a chessboard metaphor with animated console rendering and Strategy/Factory patterns.',
      tags: ['Java', 'Algorithms', 'CLI', 'Design Patterns'],
      imageUrl: 'https://images.unsplash.com/photo-1529699211952-734e80c4d42b?auto=format&fit=crop&q=80&w=800',
      repoUrl: 'https://github.com/Catriel42/chess-sorting-algorithms-visualizer-cli',
      areas: ['AI & Algorithms']
    },
    {
      id: '6',
      title: 'ForoHub API',
      description: 'RESTful discussion forum API for the Oracle Next Education (ONE) challenge. Features stateless JWT authentication with Spring Security, PostgreSQL data persistence, and Flyway database migrations.',
      tags: ['Java', 'Spring Boot', 'Spring Security', 'JWT', 'PostgreSQL', 'Flyway'],
      imageUrl: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800',
      repoUrl: 'https://github.com/Catriel42/one-challenge-forohub',
      areas: ['Backend & Cloud']
    }
  ]);

  private readonly _experience = signal<Experience[]>([
    {
      id: '1',
      company: 'NASA Space Apps Challenge Cochabamba 2025',
      role: '1st Place Winner (Team CloudCatchers)',
      period: 'October 2025',
      description: 'Won 1st place in the Cochabamba NASA Space Apps Hackathon with project "WIRA". Developed an intelligent air quality prediction platform integrating NASA TEMPO satellite data with Machine Learning models and an AI-driven chatbot for natural language atmospheric analysis.'
    },
    {
      id: '2',
      company: 'Jala University',
      role: 'Commercial Software Engineering Student',
      period: '2024 - Present',
      description: 'Commercial software engineer in training with a focus on high-impact product development. Specialized in scalable architectures, critical system optimization, and strategic AI integration for enterprise-grade solutions.'
    }
  ]);

  public readonly projects = this._projects.asReadonly();
  public readonly experience = this._experience.asReadonly();

  private readonly _articles = signal<Article[]>([
    {
      id: '1',
      slug: 'taller-aws-sdk-for-dotnet',
      title: 'Taller: C#/.NET + AWS SDK for .NET',
      excerpt: 'Aprende a usar AWS SDK para .NET con foco en Amazon Bedrock.',
      contentUrl: '/articles-content/taller-aws-sdk-for-dotnet.md',
      type: 'workshop',
      date: '2026-09-15',
      tags: ['C#/.NET', 'AWS SDK', 'Workshop'],
      imageUrl: '/taller-aws-images/taller-aws-portada.png'
    }
  ]);

  public readonly articles = this._articles.asReadonly();
}
