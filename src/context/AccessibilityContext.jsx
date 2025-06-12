import React, { createContext, useContext, useState } from 'react';

const AccessibilityContext = createContext();

export const AccessibilityProvider = ({ children }) => {
  const [fontSize, setFontSize] = useState('medium');
  const [language, setLanguage] = useState('en');
  const [highContrast, setHighContrast] = useState(false);
  const [voiceEnabled, setVoiceEnabled] = useState(false);

  const getFontSizeClass = () => {
    switch (fontSize) {
      case 'small': return 'text-sm';
      case 'medium': return 'text-base';
      case 'large': return 'text-lg';
      case 'xl': return 'text-xl';
      default: return 'text-base';
    }
  };

  return (
    <AccessibilityContext.Provider value={{
      fontSize,
      language,
      highContrast,
      voiceEnabled,
      setFontSize,
      setLanguage,
      setHighContrast,
      setVoiceEnabled
    }}>
      <div className={`${getFontSizeClass()} ${highContrast ? 'contrast-more' : ''}`}>
        {children}
      </div>
    </AccessibilityContext.Provider>
  );
};

export const useAccessibility = () => {
  const context = useContext(AccessibilityContext);
  if (context === undefined) {
    throw new Error('useAccessibility must be used within an AccessibilityProvider');
  }
  return context;
};