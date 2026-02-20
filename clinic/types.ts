import React from 'react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  service: string;
  quote: string;
  image: string;
}