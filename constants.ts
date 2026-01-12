import { ServiceItem, ReviewItem, OpeningHour, NavigationItem } from './types';

export const BUSINESS_INFO = {
  name: "London Gents Barbers",
  address: "4 Wincott St, Kennington Rd, London, UK",
  googleRating: 4.9,
  reviewCount: 487,
  phone: "+44 20 1234 5678",
  mapUrl: "https://maps.google.com/maps?q=4%20Wincott%20St%2C%20Kennington%20Rd%2C%20London&t=&z=15&ie=UTF8&iwloc=&output=embed",
  bookingUrl: "javascript:void(0)" // Placeholder: do nothing for now
};

export const NAVIGATION: NavigationItem[] = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Location", href: "#location" },
];

export const SERVICES: ServiceItem[] = [
  {
    id: '1',
    title: "Men's Haircut",
    description: "Classic scissor cut or clipper work, finished with styling products.",
    price: "£28",
    duration: "45 min"
  },
  {
    id: '2',
    title: "Skin Fade",
    description: "Precision zero-grade fade blending perfectly into the top.",
    price: "£32",
    duration: "60 min"
  },
  {
    id: '3',
    title: "Beard Trim & Shape",
    description: "Sculpting the beard with clipper and scissors, line-up included.",
    price: "£18",
    duration: "30 min"
  },
  {
    id: '4',
    title: "Hot Towel Shave",
    description: "Traditional wet shave with straight razor, hot towels, and oils.",
    price: "£35",
    duration: "45 min"
  },
  {
    id: '5',
    title: "Full Grooming Package",
    description: "The complete experience: Haircut, Beard Trim, and Facial treatment.",
    price: "£55",
    duration: "90 min"
  }
];

export const REVIEWS: ReviewItem[] = [
  {
    id: '1',
    name: "James Anderson",
    rating: 5,
    text: "Very friendly barbers and great haircut. Best fade I've had in London in years.",
    date: "2 days ago"
  },
  {
    id: '2',
    name: "Michael Thompson",
    rating: 5,
    text: "Excellent fades and beard trims. The attention to detail is unmatched.",
    date: "1 week ago"
  },
  {
    id: '3',
    name: "David Miller",
    rating: 5,
    text: "Great atmosphere and fair prices. Feels like a proper traditional shop with a modern touch.",
    date: "3 weeks ago"
  }
];

export const OPENING_HOURS: OpeningHour[] = [
  { day: "Monday - Friday", hours: "09:00 AM - 07:00 PM" },
  { day: "Saturday", hours: "09:00 AM - 05:00 PM" },
  { day: "Sunday", hours: "Closed" },
];

export const WHY_CHOOSE_US = [
  {
    title: "Top Rated",
    description: "4.9-star rating based on 487+ reviews."
  },
  {
    title: "Expert Barbers",
    description: "Skilled professionals with years of experience."
  },
  {
    title: "Great Atmosphere",
    description: "Friendly conversations, coffee, and good vibes."
  },
  {
    title: "Premium Products",
    description: "We use only the best products for your hair and skin."
  }
];