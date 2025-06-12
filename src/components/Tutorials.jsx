import React, { useState } from 'react';
import { Play, Clock, Users, Star, Search, Filter, ChevronRight } from 'lucide-react';
import { useAccessibility } from '../context/AccessibilityContext.jsx';

const Tutorials = () => {
  const { language } = useAccessibility();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const getTranslation = (key) => {
    const translations = {
      digitalTutorials: {
        en: 'Digital Tutorials',
        hi: 'डिजिटल ट्यूटोरियल',
        bn: 'ডিজিটাল টিউটোরিয়াল'
      },
      tutorialsDescription: {
        en: 'Learn digital tools with step-by-step video guides designed for everyone',
        hi: 'चरण-दर-चरण वीडियो गाइड के साथ डिजिटल टूल्स सीखें',
        bn: 'সবার জন্য ডিজাইন করা ধাপে ধাপে ভিডিও গাইড দিয়ে ডিজিটাল টুলস শিখুন'
      },
      searchTutorials: {
        en: 'Search tutorials...',
        hi: 'ट्यूटोरियल खोजें...',
        bn: 'টিউটোরিয়াল খুঁজুন...'
      },
      all: {
        en: 'All',
        hi: 'सभी',
        bn: 'সব'
      },
      communication: {
        en: 'Communication',
        hi: 'संचार',
        bn: 'যোগাযোগ'
      },
      finance: {
        en: 'Finance',
        hi: 'वित्त',
        bn: 'অর্থ'
      },
      navigation: {
        en: 'Navigation',
        hi: 'नेवीगेशन',
        bn: 'নেভিগেশন'
      },
      shopping: {
        en: 'Shopping',
        hi: 'शॉपिंग',
        bn: 'কেনাকাটা'
      },
      entertainment: {
        en: 'Entertainment',
        hi: 'मनोरंजन',
        bn: 'বিনোদন'
      },
      beginner: {
        en: 'Beginner',
        hi: 'आसान',
        bn: 'শুরুর স্তর'
      },
      intermediate: {
        en: 'Intermediate',
        hi: 'मध्यम',
        bn: 'মধ্যম স্তর'
      },
      students: {
        en: 'students',
        hi: 'छात्र',
        bn: 'শিক্ষার্থী'
      },
      whatYouLearn: {
        en: 'What you\'ll learn:',
        hi: 'आप सीखेंगे:',
        bn: 'আপনি যা শিখবেন:'
      },
      startTutorial: {
        en: 'Start Tutorial',
        hi: 'ट्यूटोरियल शुरू करें',
        bn: 'টিউটোরিয়াল শুরু করুন'
      },
      noTutorialsFound: {
        en: 'No tutorials found',
        hi: 'कोई ट्यूटोरियल नहीं मिला',
        bn: 'কোনো টিউটোরিয়াল পাওয়া যায়নি'
      },
      adjustSearch: {
        en: 'Please try adjusting your search term or category',
        hi: 'कृपया अपना सर्च टर्म या कैटेगरी बदलें',
        bn: 'দয়া করে আপনার অনুসন্ধান শব্দ বা বিভাগ পরিবর্তন করুন'
      },
      stillQuestions: {
        en: 'Still have questions?',
        hi: 'अभी भी कोई सवाल है?',
        bn: 'এখনও কোনো প্রশ্ন আছে?'
      },
      askDigiBuddy: {
        en: 'Ask DigiBuddy - your personal AI assistant',
        hi: 'DigiBuddy से पूछें - आपका व्यक्तिगत AI सहायक',
        bn: 'ডিজিবাডিকে জিজ্ঞাসা করুন - আপনার ব্যক্তিগত AI সহায়ক'
      },
      chatWithDigiBuddy: {
        en: 'Chat with DigiBuddy',
        hi: 'DigiBuddy से चैट करें',
        bn: 'ডিজিবাডির সাথে চ্যাট করুন'
      }
    };

    return translations[key]?.[language] || translations[key]?.en || key;
  };

  const tutorials = [
    {
      id: 1,
      title: language === 'hi' ? 'व्हाट्सऐप बेसिक्स' : language === 'bn' ? 'হোয়াটসঅ্যাপ বেসিক্স' : 'WhatsApp Basics',
      description: language === 'hi' 
        ? 'मैसेज भेजना, फोटो शेयर करना और वीडियो कॉल करना सीखें'
        : language === 'bn'
        ? 'মেসেজ পাঠানো, ফটো শেয়ার করা এবং ভিডিও কল করা শিখুন'
        : 'Learn to send messages, share photos, and make video calls',
      category: 'communication',
      duration: '15 min',
      difficulty: getTranslation('beginner'),
      rating: 4.8,
      students: 2500,
      image: 'https://i.pinimg.com/736x/93/b2/65/93b265c795140247db600ac92e58746a.jpg',
      steps: language === 'hi' ? [
        'व्हाट्सऐप डाउनलोड करें',
        'अकाउंट सेटअप करें',
        'पहला मैसेज भेजें',
        'फोटो शेयर करें',
        'वीडियो कॉल करें'
      ] : language === 'bn' ? [
        'হোয়াটসঅ্যাপ ডাউনলোড করুন',
        'অ্যাকাউন্ট সেটআপ করুন',
        'প্রথম মেসেজ পাঠান',
        'ফটো শেয়ার করুন',
        'ভিডিও কল করুন'
      ] : [
        'Download WhatsApp',
        'Set up your account',
        'Send your first message',
        'Share photos',
        'Make video calls'
      ]
    },
    {
      id: 2,
      title: language === 'hi' ? 'पेटीएम पेमेंट' : language === 'bn' ? 'পেটিএম পেমেন্ট' : 'Paytm Payments',
      description: language === 'hi'
        ? 'डिजिटल पेमेंट करना और पैसे ट्रांसफर करना सीखें'
        : language === 'bn'
        ? 'ডিজিটাল পেমেন্ট করা এবং টাকা ট্রান্সফার করা শিখুন'
        : 'Learn to make digital payments and transfer money safely',
      category: 'finance',
      duration: '20 min',
      difficulty: getTranslation('intermediate'),
      rating: 4.9,
      students: 1800,
      image: 'https://images.pexels.com/photos/4386404/pexels-photo-4386404.jpeg?auto=compress&cs=tinysrgb&w=400',
      steps: language === 'hi' ? [
        'पेटीएम अकाउंट बनाएं',
        'बैंक अकाउंट लिंक करें',
        'KYC वेरिफिकेशन',
        'पहला पेमेंट करें',
        'पैसे ट्रांसफर करें'
      ] : language === 'bn' ? [
        'পেটিএম অ্যাকাউন্ট তৈরি করুন',
        'ব্যাংক অ্যাকাউন্ট লিংক করুন',
        'KYC যাচাইকরণ',
        'প্রথম পেমেন্ট করুন',
        'টাকা ট্রান্সফার করুন'
      ] : [
        'Create Paytm account',
        'Link bank account',
        'Complete KYC verification',
        'Make your first payment',
        'Transfer money'
      ]
    },
    {
      id: 3,
      title: language === 'hi' ? 'गूगल मैप्स नेवीगेशन' : language === 'bn' ? 'গুগল ম্যাপস নেভিগেশন' : 'Google Maps Navigation',
      description: language === 'hi'
        ? 'रास्ता खोजना और ट्रैफिक अपडेट देखना सीखें'
        : language === 'bn'
        ? 'পথ খোঁজা এবং ট্রাফিক আপডেট দেখা শিখুন'
        : 'Learn to find directions and check traffic updates',
      category: 'navigation',
      duration: '12 min',
      difficulty: getTranslation('beginner'),
      rating: 4.7,
      students: 3200,
      image: 'https://images.pexels.com/photos/1239162/pexels-photo-1239162.jpeg?auto=compress&cs=tinysrgb&w=400',
      steps: language === 'hi' ? [
        'गूगल मैप्स खोलें',
        'डेस्टिनेशन सर्च करें',
        'नेवीगेशन शुरू करें',
        'ट्रैफिक चेक करें',
        'ऑफलाइन मैप सेव करें'
      ] : language === 'bn' ? [
        'গুগল ম্যাপস খুলুন',
        'গন্তব্য অনুসন্ধান করুন',
        'নেভিগেশন শুরু করুন',
        'ট্রাফিক চেক করুন',
        'অফলাইন ম্যাপ সেভ করুন'
      ] : [
        'Open Google Maps',
        'Search for destination',
        'Start navigation',
        'Check traffic conditions',
        'Save offline maps'
      ]
    },
    {
      id: 4,
      title: language === 'hi' ? 'ऑनलाइन शॉपिंग' : language === 'bn' ? 'অনলাইন শপিং' : 'Online Shopping',
      description: language === 'hi'
        ? 'Amazon और Flipkart पर सुरक्षित शॉपिंग करना सीखें'
        : language === 'bn'
        ? 'Amazon এবং Flipkart এ নিরাপদ শপিং করা শিখুন'
        : 'Learn safe online shopping on Amazon and Flipkart',
      category: 'shopping',
      duration: '25 min',
      difficulty: getTranslation('intermediate'),
      rating: 4.6,
      students: 1500,
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=400',
      steps: language === 'hi' ? [
        'अकाउंट बनाएं',
        'प्रोडक्ट सर्च करें',
        'रिव्यू पढ़ें',
        'सुरक्षित पेमेंट करें',
        'ऑर्डर ट्रैक करें'
      ] : language === 'bn' ? [
        'অ্যাকাউন্ট তৈরি করুন',
        'পণ্য অনুসন্ধান করুন',
        'রিভিউ পড়ুন',
        'নিরাপদ পেমেন্ট করুন',
        'অর্ডার ট্র্যাক করুন'
      ] : [
        'Create account',
        'Search for products',
        'Read reviews',
        'Make secure payment',
        'Track your order'
      ]
    },
    {
      id: 5,
      title: language === 'hi' ? 'ईमेल बेसिक्स' : language === 'bn' ? 'ইমেইল বেসিক্স' : 'Email Basics',
      description: language === 'hi'
        ? 'Gmail अकाउंट बनाना और ईमेल भेजना सीखें'
        : language === 'bn'
        ? 'Gmail অ্যাকাউন্ট তৈরি করা এবং ইমেইল পাঠানো শিখুন'
        : 'Learn to create Gmail account and send emails',
      category: 'communication',
      duration: '18 min',
      difficulty: getTranslation('beginner'),
      rating: 4.8,
      students: 2100,
      image: 'https://images.pexels.com/photos/1591062/pexels-photo-1591062.jpeg?auto=compress&cs=tinysrgb&w=400',
      steps: language === 'hi' ? [
        'Gmail अकाउंट बनाएं',
        'इनबॉक्स समझें',
        'ईमेल लिखें और भेजें',
        'अटैचमेंट जोड़ें',
        'ईमेल ऑर्गनाइज़ करें'
      ] : language === 'bn' ? [
        'Gmail অ্যাকাউন্ট তৈরি করুন',
        'ইনবক্স বুঝুন',
        'ইমেইল লিখুন এবং পাঠান',
        'অ্যাটাচমেন্ট যোগ করুন',
        'ইমেইল সংগঠিত করুন'
      ] : [
        'Create Gmail account',
        'Understand inbox',
        'Compose and send email',
        'Add attachments',
        'Organize emails'
      ]
    },
    {
      id: 6,
      title: language === 'hi' ? 'YouTube वीडियो देखना' : language === 'bn' ? 'YouTube ভিডিও দেখা' : 'Watching YouTube Videos',
      description: language === 'hi'
        ? 'YouTube पर वीडियो खोजना और देखना सीखें'
        : language === 'bn'
        ? 'YouTube এ ভিডিও খোঁজা এবং দেখা শিখুন'
        : 'Learn to search and watch videos on YouTube',
      category: 'entertainment',
      duration: '10 min',
      difficulty: getTranslation('beginner'),
      rating: 4.9,
      students: 4000,
      image: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=400',
      steps: language === 'hi' ? [
        'YouTube खोलें',
        'वीडियो सर्च करें',
        'प्लेलिस्ट बनाएं',
        'चैनल सब्स्क्राइब करें',
        'सेटिंग्स एडजस्ट करें'
      ] : language === 'bn' ? [
        'YouTube খুলুন',
        'ভিডিও অনুসন্ধান করুন',
        'প্লেলিস্ট তৈরি করুন',
        'চ্যানেল সাবস্ক্রাইব করুন',
        'সেটিংস সামঞ্জস্য করুন'
      ] : [
        'Open YouTube',
        'Search for videos',
        'Create playlists',
        'Subscribe to channels',
        'Adjust settings'
      ]
    }
  ];

  const categories = [
    { id: 'all', name: getTranslation('all') },
    { id: 'communication', name: getTranslation('communication') },
    { id: 'finance', name: getTranslation('finance') },
    { id: 'navigation', name: getTranslation('navigation') },
    { id: 'shopping', name: getTranslation('shopping') },
    { id: 'entertainment', name: getTranslation('entertainment') }
  ];

  const filteredTutorials = tutorials.filter(tutorial => {
    const matchesSearch = tutorial.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tutorial.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || tutorial.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const TutorialCard = ({ tutorial }) => (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
      <div className="relative">
        <img 
          src={tutorial.image} 
          alt={tutorial.title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
          {tutorial.difficulty}
        </div>
        <div className="absolute bottom-4 right-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm flex items-center">
          <Clock className="w-4 h-4 mr-1" />
          {tutorial.duration}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{tutorial.title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{tutorial.description}</p>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <Star className="w-4 h-4 text-yellow-500 mr-1" />
            <span className="text-sm font-medium text-gray-700">{tutorial.rating}</span>
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <Users className="w-4 h-4 mr-1" />
            {tutorial.students.toLocaleString()} {getTranslation('students')}
          </div>
        </div>

        <div className="mb-4">
          <h4 className="text-sm font-medium text-gray-700 mb-2">
            {getTranslation('whatYouLearn')}
          </h4>
          <ul className="space-y-1">
            {tutorial.steps.slice(0, 3).map((step, index) => (
              <li key={index} className="text-sm text-gray-600 flex items-center">
                <ChevronRight className="w-3 h-3 mr-1 text-green-500" />
                {step}
              </li>
            ))}
          </ul>
        </div>

        <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center">
          <Play className="w-5 h-5 mr-2" />
          {getTranslation('startTutorial')}
        </button>
      </div>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {getTranslation('digitalTutorials')}
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          {getTranslation('tutorialsDescription')}
        </p>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder={getTranslation('searchTutorials')}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        
        <div className="relative">
          <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="pl-10 pr-8 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white min-w-[150px]"
          >
            {categories.map(category => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Tutorial Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredTutorials.map(tutorial => (
          <TutorialCard key={tutorial.id} tutorial={tutorial} />
        ))}
      </div>

      {/* No Results */}
      {filteredTutorials.length === 0 && (
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Search className="w-8 h-8 text-gray-400" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            {getTranslation('noTutorialsFound')}
          </h3>
          <p className="text-gray-600">
            {getTranslation('adjustSearch')}
          </p>
        </div>
      )}

      {/* Call to Action */}
      <div className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-center text-white">
        <h2 className="text-2xl font-bold mb-4">
          {getTranslation('stillQuestions')}
        </h2>
        <p className="text-lg mb-6 opacity-90">
          {getTranslation('askDigiBuddy')}
        </p>
        <a
          href="/chat"
          className="inline-flex items-center bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
        >
          {getTranslation('chatWithDigiBuddy')}
          <ChevronRight className="w-5 h-5 ml-2" />
        </a>
      </div>
    </div>
  );
};

export default Tutorials;