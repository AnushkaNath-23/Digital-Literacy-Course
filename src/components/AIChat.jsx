import React, { useState, useRef, useEffect } from 'react';
import { Send, MessageCircle, Bot, User, Mic, MicOff, Volume2, RefreshCw } from 'lucide-react';
import { useAccessibility } from '../context/AccessibilityContext.jsx';

const AIChat = () => {
  const { language } = useAccessibility();
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const messagesEndRef = useRef(null);

  const getTranslation = (key) => {
    const translations = {
      chatWithDigiBuddy: {
        en: 'Chat with DigiBuddy',
        hi: 'DigiBuddy से चैट करें',
        bn: 'ডিজিবাডির সাথে চ্যাট করুন'
      },
      personalAssistant: {
        en: 'Your personal AI assistant for learning digital tools',
        hi: 'आपका व्यक्तिगत AI सहायक - डिजिटल टूल्स सीखने में मदद के लिए',
        bn: 'ডিজিটাল টুলস শেখার জন্য আপনার ব্যক্তিগত AI সহায়ক'
      },
      welcomeMessage: {
        en: 'Hello! I\'m DigiBuddy, your digital assistant. I can help you learn WhatsApp, Paytm, Google Maps, and other digital tools. Feel free to ask me anything!',
        hi: 'नमस्ते! मैं DigiBuddy हूं, आपका डिजिटल सहायक। मैं आपको व्हाट्सऐप, पेटीएम, गूगल मैप्स और अन्य डिजिटल टूल्स सीखने में मदद कर सकता हूं। आप मुझसे कुछ भी पूछ सकते हैं!',
        bn: 'হ্যালো! আমি ডিজিবাডি, আপনার ডিজিটাল সহায়ক। আমি আপনাকে হোয়াটসঅ্যাপ, পেটিএম, গুগল ম্যাপস এবং অন্যান্য ডিজিটাল টুলস শিখতে সাহায্য করতে পারি। আমাকে যেকোনো কিছু জিজ্ঞাসা করুন!'
      },
      clearChat: {
        en: 'Clear chat',
        hi: 'चैट क्लियर करें',
        bn: 'চ্যাট পরিষ্কার করুন'
      },
      chatCleared: {
        en: 'Chat cleared! I\'m ready to help you again. Ask me anything!',
        hi: 'चैट क्लियर हो गई! मैं फिर से आपकी मदद के लिए तैयार हूं। कुछ भी पूछें!',
        bn: 'চ্যাট পরিষ্কার হয়েছে! আমি আবার আপনাকে সাহায্য করতে প্রস্তুত। যেকোনো কিছু জিজ্ঞাসা করুন!'
      },
      quickQuestions: {
        en: 'Quick questions:',
        hi: 'जल्दी पूছें:',
        bn: 'দ্রুত প্রশ্ন:'
      },
      typeMessage: {
        en: 'Type your question here...',
        hi: 'अपना सवाल यहां लिखें...',
        bn: 'এখানে আপনার প্রশ্ন লিখুন...'
      },
      speakMessage: {
        en: 'Speak your message',
        hi: 'आवाज़ से बोलें',
        bn: 'আপনার বার্তা বলুন'
      },
      listen: {
        en: 'Listen',
        hi: 'सुनें',
        bn: 'শুনুন'
      },
      helpText: {
        en: 'DigiBuddy can answer your questions about WhatsApp, Paytm, Google Maps, and other digital tools.',
        hi: 'DigiBuddy व्हाट्सऐप, पेटीएम, गूगल मैप्स और अन्य डिजिटल टूल्स के बारे में आपके सवालों का जवाब दे सकता है।',
        bn: 'ডিজিবাডি হোয়াটসঅ্যাপ, পেটিএম, গুগল ম্যাপস এবং অন্যান্য ডিজিটাল টুলস সম্পর্কে আপনার প্রশ্নের উত্তর দিতে পারে।'
      },
      placeholderResponse: {
        en: 'I\'m still learning! Soon I\'ll be able to answer your questions better. For now, please check out our tutorials section.',
        hi: 'मैं अभी भी सीख রহা हूं! जल्द ही मैं आपके सवालों का बेहतर जवाब दे पाऊंगा। अभी के लिए, कृपया हमारे ट्यूटोरियल सेक्शन देखें।',
        bn: 'আমি এখনও শিখছি! শীঘ্রই আমি আপনার প্রশ্নের আরও ভাল উত্তর দিতে পারব। এখনকার জন্য, দয়া করে আমাদের টিউটোরিয়াল বিভাগ দেখুন।'
      },
      errorMessage: {
        en: 'Sorry, I\'m experiencing some technical difficulties. Please try again later.',
        hi: 'क्षमा करें, मुझे कुछ तकनीकी समस्या हो रही है। कृपया बाद में कोशिश करें।',
        bn: 'দুঃখিত, আমি কিছু প্রযুক্তিগত সমস্যার সম্মুখীন হচ্ছি। দয়া করে পরে আবার চেষ্টা করুন।'
      },
      sendError: {
        en: 'Sorry, something went wrong. Please try again.',
        hi: 'क्षमा करें, कुछ गलत हुआ है। कृপया दोबारा कोशिश करें।',
        bn: 'দুঃখিত, কিছু ভুল হয়েছে। দয়া করে আবার চেষ্টা করুন।'
      }
    };

    return translations[key]?.[language] || translations[key]?.en || key;
  };

  // Initialize with welcome message
  useEffect(() => {
    const welcomeMessage = {
      id: 1,
      text: getTranslation('welcomeMessage'),
      sender: 'bot',
      timestamp: new Date()
    };
    setMessages([welcomeMessage]);
  }, [language]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [messages]);


  const sendToDialogflow = async (userMessage) => {
    try {
      const DIALOGFLOW_CONFIG = {
        languageCode: language === 'hi' ? 'hi' : language === 'bn' ? 'bn' : 'en',
      };

      const response = await fetch('http://localhost:5000/api/dialogflow', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: userMessage,
          languageCode: DIALOGFLOW_CONFIG.languageCode,
        }),
      });

      const data = await response.json();
      return data.fulfillmentText || getTranslation('errorMessage');
    } catch (error) {
      console.error('Dialogflow API Error:', error);
      return getTranslation('errorMessage');
    }
  };


  const sendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage = {
      id: Date.now(),
      text: inputMessage,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    try {
      // Call Dialogflow API (or placeholder)
      const botResponseText = await sendToDialogflow(inputMessage);
      
      const botResponse = {
        id: Date.now() + 1,
        text: botResponseText,
        sender: 'bot',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botResponse]);

      // Text-to-speech for bot response
      if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(botResponseText);
        if (language === 'hi') {
          utterance.lang = 'hi-IN';
        } else if (language === 'bn') {
          utterance.lang = 'bn-BD';
        } else {
          utterance.lang = 'en-US';
        }
        utterance.rate = 0.8;
        speechSynthesis.speak(utterance);
      }
    } catch (error) {
      console.error('Error sending message:', error);
      
      const errorResponse = {
        id: Date.now() + 1,
        text: getTranslation('sendError'),
        sender: 'bot',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, errorResponse]);
    } finally {
      setIsLoading(false);
    }
  };

  const startVoiceRecognition = () => {
    if ('webkitSpeechRecognition' in window) {
      const recognition = new window.webkitSpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = false;
      
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
        const transcript = event.results[0][0].transcript;
        setInputMessage(transcript);
      };

      recognition.start();
    }
  };

  const speakMessage = (text) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      if (language === 'hi') {
        utterance.lang = 'hi-IN';
      } else if (language === 'bn') {
        utterance.lang = 'bn-BD';
      } else {
        utterance.lang = 'en-US';
      }
      utterance.rate = 0.8;
      speechSynthesis.speak(utterance);
    }
  };

  const clearChat = () => {
    const welcomeMessage = {
      id: 1,
      text: getTranslation('chatCleared'),
      sender: 'bot',
      timestamp: new Date()
    };
    setMessages([welcomeMessage]);
  };

  const quickQuestions = language === 'hi' ? [
    'व्हाट्सऐप कैसे इस्तेमाल करें?',
    'पेटीएम में पैसे कैसे भेजें?',
    'गूगल मैप्स में रास्ता कैसे खोजें?',
    'Gmail अकाउंट कैसे बनाएं?'
  ] : language === 'bn' ? [
    'হোয়াটসঅ্যাপ কীভাবে ব্যবহার করবেন?',
    'পেটিএমে কীভাবে টাকা পাঠাবেন?',
    'গুগল ম্যাপে কীভাবে দিকনির্দেশনা খুঁজবেন?',
    'জিমেইল অ্যাকাউন্ট কীভাবে তৈরি করবেন?'
  ] : [
    'How to use WhatsApp?',
    'How to send money on Paytm?',
    'How to find directions on Google Maps?',
    'How to create Gmail account?'
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <Bot className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          {getTranslation('chatWithDigiBuddy')}
        </h1>
        <p className="text-gray-600">
          {getTranslation('personalAssistant')}
        </p>
      </div>

      {/* Chat Container */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
        {/* Chat Header */}
        <div className="bg-blue-600 text-white p-4 flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3">
              <Bot className="w-5 h-5" />
            </div>
            <span className="font-semibold">DigiBuddy</span>
            <span className="ml-2 w-2 h-2 bg-green-400 rounded-full"></span>
          </div>
          <button
            onClick={clearChat}
            className="p-2 hover:bg-blue-700 rounded-lg transition-colors"
            title={getTranslation('clearChat')}
          >
            <RefreshCw className="w-5 h-5" />
          </button>
        </div>

        {/* Messages */}
        <div className="h-96 overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`flex items-start space-x-2 max-w-xs lg:max-w-md`}>
                {message.sender === 'bot' && (
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Bot className="w-5 h-5 text-blue-600" />
                  </div>
                )}
                <div
                  className={`px-4 py-2 rounded-2xl ${
                    message.sender === 'user'
                      ? 'bg-blue-600 text-white rounded-br-sm'
                      : 'bg-gray-100 text-gray-900 rounded-bl-sm'
                  }`}
                >
                  <p className="whitespace-pre-line">{message.text}</p>
                  {message.sender === 'bot' && (
                    <button
                      onClick={() => speakMessage(message.text)}
                      className="mt-2 text-xs opacity-70 hover:opacity-100 flex items-center"
                    >
                      <Volume2 className="w-3 h-3 mr-1" />
                      {getTranslation('listen')}
                    </button>
                  )}
                </div>
                {message.sender === 'user' && (
                  <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                    <User className="w-5 h-5 text-gray-600" />
                  </div>
                )}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <Bot className="w-5 h-5 text-blue-600" />
                </div>
                <div className="bg-gray-100 px-4 py-2 rounded-2xl rounded-bl-sm">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Quick Questions */}
        <div className="p-4 border-t border-gray-200">
          <p className="text-sm text-gray-600 mb-2">
            {getTranslation('quickQuestions')}
          </p>
          <div className="flex flex-wrap gap-2">
            {quickQuestions.map((question, index) => (
              <button
                key={index}
                onClick={() => setInputMessage(question)}
                className="text-xs bg-blue-50 text-blue-600 px-3 py-1 rounded-full hover:bg-blue-100 transition-colors"
              >
                {question}
              </button>
            ))}
          </div>
        </div>

        {/* Input */}
        <div className="p-4 border-t border-gray-200">
          <div className="flex space-x-2">
            <div className="flex-1 relative">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                placeholder={getTranslation('typeMessage')}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-12"
                disabled={isLoading}
              />
              <button
                onClick={startVoiceRecognition}
                className={`absolute right-3 top-1/2 transform -translate-y-1/2 p-1 rounded ${
                  isListening ? 'text-red-500' : 'text-gray-400 hover:text-blue-600'
                }`}
                title={getTranslation('speakMessage')}
              >
                {isListening ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
              </button>
            </div>
            <button
              onClick={sendMessage}
              disabled={!inputMessage.trim() || isLoading}
              className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Help Text */}
      <div className="mt-8 text-center text-gray-600">
        <p className="text-sm">
          {getTranslation('helpText')}
        </p>
      </div>
    </div>
  );
};

export default AIChat;