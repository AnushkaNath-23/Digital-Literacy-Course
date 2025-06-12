import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, MessageCircle, Heart, Star, Users, Shield, Play, CheckCircle } from 'lucide-react';
import { useAccessibility } from '../context/AccessibilityContext.jsx';

const Home = () => {
  const { language } = useAccessibility();

  const getTranslation = (key) => {
    const translations = {
      welcomeTitle1: {
        en: 'Welcome to the',
        hi: 'डिजिटल दुनिया में',
        bn: 'ডিজিটাল জগতে'
      },
      welcomeTitle2: {
        en: 'Digital World',
        hi: 'आपका स्वागत है',
        bn: 'আপনাকে স্বাগতম'
      },
      heroDescription: {
        en: 'Learn digital tools with easy tutorials, AI assistance, and accessibility features designed just for you',
        hi: 'आसान ट्यूटोरियल, AI सहायता और पहुंच सुविधाओं के साथ डिजिटल टूल्स सीखें',
        bn: 'সহজ টিউটোরিয়াল, AI সহায়তা এবং অ্যাক্সেসিবিলিটি বৈশিষ্ট্যের সাথে ডিজিটাল টুলস শিখুন'
      },
      startLearning: {
        en: 'Start Learning',
        hi: 'ट्यूटोरियल शुरू करें',
        bn: 'শেখা শুরু করুন'
      },
      easyTutorials: {
        en: 'Easy Tutorials',
        hi: 'आसान ट्यूटोरियल',
        bn: 'সহজ টিউটোরিয়াল'
      },
      tutorialsDesc: {
        en: 'Step-by-step guides for apps like WhatsApp, Paytm, and Google Maps',
        hi: 'व्हाट्सऐप, पेटीएम और गूगल मैप्स जैसे ऐप्स के लिए चरण-दर-चरण गाइड',
        bn: 'হোয়াটসঅ্যাপ, পেটিএম এবং গুগল ম্যাপের মতো অ্যাপের জন্য ধাপে ধাপে গাইড'
      },
      digiBuddyChat: {
        en: 'DigiBuddy Chat',
        hi: 'डिजীबडी চ্যাট',
        bn: 'ডিজিবাডি চ্যাট'
      },
      digiBuddyDesc: {
        en: 'Your personal AI assistant for instant help and guidance',
        hi: 'आपका व्यक्तिगत AI सहायक तुरंत मदद और मार्गदर्शन के लिए',
        bn: 'তাৎক্ষণিক সাহায্য এবং নির্দেশনার জন্য আপনার ব্যক্তিগত AI সহায়ক'
      },
      userFriendly: {
        en: 'User-Friendly',
        hi: 'उपयोगकर्ता-मित्र',
        bn: 'ব্যবহারকারী-বান্ধব'
      },
      userFriendlyDesc: {
        en: 'Designed for all ages, especially parents and elderly users',
        hi: 'सभी उम्र के लिए डिज़ाइन किया गया, विशेष रूप से माता-पिता और बुजुर्गों के लिए',
        bn: 'সব বয়সের জন্য ডিজাইন করা, বিশেষ করে বাবা-মা এবং বয়স্ক ব্যবহারকারীদের জন্য'
      },
      ourImpact: {
        en: 'Our Impact',
        hi: 'हमारा प्रभाव',
        bn: 'আমাদের প্রভাব'
      },
      happyUsers: {
        en: 'Happy Users',
        hi: 'खुश उपयोगकर्ता',
        bn: 'খুশি ব্যবহারকারী'
      },
      tutorials: {
        en: 'Tutorials',
        hi: 'ट्यूटोरियल',
        bn: 'টিউটোরিয়াল'
      },
      rating: {
        en: 'Rating',
        hi: 'रेटिंग',
        bn: 'রেটিং'
      },
      safe: {
        en: 'Safe',
        hi: 'सुरक्षित',
        bn: 'নিরাপদ'
      },
      meetDigiBuddy: {
        en: 'Meet DigiBuddy Today',
        hi: 'आज ही DigiBuddy से मिलें',
        bn: 'আজই ডিজিবাডির সাথে দেখা করুন'
      },
      digiBuddyCtaDesc: {
        en: 'Your personal AI assistant ready to help you 24/7',
        hi: 'आपका व्यक्तिगत AI सहायक जो 24/7 आपकी मदद के लिए तैयार है',
        bn: 'আপনার ব্যক্তিগত AI সহায়ক যা ২৪/৭ আপনাকে সাহায্য করতে প্রস্তুত'
      },
      chatWithDigiBuddy: {
        en: 'Chat with DigiBuddy',
        hi: 'DigiBuddy से चैट करें',
        bn: 'ডিজিবাডির সাথে চ্যাট করুন'
      },
      simpleLanguage: {
        en: 'Explained in simple language',
        hi: 'सरल भाषा में समझाया गया',
        bn: 'সহজ ভাষায় ব্যাখ্যা করা'
      },
      withVideos: {
        en: 'With videos and pictures',
        hi: 'वीडियो और चित्रों के साथ',
        bn: 'ভিডিও এবং ছবি সহ'
      },
      aiSupport: {
        en: '24/7 AI support available',
        hi: '24/7 AI सहायता उपलब्ध',
        bn: '২৪/৭ AI সহায়তা উপলব্ধ'
      }
    };

    return translations[key]?.[language] || translations[key]?.en || key;
  };

  const features = [
    {
      icon: BookOpen,
      title: getTranslation('easyTutorials'),
      description: getTranslation('tutorialsDesc'),
      link: '/tutorials'
    },
    {
      icon: MessageCircle,
      title: getTranslation('digiBuddyChat'),
      description: getTranslation('digiBuddyDesc'),
      link: '/chat'
    },
    {
      icon: Heart,
      title: getTranslation('userFriendly'),
      description: getTranslation('userFriendlyDesc'),
      link: '/'
    }
  ];

  const stats = [
    { icon: Users, value: '10,000+', label: getTranslation('happyUsers') },
    { icon: BookOpen, value: '50+', label: getTranslation('tutorials') },
    { icon: Star, value: '4.9', label: getTranslation('rating') },
    { icon: Shield, value: '100%', label: getTranslation('safe') }
  ];

  const benefits = [
    { 
      text: getTranslation('simpleLanguage'),
      icon: CheckCircle
    },
    { 
      text: getTranslation('withVideos'),
      icon: Play
    },
    { 
      text: getTranslation('aiSupport'),
      icon: MessageCircle
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          {getTranslation('welcomeTitle1')}
          <span className="block text-blue-600 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            {getTranslation('welcomeTitle2')}
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
          {getTranslation('heroDescription')}
        </p>

        {/* Benefits List */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div key={index} className="flex items-center bg-white px-4 py-2 rounded-full shadow-md">
                <Icon className="w-5 h-5 text-green-500 mr-2" />
                <span className="text-gray-700 font-medium">{benefit.text}</span>
              </div>
            );
          })}
        </div>

        <Link
          to="/tutorials"
          className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
        >
          <BookOpen className="w-6 h-6 mr-2" />
          {getTranslation('startLearning')}
        </Link>
      </div>

      {/* Features Section */}
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <Link
              key={index}
              to={feature.link}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 hover:border-blue-200"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors">
                <Icon className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </Link>
          );
        })}
      </div>

      {/* Stats Section */}
      <div className="bg-white rounded-2xl p-8 shadow-lg mb-16 border border-gray-100">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
          {getTranslation('ourImpact')}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center group">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-blue-200 transition-colors">
                  <Icon className="w-6 h-6 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative z-10">
          <h2 className="text-3xl font-bold mb-4">
            {getTranslation('meetDigiBuddy')}
          </h2>
          <p className="text-xl mb-6 opacity-90">
            {getTranslation('digiBuddyCtaDesc')}
          </p>
          <Link
            to="/chat"
            className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-200 shadow-lg transform hover:scale-105"
          >
            <MessageCircle className="w-6 h-6 mr-2" />
            {getTranslation('chatWithDigiBuddy')}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;