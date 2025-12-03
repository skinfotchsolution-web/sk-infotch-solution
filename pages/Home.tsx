import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Shield, Zap } from 'lucide-react';
import { SERVICES } from '../constants';

const Home: React.FC = () => {
  const featuredServices = SERVICES.slice(0, 4);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white py-24 lg:py-36 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
            alt="Digital Technology Background" 
            className="w-full h-full object-cover opacity-30 animate-fade-in"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-900/50"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl animate-fade-in-up">
            <h1 className="text-4xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
              Empowering Your Business with <span className="text-blue-400">Digital Solutions</span>
            </h1>
            <p className="text-lg text-slate-300 mb-8 leading-relaxed delay-100 animate-fade-in-up">
              Complete Digital Marketing, Web Development, and Hardware Solutions. From custom software to chip-level hardware repair, Skinfotech Solution is Marayoor's trusted tech partner.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 delay-200 animate-fade-in-up">
              <Link 
                to="/services" 
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-semibold rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-all hover:scale-105 shadow-lg shadow-blue-600/30"
              >
                Explore Services
              </Link>
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center px-8 py-3 border border-slate-500 text-base font-semibold rounded-md text-white bg-white/5 hover:bg-white/10 backdrop-blur-sm transition-all"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-fade-in-up delay-100">
              <Zap className="h-12 w-12 text-yellow-500 mb-6" />
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Fast Service</h3>
              <p className="text-slate-600 leading-relaxed">Quick turnaround times for PC repairs, graphic designs, and development projects to keep your business moving.</p>
            </div>
            <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-fade-in-up delay-200">
              <Shield className="h-12 w-12 text-blue-500 mb-6" />
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Reliable Quality</h3>
              <p className="text-slate-600 leading-relaxed">We use genuine parts for hardware repairs and follow industry best practices for secure software development.</p>
            </div>
            <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-fade-in-up delay-300">
              <CheckCircle className="h-12 w-12 text-green-500 mb-6" />
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Expert Support</h3>
              <p className="text-slate-600 leading-relaxed">Dedicated professional support team available on WhatsApp and Phone for all your technical queries.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services Preview */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Core Services</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              We offer a wide range of services tailored to meet the dynamic needs of modern businesses and individuals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredServices.map((service, index) => (
              <div 
                key={service.id} 
                className={`bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-xl transition-all duration-300 group animate-fade-in-up`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="h-48 overflow-hidden relative">
                  <div className="absolute inset-0 bg-blue-900/20 group-hover:bg-blue-900/0 transition-colors z-10"></div>
                  <img 
                    src={service.imageUrl} 
                    alt={service.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 group-hover:rotate-1 transition-all duration-700"
                  />
                </div>
                <div className="p-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 text-blue-600">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{service.title}</h3>
                  <p className="text-slate-600 text-sm mb-4 line-clamp-2">
                    {service.description}
                  </p>
                  <Link to="/services" className="text-blue-600 text-sm font-bold flex items-center gap-1 hover:gap-2 transition-all">
                    Learn more <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12 animate-fade-in-up delay-300">
            <Link 
              to="/services" 
              className="inline-flex items-center justify-center px-8 py-3 border border-blue-600 text-base font-medium rounded-full text-blue-600 bg-white hover:bg-blue-600 hover:text-white transition-all shadow-md"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
            <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
            </svg>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 animate-fade-in-up">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to upgrade your business?</h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Whether you need a new website, a professional logo, or computer maintenance, Skinfotech Solution is here to help you succeed.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-bold rounded-lg text-blue-700 bg-white hover:bg-blue-50 shadow-xl transition-transform hover:-translate-y-1"
          >
            Get in Touch Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;