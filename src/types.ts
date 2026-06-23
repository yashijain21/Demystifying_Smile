export interface Service {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  priceRange: string;
  duration: string;
  icon: string; // Lucide icon name
  benefits: string[];
}

export interface Appointment {
  id?: string;
  name: string;
  phone: string;
  email?: string;
  service: string;
  date: string;
  time: string;
  notes?: string;
  status?: 'Pending' | 'Confirmed' | 'Completed' | 'Cancelled';
  createdAt?: string;
}

export interface Review {
  id?: string;
  author: string;
  rating: number; // 1-5
  comment: string;
  dateStr: string;
  isVerified: boolean;
  avatarInitials: string;
}
