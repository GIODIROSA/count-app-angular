import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { CalendarEvent, EventCategory, EventStatus } from "../models/event.model";

@Injectable({
  providedIn: 'root'
})

export class EventService {

  private mockEvents: CalendarEvent[] = Array.from({ length: 24 }).map((_, i) => {
    const day = i + 1;
    const hasImage = [2, 6, 7, 10, 11, 14, 18, 20, 23].includes(day);
    const isRed = [7, 15, 24].includes(day);
    const isBlack = [2, 19].includes(day);
    
    let status = EventStatus.Available;
    if (isRed) status = EventStatus.fullybooked;
    if (isBlack) status = EventStatus.CurrentExhibition;

    return {
      id: day.toString(),
      title: hasImage ? `Evento Especial 0${day}` : `Día Regular 0${day}`,
      description: hasImage ? 'Grand escape y exhibición de fotografía.' : 'El recinto está abierto en horario regular.',
      date: new Date(`2026-01-${day.toString().padStart(2, '0')}T10:00:00`),
      location: 'Konsthall',
      category: EventCategory.Other,
      status: status,
      imageUrl: hasImage ? `https://picsum.photos/id/${30 + day}/400/600` : undefined,
      price: hasImage ? 15000 : 0,
      organizer: 'Sistema',
      createdAt: new Date(),
      updatedAt: new Date()
    };
  });

  constructor() { }

  getEvents(): Observable<CalendarEvent[]> {
    return of(this.mockEvents);
  }

  getEventById(id: string): Observable<CalendarEvent | undefined> {
    const event = this.mockEvents.find(e => e.id === id);
    return of(event);
  }


}
