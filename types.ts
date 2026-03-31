
export interface Room {
  id: string;
  name: string;
  price: number;
  amenities: string[];
  imageUrl: string;
  gallery?: string[];
  rating: number;
  description: string;
  location?: string;
}

export interface Booking {
  id: string;
  guestName: string;
  roomName: string;
  checkIn: string;
  checkOut: string;
  status: 'Confirmed' | 'Pending' | 'Cancelled';
  total: number;
}
