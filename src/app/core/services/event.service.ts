import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { CalendarEvent, EventCategory, EventStatus } from "../models/event.model";

@Injectable({
    providedIn: 'root'
})

export class EventService {

    private mockEvents: CalendarEvent[] = [
    {
      id: '1',
      title: 'Concierto de Rock Progresivo',
      description: 'Una noche de música increíble bajo las estrellas.',
      date: new Date('2026-05-15T21:00:00'),
      location: 'Movistar Arena, Santiago',
      category: EventCategory.Concert,
      status: EventStatus.Available,
      imageUrl: 'https://via.placeholder.com/150',
      price: 45000,
      organizer: 'Rock Producciones',
      createdAt: new Date(),
      updatedAt: new Date() 
    },
    {
      id: '2',
      title: 'Exposición Arte Moderno',
      description: 'Muestra exclusiva de artistas locales.',
      date: new Date('2026-04-10T10:00:00'),
      location: 'Museo Bellas Artes',
      category: EventCategory.Meeting,
      status: EventStatus.CurrentExhibition,
      price: 0,
      organizer: 'Rock Producciones',
      createdAt: new Date(),
      updatedAt: new Date() 
    },
    {
      id: '3',
      title: 'Estreno: El Viaje de Lucy',
      description: 'Documental sobre la vida canina.',
      date: new Date('2026-06-01T19:00:00'),
      location: 'Cine Hoyts',
      category: EventCategory.Movie,
      status: EventStatus.fullybooked,
      price: 5000,
      organizer: 'Rock Producciones',
      createdAt: new Date(),
      updatedAt: new Date() 
    }
  ];

  constructor(){}

  getEvents(): Observable<CalendarEvent[]> {
    return of(this.mockEvents);
  }

  getEventById(id: string): Observable<CalendarEvent | undefined> {
    const event = this.mockEvents.find(e => e.id === id);
    return of(event);
  }

    
}
