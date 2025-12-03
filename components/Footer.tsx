import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Laptop } from 'lucide-react';
import { COMPANY_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Brand Info */}
          <div>
            <div className="flex items-center gap-2 mb-4 text-white">
              <Laptop className="h-6 w-6" />
              <span className="font-bold text-xl">{COMPANY_INFO.name}</span>
            </div>
            <p className="text-sm text-slate-400 mb-4">
              Providing top-notch IT solutions, hardware sales, and digital services to empower your business.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-blue-400 transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-blue-400 transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-blue-400 transition-colors">Services</Link></li>
              <li><Link to="/contact" className="hover:text-blue-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-blue-400 cursor-pointer">Web Development</li>
              <li className="hover:text-blue-400 cursor-pointer">Graphic Design</li>
              <li className="hover:text-blue-400 cursor-pointer">Hardware Sales</li>
              <li className="hover:text-blue-400 cursor-pointer">Printer Service</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Info</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-blue-500 shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-blue-500 shrink-0" />
                <a href={`tel:${COMPANY_INFO.phone}`} className="hover:text-blue-400">{COMPANY_INFO.phone}</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-blue-500 shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-blue-400">{COMPANY_INFO.email}</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.</p>
          <div className="flex items-center gap-4 mt-2 md:mt-0">
             <Link to="/admin" className="hover:text-slate-400 transition-colors">Admin Login</Link>
             <span className="text-slate-700">|</span>
             <p className="flex items-center gap-1">
              Developed by <span className="text-blue-400 font-medium">Sarathkumar</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;