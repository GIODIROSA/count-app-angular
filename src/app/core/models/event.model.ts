export enum EventStatus {
    fullybooked = "Fullybooked",
    CurrentExhibition = "Current exhibition",
    Available = "Available",
    cancelled = "Cancelled"
}

export enum EventCategory {
    Concert = "Concert",
    Festival = "Festival",
    Movie = "Movie",
    Other = "Other",
    Meeting = "Meeting"
}

export interface CalendarEvent {
    id: string | number;
    title: string;
    description?: string;
    date: Date;
    location: string;
    category: EventCategory;
    status: EventStatus;
    imageUrl?: string;
    organizer: string;
    createdAt: Date;
    updatedAt: Date;
    price?: number;
}