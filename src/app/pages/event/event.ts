import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CalendarEvent } from '../../core/models/event.model';
import { EventService } from '../../core/services/event.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-event',
  imports: [AsyncPipe],
  templateUrl: './event.html',
  styleUrl: './event.css',
})
export class EventPageComponent implements OnInit {

  public events$: Observable<CalendarEvent[]>;

  constructor(private eventService: EventService) { }

  ngOnInit(): void {
    this.events$ = this.eventService.getEvents();
  }

}
