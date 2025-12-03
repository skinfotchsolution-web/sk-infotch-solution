import { 
  Monitor, 
  Code, 
  PenTool, 
  Printer, 
  Cpu, 
  Smartphone, 
  Globe,
  Palette
} from 'lucide-react';
import { ServiceItem, CompanyInfo } from './types';

export const COMPANY_INFO: CompanyInfo = {
  name: "Skinfotech Solution",
  address: "Indian Petrol Pump, Near Kanthalloor Road, Marayoor",
  phone: "+91 9746920498",
  whatsapp: "919746920498",
  email: "contact@skinfotech.com",
  mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3926.376999999999!2d77.15!3d10.25!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDE1JzAwLjAiTiA3N8KwMDknMDAuMCJF!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin"
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'web-dev',
    title: 'Website Development',
    description: 'Custom, responsive, and high-performance websites tailored to your business needs using the latest technologies.',
    icon: Globe,
    imageUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'software'
  },
  {
    id: 'graphic-design',
    title: 'Graphic Design',
    description: 'Creative visual solutions including brochures, banners, and social media posts to elevate your brand identity.',
    icon: Palette,
    imageUrl: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'software'
  },
  {
    id: 'logo-design',
    title: 'Logo Design',
    description: 'Unique and memorable logo designs that perfectly represent your brand\'s vision and values.',
    icon: PenTool,
    imageUrl: 'https://images.unsplash.com/photo-1626785774625-ddcddc3445e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'software'
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    description: 'Strategic marketing campaigns to boost your online presence, traffic, and sales growth.',
    icon: Smartphone,
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'software'
  },
  {
    id: 'hardware-sales',
    title: 'PC & Laptop Sales',
    description: 'Sales of high-quality desktops, laptops, and accessories suitable for personal and professional use.',
    icon: Monitor,
    imageUrl: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'hardware'
  },
  {
    id: 'printer-service',
    title: 'Printer Maintenance',
    description: 'Expert repair and maintenance services for all types of printers to keep your business running smoothly.',
    icon: Printer,
    imageUrl: 'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'hardware'
  },
  {
    id: 'hardware-repair',
    title: 'Hardware Service',
    description: 'Comprehensive chip-level repair and servicing for motherboards, laptops, and desktop computers.',
    icon: Cpu,
    imageUrl: 'https://images.unsplash.com/photo-1597872252721-24b26e3a96f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'hardware'
  },
  {
    id: 'software-install',
    title: 'Software Installation',
    description: 'OS installation, antivirus setup, and productivity software configuration for your systems.',
    icon: Code,
    imageUrl: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'software'
  }
];