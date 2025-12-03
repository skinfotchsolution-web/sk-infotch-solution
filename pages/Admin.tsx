import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import { ContactMessage } from '../types';
import { Trash2, RefreshCw, Lock, Search, Calendar, Phone, User, MessageSquare } from 'lucide-react';

const Admin: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Simple client-side auth for demo purposes
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'admin123') {
      setIsAuthenticated(true);
      fetchMessages();
    } else {
      setError('Invalid password');
    }
  };

  const fetchMessages = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('contact_messages')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setMessages(data || []);
    } catch (err: any) {
      console.error('Error fetching messages:', err);
      setError('Failed to load messages');
    } finally {
      setLoading(false);
    }
  };

  const deleteMessage = async (id: number) => {
    if (!window.confirm('Are you sure you want to delete this message?')) return;

    try {
      const { error } = await supabase
        .from('contact_messages')
        .delete()
        .eq('id', id);

      if (error) throw error;
      // Optimistic update
      setMessages(messages.filter(msg => msg.id !== id));
    } catch (err: any) {
      alert('Error deleting message');
      console.error(err);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-slate-100 flex items-center justify-center px-4">
        <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md w-full animate-fade-in-up">
          <div className="text-center mb-8">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600">
              <Lock className="h-8 w-8" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">Admin Login</h2>
            <p className="text-slate-500 mt-2">Enter your password to view inquiries.</p>
          </div>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                placeholder="Password"
                autoFocus
              />
            </div>
            {error && <p className="text-red-500 text-sm text-center">{error}</p>}
            <button
              type="submit"
              className="w-full bg-slate-900 text-white py-3 rounded-xl font-semibold hover:bg-slate-800 transition-colors shadow-lg"
            >
              Access Dashboard
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4 animate-fade-in-up">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Inquiry Dashboard</h1>
            <p className="text-slate-600 mt-1">Manage your customer messages from the website.</p>
          </div>
          <div className="flex gap-3">
            <button 
              onClick={fetchMessages} 
              className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-300 rounded-lg text-slate-700 hover:bg-slate-50 transition-colors shadow-sm"
            >
              <RefreshCw className={`h-4 w-4 ${loading ? 'animate-spin' : ''}`} />
              Refresh
            </button>
            <button 
              onClick={() => setIsAuthenticated(false)} 
              className="px-4 py-2 bg-slate-800 text-white rounded-lg hover:bg-slate-900 transition-colors shadow-sm"
            >
              Logout
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 animate-fade-in-up delay-100">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
            <p className="text-sm font-medium text-slate-500 uppercase">Total Messages</p>
            <p className="text-3xl font-bold text-blue-600 mt-2">{messages.length}</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
            <p className="text-sm font-medium text-slate-500 uppercase">Latest Inquiry</p>
            <p className="text-lg font-bold text-slate-900 mt-2 truncate">
              {messages.length > 0 ? messages[0].full_name : 'No messages'}
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
            <p className="text-sm font-medium text-slate-500 uppercase">Services Requested</p>
             <p className="text-lg font-bold text-green-600 mt-2">
              {new Set(messages.map(m => m.service_type)).size} Types
            </p>
          </div>
        </div>

        {/* Messages List */}
        <div className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden animate-fade-in-up delay-200">
          {messages.length === 0 ? (
            <div className="p-12 text-center text-slate-500">
              <MessageSquare className="h-12 w-12 mx-auto text-slate-300 mb-4" />
              <p className="text-lg">No messages found yet.</p>
              <p className="text-sm">New inquiries will appear here.</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-100 text-xs uppercase text-slate-500 font-semibold tracking-wider">
                    <th className="px-6 py-4">Date</th>
                    <th className="px-6 py-4">Customer</th>
                    <th className="px-6 py-4">Contact</th>
                    <th className="px-6 py-4">Service</th>
                    <th className="px-6 py-4">Message</th>
                    <th className="px-6 py-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {messages.map((msg) => (
                    <tr key={msg.id} className="hover:bg-blue-50/30 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          {new Date(msg.created_at).toLocaleDateString()}
                        </div>
                        <div className="text-xs text-slate-400 mt-1 pl-6">
                           {new Date(msg.created_at).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center gap-2">
                          <div className="bg-blue-100 p-2 rounded-full text-blue-600">
                            <User className="h-4 w-4" />
                          </div>
                          <span className="font-semibold text-slate-900">{msg.full_name}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">
                        <div className="flex items-center gap-2">
                          <Phone className="h-4 w-4 text-green-500" />
                          <a href={`tel:${msg.phone_number}`} className="hover:text-blue-600">{msg.phone_number}</a>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium border ${
                          msg.service_type === 'web' ? 'bg-indigo-50 text-indigo-700 border-indigo-200' :
                          msg.service_type === 'graphic' ? 'bg-pink-50 text-pink-700 border-pink-200' :
                          msg.service_type === 'hardware' ? 'bg-orange-50 text-orange-700 border-orange-200' :
                          'bg-slate-100 text-slate-700 border-slate-200'
                        }`}>
                          {msg.service_type.charAt(0).toUpperCase() + msg.service_type.slice(1)}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="max-w-xs text-sm text-slate-600 line-clamp-2" title={msg.message}>
                          {msg.message}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button 
                          onClick={() => deleteMessage(msg.id)}
                          className="p-2 text-red-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                          title="Delete Message"
                        >
                          <Trash2 className="h-5 w-5" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Admin;