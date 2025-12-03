import React from 'react';
import { COMPANY_INFO } from '../constants';
import { Target, Heart, Award, Code2 } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-4">About Us</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Your trusted partner in Marayoor for comprehensive digital and hardware solutions.
          </p>
        </div>

        {/* Story Section */}
        <div className="bg-white rounded-3xl shadow-lg overflow-hidden mb-16 animate-fade-in-up delay-100">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 lg:p-16 flex flex-col justify-center">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Who We Are</h2>
              <div className="space-y-4 text-slate-600 leading-relaxed text-lg">
                <p>
                  <span className="font-semibold text-slate-900">{COMPANY_INFO.name}</span> was established with a vision to bridge the gap between complex technology and everyday business needs. 
                </p>
                <p>
                   Located near Indian Petrol Pump, Kanthalloor Road, Marayoor, we have grown to become a hub for reliable IT services.
                </p>
                <p>
                  From fixing a slow laptop to building a corporate brand identity from scratch, we handle it all with precision and passion. Our team is dedicated to delivering quality that speaks for itself.
                </p>
              </div>
            </div>
            <div className="h-80 lg:h-auto relative">
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Modern Office" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-blue-900/10 mix-blend-multiply"></div>
            </div>
          </div>
        </div>

        {/* Mission / Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg transition-shadow animate-fade-in-up delay-200">
            <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 text-blue-600">
              <Target className="h-7 w-7" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Our Mission</h3>
            <p className="text-slate-600">To provide accessible, affordable, and high-quality technological solutions to businesses and individuals in our community.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg transition-shadow animate-fade-in-up delay-300">
            <div className="w-14 h-14 bg-red-100 rounded-2xl flex items-center justify-center mb-6 text-red-600">
              <Heart className="h-7 w-7" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Customer First</h3>
            <p className="text-slate-600">We believe in building long-term relationships. Your satisfaction is our top priority, and we go the extra mile to ensure it.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg transition-shadow animate-fade-in-up delay-300">
            <div className="w-14 h-14 bg-purple-100 rounded-2xl flex items-center justify-center mb-6 text-purple-600">
              <Award className="h-7 w-7" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Excellence</h3>
            <p className="text-slate-600">We stay updated with the latest trends in design and hardware technology to offer you the best modern solutions.</p>
          </div>
        </div>

        {/* Developer Credit Section */}
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl shadow-xl p-8 lg:p-12 text-center animate-fade-in-up delay-300 relative overflow-hidden">
           <div className="absolute top-0 right-0 p-12 opacity-5">
             <Code2 size={200} textAnchor="white" />
           </div>
          <h2 className="text-2xl font-bold text-white mb-8 relative z-10">Meet the Developer</h2>
          <div className="flex flex-col items-center relative z-10">
            <div className="w-24 h-24 bg-gradient-to-tr from-blue-500 to-cyan-400 rounded-full flex items-center justify-center text-white text-3xl font-bold mb-4 shadow-lg ring-4 ring-white/10">
              S
            </div>
            <h3 className="text-xl font-semibold text-white">Sarathkumar</h3>
            <p className="text-blue-200 mt-2 font-medium">Lead Developer & Technical Architect</p>
            <p className="text-slate-400 mt-4 max-w-lg mx-auto">
              Passionate about creating clean, modern, and efficient web applications. Dedicated to helping Skinfotech Solution achieve its digital transformation goals.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;