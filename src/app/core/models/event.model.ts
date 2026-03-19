export enum eventStatus {
    fullybooked= "Fullybooked",
    CurrentExhibition = "Current exhibition",
    Available = "Available",
    cancelled= "Cancelled"
}

export enum EventCategory{
    Concert = "Concert",
    Festival = "Festival",
    Movie = "Movie",    
    Other = "Other"
}

export interface Event {
    id: string | number;
    title: string;
    description: string;
    date: Date;
   location: string;
   category: EventCategory;
   status: eventStatus;
   imageUrl: string;
   organizer: string;
   createdAt: Date;
   updatedAt: Date;
}