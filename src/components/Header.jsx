import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BookOpen, MessageCircle, Home, MessageSquare } from 'lucide-react';
import { useAccessibility } from '../context/AccessibilityContext.jsx';

const Header = () => {
  const location = useLocation();
  const { language } = useAccessibility();

  const getTranslation = (key) => {
    const translations = {
      digitalWise: {
        en: 'DigitalWise',
        hi: 'डिजिटलवाइज',
        bn: 'ডিজিটালওয়াইজ'
      },
      tagline: {
        en: 'Empowering Digital Literacy!',
        hi: 'डिजिटल साक्षरता सशक्त करना!',
        bn: 'ডিজিটাল সাক্ষরতা ক্ষমতায়ন!'
      },
      home: {
        en: 'Home',
        hi: 'होम',
        bn: 'হোম'
      },
      tutorials: {
        en: 'Tutorials',
        hi: 'ट्यूटोरियल',
        bn: 'টিউটোরিয়াল'
      },
      digiBuddy: {
        en: 'DigiBuddy',
        hi: 'डिजीबडी',
        bn: 'ডিজিবাডি'
      },
      feedback: {
        en: 'Feedback',
        hi: 'फीडबैक',
        bn: 'ফিডব্যাক'
      }
    };

    return translations[key]?.[language] || translations[key]?.en || key;
  };

  const navigation = [
    { 
      path: '/', 
      name: getTranslation('home'), 
      icon: Home 
    },
    { 
      path: '/tutorials', 
      name: getTranslation('tutorials'), 
      icon: BookOpen 
    },
    { 
      path: '/chat', 
      name: getTranslation('digiBuddy'), 
      icon: MessageCircle 
    },
    { 
      path: '/feedback', 
      name: getTranslation('feedback'), 
      icon: MessageSquare 
    },
  ];

  return (
    <header className="bg-white shadow-lg border-b-4 border-blue-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
              <BookOpen className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                {getTranslation('digitalWise')}
              </h1>
              <p className="text-sm text-blue-600 font-medium">
                {getTranslation('tagline')}
              </p>
            </div>
          </div>
          
          <nav className="hidden md:flex space-x-1">
            {navigation.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center space-x-2 px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* Mobile navigation */}
          <div className="md:hidden">
            <div className="flex space-x-1">
              {navigation.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`p-2 rounded-lg transition-all duration-200 ${
                      isActive
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-700 hover:bg-blue-50'
                    }`}
                  >
                    <Icon className="w-6 h-6" />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;