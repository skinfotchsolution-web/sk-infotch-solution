import { LucideIcon } from 'lucide-react';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  imageUrl: string;
  category: 'software' | 'hardware';
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
}

export interface CompanyInfo {
  name: string;
  address: string;
  phone: string;
  email: string;
  whatsapp: string;
  mapUrl: string; // Placeholder for map embed link
}