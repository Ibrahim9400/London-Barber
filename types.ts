export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  price: string;
  duration: string;
}

export interface ReviewItem {
  id: string;
  name: string;
  rating: number;
  text: string;
  date: string;
}

export interface NavigationItem {
  label: string;
  href: string;
}

export interface OpeningHour {
  day: string;
  hours: string;
}