import React, { useState, useEffect } from 'react';
import { Settings, Type, Volume2, Eye, Mic, MicOff } from 'lucide-react';
import { useAccessibility } from '../context/AccessibilityContext.jsx';

const AccessibilityControls = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const { 
    fontSize, 
    language, 
    highContrast, 
    voiceEnabled,
    setFontSize, 
    setLanguage, 
    setHighContrast, 
    setVoiceEnabled 
  } = useAccessibility();

  // Voice recognition setup
  useEffect(() => {
    if (voiceEnabled && 'webkitSpeechRecognition' in window) {
      const recognition = new window.webkitSpeechRecognition();
      recognition.continuous = true;
      recognition.interimResults = true;
      
      // Set language based on current selection
      if (language === 'hi') {
        recognition.lang = 'hi-IN';
      } else if (language === 'bn') {
        recognition.lang = 'bn-BD';
      } else {
        recognition.lang = 'en-US';
      }

      recognition.onstart = () => setIsListening(true);
      recognition.onend = () => setIsListening(false);
      
      recognition.onresult = (event) => {
        const transcript = event.results[event.results.length - 1][0].transcript.toLowerCase();
        
        // Voice commands in multiple languages
        if (transcript.includes('home') || transcript.includes('होम') || transcript.includes('হোম')) {
          window.location.href = '/';
        } else if (transcript.includes('tutorial') || transcript.includes('ट्यूटोरियल') || transcript.includes('টিউটোরিয়াল')) {
          window.location.href = '/tutorials';
        } else if (transcript.includes('chat') || transcript.includes('चैट') || transcript.includes('চ্যাট')) {
          window.location.href = '/chat';
        } else if (transcript.includes('feedback') || transcript.includes('फीडबैक') || transcript.includes('ফিডব্যাক')) {
          window.location.href = '/feedback';
        }
      };

      if (isListening) {
        recognition.start();
      }

      return () => recognition.stop();
    }
  }, [voiceEnabled, isListening, language]);

  const toggleVoiceRecognition = () => {
    setIsListening(!isListening);
  };

  const getTranslation = (key) => {
    const translations = {
      accessibilityControls: {
        en: 'Accessibility Controls',
        hi: 'पहुंच नियंत्रण',
        bn: 'অ্যাক্সেসিবিলিটি নিয়ন্ত্রণ'
      },
      fontSize: {
        en: 'Font Size',
        hi: 'फ़ॉन्ट साइज़',
        bn: 'ফন্ট সাইজ'
      },
      language: {
        en: 'Language',
        hi: 'भाषा',
        bn: 'ভাষা'
      },
      highContrast: {
        en: 'High Contrast',
        hi: 'उच्च कंट्रास्ट',
        bn: 'উচ্চ কনট্রাস্ট'
      },
      voiceCommands: {
        en: 'Voice Commands',
        hi: 'आवाज़ कमांड',
        bn: 'ভয়েস কমান্ড'
      },
      small: {
        en: 'Small',
        hi: 'छोटा',
        bn: 'ছোট'
      },
      medium: {
        en: 'Medium',
        hi: 'मध्यम',
        bn: 'মাঝারি'
      },
      large: {
        en: 'Large',
        hi: 'बड़ा',
        bn: 'বড়'
      },
      extraLarge: {
        en: 'Extra Large',
        hi: 'अतिरिक्त बड़ा',
        bn: 'অতিরিক্ত বড়'
      },
      stopListening: {
        en: 'Stop Listening',
        hi: 'सुनना बंद करें',
        bn: 'শোনা বন্ধ করুন'
      },
      startListening: {
        en: 'Start Listening',
        hi: 'सुनना शुरू करें',
        bn: 'শোনা শুরু করুন'
      }
    };

    return translations[key]?.[language] || translations[key]?.en || key;
  };

  return (
    <div className="fixed top-20 right-4 z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-200 transform hover:scale-105"
        aria-label="Accessibility Controls"
      >
        <Settings className="w-6 h-6" />
      </button>

      {isOpen && (
        <div className="absolute right-0 top-14 bg-white rounded-lg shadow-xl border p-4 w-72 animate-fadeIn">
          <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
            <Eye className="w-5 h-5 mr-2" />
            {getTranslation('accessibilityControls')}
          </h3>

          {/* Font Size Control */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Type className="w-4 h-4 inline mr-1" />
              {getTranslation('fontSize')}
            </label>
            <select
              value={fontSize}
              onChange={(e) => setFontSize(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="small">{getTranslation('small')}</option>
              <option value="medium">{getTranslation('medium')}</option>
              <option value="large">{getTranslation('large')}</option>
              <option value="xl">{getTranslation('extraLarge')}</option>
            </select>
          </div>

          {/* Language Control */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {getTranslation('language')}
            </label>
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="en">English</option>
              <option value="hi">हिंदी</option>
              <option value="bn">বাংলা</option>
            </select>
          </div>

          {/* High Contrast Toggle */}
          <div className="mb-4">
            <label className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={highContrast}
                onChange={(e) => setHighContrast(e.target.checked)}
                className="mr-2 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <span className="text-sm text-gray-700">
                {getTranslation('highContrast')}
              </span>
            </label>
          </div>

          {/* Voice Commands Toggle */}
          <div className="mb-4">
            <label className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={voiceEnabled}
                onChange={(e) => setVoiceEnabled(e.target.checked)}
                className="mr-2 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <span className="text-sm text-gray-700 flex items-center">
                <Volume2 className="w-4 h-4 mr-1" />
                {getTranslation('voiceCommands')}
              </span>
            </label>
          </div>

          {/* Voice Recognition Button */}
          {voiceEnabled && (
            <button
              onClick={toggleVoiceRecognition}
              className={`w-full flex items-center justify-center p-2 rounded-md transition-colors ${
                isListening 
                  ? 'bg-red-500 text-white hover:bg-red-600' 
                  : 'bg-green-500 text-white hover:bg-green-600'
              }`}
            >
              {isListening ? <MicOff className="w-4 h-4 mr-2" /> : <Mic className="w-4 h-4 mr-2" />}
              {isListening 
                ? getTranslation('stopListening')
                : getTranslation('startListening')
              }
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default AccessibilityControls;