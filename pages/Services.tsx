import React, { useState } from 'react';
import { SERVICES } from '../constants';
import { COMPANY_INFO } from '../constants';

const Services: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'software' | 'hardware'>('all');

  const filteredServices = filter === 'all' 
    ? SERVICES 
    : SERVICES.filter(service => service.category === filter);

  return (
    <div className="min-h-screen bg-slate-50 py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12 animate-fade-in-up">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Our Services</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
            Expert technical solutions for all your digital and hardware needs.
          </p>

          {/* Filter Buttons */}
          <div className="flex justify-center gap-4 flex-wrap">
            <button 
              onClick={() => setFilter('all')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === 'all' 
                  ? 'bg-blue-600 text-white shadow-lg scale-105' 
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              All Services
            </button>
            <button 
              onClick={() => setFilter('software')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === 'software' 
                  ? 'bg-blue-600 text-white shadow-lg scale-105' 
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              Software & Design
            </button>
            <button 
              onClick={() => setFilter('hardware')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === 'hardware' 
                  ? 'bg-blue-600 text-white shadow-lg scale-105' 
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              Hardware & Repair
            </button>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service, index) => (
            <div 
              key={service.id} 
              className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-2xl transition-all duration-500 flex flex-col group animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="h-56 relative overflow-hidden">
                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/0 transition-all z-10"></div>
                <img 
                  src={service.imageUrl} 
                  alt={service.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 group-hover:rotate-1 group-hover:brightness-110 transition-all duration-700"
                />
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md p-2 rounded-lg shadow-sm z-20">
                  <service.icon className="h-6 w-6 text-blue-600" />
                </div>
              </div>
              
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">{service.title}</h3>
                <p className="text-slate-600 mb-6 flex-1 leading-relaxed">
                  {service.description}
                </p>
                
                <a 
                  href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hi, I am interested in ${service.title}`}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full mt-auto inline-flex items-center justify-center px-4 py-3 border border-blue-600 text-blue-600 font-bold rounded-xl hover:bg-blue-600 hover:text-white transition-all hover:shadow-lg"
                >
                  Enquire Now
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Services;