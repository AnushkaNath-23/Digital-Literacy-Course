import React, { useState } from 'react';
import { MessageSquare, Star, Send, CheckCircle, ThumbsUp, Heart, MessageCircle } from 'lucide-react';
import { useAccessibility } from '../context/AccessibilityContext.jsx';

const Feedback = () => {
  const { language } = useAccessibility();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    rating: 0,
    category: '',
    message: '',
    suggestions: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [hoveredRating, setHoveredRating] = useState(0);

  const getTranslation = (key) => {
    const translations = {
      yourFeedback: {
        en: 'Your Feedback',
        hi: 'आपका फीडबैक',
        bn: 'আপনার ফিডব্যাক'
      },
      feedbackDescription: {
        en: 'Your suggestions are very important to us. Please share your experience and tell us how we can improve.',
        hi: 'आपके सुझाव हमारे लिए बहुत महत्वपूर्ण हैं। कृपया अपना अनुभव साझा करें और हमें बताएं कि हम कैसे बेहतर कर सकते हैं।',
        bn: 'আপনার পরামর্শ আমাদের কাছে খুবই গুরুত্বপূর্ণ। দয়া করে আপনার অভিজ্ঞতা শেয়ার করুন এবং আমাদের বলুন কীভাবে আমরা উন্নতি করতে পারি।'
      },
      feedbackForm: {
        en: 'Feedback Form',
        hi: 'फीडबैक फॉर्म',
        bn: 'ফিডব্যাক ফর্ম'
      },
      yourName: {
        en: 'Your Name',
        hi: 'आपका नाम',
        bn: 'আপনার নাম'
      },
      enterName: {
        en: 'Enter your name',
        hi: 'अपना नाम लिखें',
        bn: 'আপনার নাম লিখুন'
      },
      emailOptional: {
        en: 'Email (Optional)',
        hi: 'ईमेल (वैकल्पिक)',
        bn: 'ইমেইল (ঐচ্ছিক)'
      },
      yourEmail: {
        en: 'Your email',
        hi: 'आपका ईमेल',
        bn: 'আপনার ইমেইল'
      },
      rateExperience: {
        en: 'Rate Your Experience',
        hi: 'रेटिंग दें',
        bn: 'আপনার অভিজ্ঞতা রেট করুন'
      },
      feedbackCategory: {
        en: 'Feedback Category',
        hi: 'फीडबैक की श्रेणी',
        bn: 'ফিডব্যাক বিভাগ'
      },
      selectCategory: {
        en: 'Select category',
        hi: 'श्रेणी चुनें',
        bn: 'বিভাগ নির্বাচন করুন'
      },
      yourMessage: {
        en: 'Your Message',
        hi: 'आपका संदेश',
        bn: 'আপনার বার্তা'
      },
      messageePlaceholder: {
        en: 'Tell us about your experience or any issues...',
        hi: 'अपना अनुभव या समस्या के बारे में বताएं...',
        bn: 'আপনার অভিজ্ঞতা বা কোনো সমস্যা সম্পর্কে বলুন...'
      },
      suggestionsOptional: {
        en: 'Suggestions (Optional)',
        hi: 'सुझाव (वैकल्पिक)',
        bn: 'পরামর্শ (ঐচ্ছিক)'
      },
      suggestionsPlaceholder: {
        en: 'Any suggestions for how we can improve?',
        hi: 'हमें कैसे बेহতর बनाने के लिए कोई सुझाव?',
        bn: 'আমরা কীভাবে উন্নতি করতে পারি সে বিষয়ে কোনো পরামর্শ?'
      },
      sendFeedback: {
        en: 'Send Feedback',
        hi: 'फीडबैक भेजें',
        bn: 'ফিডব্যাক পাঠান'
      },
      thankYou: {
        en: 'Thank You!',
        hi: 'धन्यवाद!',
        bn: 'ধন্যবাদ!'
      },
      thankYouMessage: {
        en: 'Your feedback is very important to us. We\'ll use it to make DigitalWise even better.',
        hi: 'आपका फीडबैक हमारे लिए बहুত महत্বপূর্ণ है। हम इसका उपयोग करके DigitalWise को और भी बेहतर बनाएंगे।',
        bn: 'আপনার ফিডব্যাক আমাদের কাছে খুবই গুরুত্বপূর্ণ। আমরা এটি ব্যবহার করে DigitalWise কে আরও ভাল করে তুলব।'
      },
      yourLove: {
        en: 'Your Love',
        hi: 'आपका प्यार',
        bn: 'আপনার ভালোবাসা'
      },
      ourMotivation: {
        en: 'Our Motivation',
        hi: 'हमारा उत्साह',
        bn: 'আমাদের অনুপ্রেরণা'
      },
      whatOthersSaying: {
        en: 'What Others Are Saying',
        hi: 'अन्य उपयोगकर्ताओं के अनुभव',
        bn: 'অন্যরা কী বলছেন'
      },
      contactDirectly: {
        en: 'Contact Us Directly',
        hi: 'सीधे संपर्क करें',
        bn: 'সরাসরি যোগাযোগ করুন'
      },
      instantHelp: {
        en: 'Get instant help from DigiBuddy chat',
        hi: 'DigiBuddy चैट से तुरंत मदद पाएं',
        bn: 'ডিজিবাডি চ্যাট থেকে তাৎক্ষণিক সাহায্য পান'
      },
      hereTOHelp: {
        en: 'We\'re here to solve every problem you have',
        hi: 'हम आपकी हर समस्या का समाधान करने के लिए यहां हैं',
        bn: 'আমরা আপনার প্রতিটি সমস্যার সমাধানের জন্য এখানে আছি'
      }
    };

    return translations[key]?.[language] || translations[key]?.en || key;
  };

  const categories = language === 'hi' ? [
    { value: 'general', label: 'सामान्य फीडबैक' },
    { value: 'tutorials', label: 'ट्यूটोरियल' },
    { value: 'digibuddy', label: 'DigiBuddy चैट' },
    { value: 'accessibility', label: 'पहुंच सुविधाएं' },
    { value: 'technical', label: 'तकनीकी समस्या' }
  ] : language === 'bn' ? [
    { value: 'general', label: 'সাধারণ ফিডব্যাক' },
    { value: 'tutorials', label: 'টিউটোরিয়াল' },
    { value: 'digibuddy', label: 'ডিজিবাডি চ্যাট' },
    { value: 'accessibility', label: 'অ্যাক্সেসিবিলিটি বৈশিষ্ট্য' },
    { value: 'technical', label: 'প্রযুক্তিগত সমস্যা' }
  ] : [
    { value: 'general', label: 'General Feedback' },
    { value: 'tutorials', label: 'Tutorials' },
    { value: 'digibuddy', label: 'DigiBuddy Chat' },
    { value: 'accessibility', label: 'Accessibility Features' },
    { value: 'technical', label: 'Technical Issue' }
  ];

  const testimonials = [
    {
      name: language === 'hi' ? 'सुनीता देवी' : language === 'bn' ? 'সুনীতা দেবী' : 'Sunita Devi',
      age: 58,
      text: language === 'hi' 
        ? 'DigitalWise की बदौलत मैंने व्हाट्सऐप सीखा और अब अपने बच्चों से रोज़ बात करती हूं। बहुत आसान तरीके से सिखाया गया है।'
        : language === 'bn'
        ? 'DigitalWise এর কারণে আমি হোয়াটসঅ্যাপ শিখেছি এবং এখন আমার বাচ্চাদের সাথে প্রতিদিন কথা বলি। খুব সহজ উপায়ে শেখানো হয়েছে।'
        : 'Thanks to DigitalWise, I learned WhatsApp and now talk to my children daily. It\'s explained in such a simple way.',
      rating: 5
    },
    {
      name: language === 'hi' ? 'राजेश कुमार' : language === 'bn' ? 'রাজেশ কুমার' : 'Rajesh Kumar',
      age: 62,
      text: language === 'hi'
        ? 'पेटीएम से पेमेंट करना सीखने के बाद अब मुझे बैंक जाने की जरूरत नहीं। DigiBuddy बहुत helpful है।'
        : language === 'bn'
        ? 'পেটিএম দিয়ে পেমেন্ট করা শেখার পর এখন আমার ব্যাংকে যাওয়ার প্রয়োজন নেই। ডিজিবাডি খুব সহায়ক।'
        : 'After learning Paytm payments, I don\'t need to go to the bank anymore. DigiBuddy is very helpful.',
      rating: 5
    },
    {
      name: language === 'hi' ? 'मीरा शर्मा' : language === 'bn' ? 'মীরা শর্মা' : 'Meera Sharma',
      age: 45,
      text: language === 'hi'
        ? 'बच्चों को पढ़ाने के लिए गूगल मैप्स सीखना था। यहां के tutorials से बहुत जल्दी सीख गई।'
        : language === 'bn'
        ? 'বাচ্চাদের পড়ানোর জন্য গুগল ম্যাপস শিখতে হয়েছিল। এখানকার টিউটোরিয়াল থেকে খুব তাড়াতাড়ি শিখে গেছি।'
        : 'I needed to learn Google Maps for teaching my children. I learned very quickly with these tutorials.',
      rating: 4
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleRatingClick = (rating) => {
    setFormData(prev => ({
      ...prev,
      rating
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the feedback to your backend
    console.log('Feedback submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        rating: 0,
        category: '',
        message: '',
        suggestions: ''
      });
    }, 3000);
  };

  if (isSubmitted) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-green-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            {getTranslation('thankYou')}
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            {getTranslation('thankYouMessage')}
          </p>
          <div className="flex justify-center space-x-4">
            <div className="flex items-center bg-blue-50 px-4 py-2 rounded-full">
              <Heart className="w-5 h-5 text-red-500 mr-2" />
              <span className="text-blue-600 font-medium">
                {getTranslation('yourLove')}
              </span>
            </div>
            <div className="flex items-center bg-green-50 px-4 py-2 rounded-full">
              <ThumbsUp className="w-5 h-5 text-green-500 mr-2" />
              <span className="text-green-600 font-medium">
                {getTranslation('ourMotivation')}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <MessageSquare className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {getTranslation('yourFeedback')}
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          {getTranslation('feedbackDescription')}
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Feedback Form */}
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            {getTranslation('feedbackForm')}
          </h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {getTranslation('yourName')}
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder={getTranslation('enterName')}
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {getTranslation('emailOptional')}
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder={getTranslation('yourEmail')}
              />
            </div>

            {/* Rating */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {getTranslation('rateExperience')}
              </label>
              <div className="flex space-x-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => handleRatingClick(star)}
                    onMouseEnter={() => setHoveredRating(star)}
                    onMouseLeave={() => setHoveredRating(0)}
                    className="p-1 transition-transform hover:scale-110"
                  >
                    <Star
                      className={`w-8 h-8 ${
                        star <= (hoveredRating || formData.rating)
                          ? 'text-yellow-400 fill-current'
                          : 'text-gray-300'
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Category */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {getTranslation('feedbackCategory')}
              </label>
              <select
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              >
                <option value="">
                  {getTranslation('selectCategory')}
                </option>
                {categories.map(category => (
                  <option key={category.value} value={category.value}>
                    {category.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {getTranslation('yourMessage')}
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                placeholder={getTranslation('messageePlaceholder')}
                required
              />
            </div>

            {/* Suggestions */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {getTranslation('suggestionsOptional')}
              </label>
              <textarea
                name="suggestions"
                value={formData.suggestions}
                onChange={handleInputChange}
                rows={3}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                placeholder={getTranslation('suggestionsPlaceholder')}
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-all duration-200 flex items-center justify-center"
            >
              <Send className="w-5 h-5 mr-2" />
              {getTranslation('sendFeedback')}
            </button>
          </form>
        </div>

        {/* Testimonials */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            {getTranslation('whatOthersSaying')}
          </h2>
          
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-600 font-semibold text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                      <p className="text-sm text-gray-500">
                        {language === 'hi' ? `उम्र: ${testimonial.age}` : language === 'bn' ? `বয়স: ${testimonial.age}` : `Age: ${testimonial.age}`}
                      </p>
                    </div>
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-700 italic">"{testimonial.text}"</p>
                </div>
              </div>
            </div>
          ))}

          {/* Contact Info */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-6 text-white">
            <h3 className="text-xl font-semibold mb-3">
              {getTranslation('contactDirectly')}
            </h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <MessageCircle className="w-5 h-5 mr-3" />
                <span>
                  {getTranslation('instantHelp')}
                </span>
              </div>
              <div className="flex items-center">
                <Heart className="w-5 h-5 mr-3" />
                <span>
                  {getTranslation('hereTOHelp')}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;