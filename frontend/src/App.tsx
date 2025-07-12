import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import './App.css';

// 页面组件
import Home from './pages/Home';
import AddressGenerator from './pages/AddressGenerator';
import PhoneGenerator from './pages/PhoneGenerator';
import CreditCardGenerator from './pages/CreditCardGenerator';
import Footer from './components/Footer';

// 国际化
import { useTranslation } from 'react-i18next';
import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';

// 初始化国际化
i18n
  .use(initReactI18next)
  .init({
    resources: {
      zh: {
        translation: {
          siteTitle: '全球身份生成器',
          home: '首页',
          addressGenerator: '地址生成器',
          phoneGenerator: '手机号生成器',
          creditCardGenerator: '信用卡生成器',
          language: '语言',
          zh: '中文',
          en: 'English',
          selectCountry: '选择国家/地区',
          generate: '生成',
          copy: '复制',
          copied: '已复制',
          generateAddress: '生成地址',
          generatePhone: '生成手机号',
          generateCreditCard: '生成信用卡',
          welcome: '欢迎使用地址、手机号与信用卡信息生成器',
          description: '支持多国家/地区，生成真实格式的地址、手机号和信用卡信息',
          selectGenerator: '选择生成器',
          feedback: '反馈',
          loading: '生成中...',
          error: '生成失败',
          success: '生成成功',
          addressGeneratorSubtitle: '选择国家/地区，生成符合当地格式的真实地址信息',
          phoneGeneratorSubtitle: '选择国家/地区，生成符合当地格式的手机号码',
          creditCardGeneratorSubtitle: '选择国家/地区，生成符合Luhn算法校验的信用卡信息',
          resultTitle: '生成结果',
          usageTitle: '使用说明',
          addressUsageDesc: '生成的地址仅用于测试和学习目的，不代表真实存在的地址。所有地址都符合当地格式规范。',
          phoneUsageDesc: '生成的手机号仅用于测试和学习目的，不代表真实存在的号码。所有号码都符合国际格式规范。',
          creditCardUsageDesc: '生成的信用卡信息仅用于测试和学习目的，不代表真实存在的卡片。所有卡号都通过了Luhn算法校验。',
          phoneEmptyTip: '点击生成按钮开始生成手机号',
          creditCardEmptyTip: '点击生成按钮开始生成信用卡信息',
          addressEmptyTip: '点击生成按钮开始生成地址',
          addressDescription: '生成不同国家和地区的真实格式地址，所有地址均符合当地标准。',
          phoneDescription: '生成带有正确国家区号和格式的手机号码，号码符合国际标准。',
          creditCardDescription: '生成符合Luhn算法校验的信用卡信息，卡片类型符合各国规范。',
          languageDescription: '可在中英文界面间切换，所有生成内容会根据所选语言自动适配。',
        }
      },
      en: {
        translation: {
          siteTitle: 'Global Identity Generator',
          home: 'Home',
          addressGenerator: 'Address Generator',
          phoneGenerator: 'Phone Generator',
          creditCardGenerator: 'Credit Card Generator',
          language: 'Language',
          zh: '中文',
          en: 'English',
          selectCountry: 'Select Country/Region',
          generate: 'Generate',
          copy: 'Copy',
          copied: 'Copied',
          generateAddress: 'Generate Address',
          generatePhone: 'Generate Phone Number',
          generateCreditCard: 'Generate Credit Card',
          welcome: 'Welcome to Address, Phone & Credit Card Generator',
          description: 'Support multiple countries/regions, generate real-format addresses, phone numbers and credit card information',
          selectGenerator: 'Select Generator',
          feedback: 'Feedback',
          loading: 'Generating...',
          error: 'Generation failed',
          success: 'Generated successfully',
          addressGeneratorSubtitle: 'Select country/region to generate a real address in local format',
          phoneGeneratorSubtitle: 'Select country/region to generate a phone number in local format',
          creditCardGeneratorSubtitle: 'Select country/region to generate a credit card with Luhn validation',
          resultTitle: 'Result',
          usageTitle: 'Usage',
          addressUsageDesc: 'The generated address is for testing and learning purposes only and does not represent a real address. All addresses conform to local format standards.',
          phoneUsageDesc: 'The generated phone number is for testing and learning purposes only and does not represent a real number. All numbers conform to international format standards.',
          creditCardUsageDesc: 'The generated credit card information is for testing and learning purposes only and does not represent a real card. All card numbers pass Luhn validation.',
          phoneEmptyTip: 'Click the generate button to start generating a phone number',
          creditCardEmptyTip: 'Click the generate button to start generating credit card information',
          addressEmptyTip: 'Click the generate button to start generating an address',
          addressDescription: 'Generate realistic addresses for different countries and regions. All addresses are formatted according to local standards.',
          phoneDescription: 'Generate phone numbers with proper country codes and formatting. Numbers follow international standards for each country.',
          creditCardDescription: 'Generate credit card information with Luhn algorithm validation. Cards include proper card types for each country.',
          languageDescription: 'Switch between Chinese and English interfaces. All generated content adapts to your selected language.',
        }
      }
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

// 导航栏组件
const Navbar: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);

  const languageOptions = [
    { code: 'zh', label: t('zh'), flag: '🇨🇳' },
    { code: 'en', label: t('en'), flag: '🇺🇸' }
  ];

  const handleLanguageChange = (code: string) => {
    if (i18n.language !== code) {
      i18n.changeLanguage(code);
    }
    setShowLanguageMenu(false);
  };

  const currentLang = languageOptions.find(opt => opt.code === i18n.language) || languageOptions[0];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/30 backdrop-blur-xl border-b border-orange-200/60 shadow-lg">
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 flex justify-between items-center h-20">
        {/* Logo/Brand */}
        <div className="flex items-center">
          <span className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent drop-shadow-lg select-none">
            Global Identity Generator
          </span>
        </div>
        {/* 导航链接 */}
        <div className="hidden md:block">
          <div className="flex items-center space-x-8">
            <Link
              to="/"
              className="text-gray-700 hover:text-orange-500 px-4 py-2 rounded-lg text-base font-medium transition-colors"
            >
              {t('home')}
            </Link>
            <Link
              to="/address"
              className="text-gray-700 hover:text-orange-500 px-4 py-2 rounded-lg text-base font-medium transition-colors"
            >
              {t('addressGenerator')}
            </Link>
            <Link
              to="/phone"
              className="text-gray-700 hover:text-orange-500 px-4 py-2 rounded-lg text-base font-medium transition-colors"
            >
              {t('phoneGenerator')}
            </Link>
            <Link
              to="/credit-card"
              className="text-gray-700 hover:text-orange-500 px-4 py-2 rounded-lg text-base font-medium transition-colors"
            >
              {t('creditCardGenerator')}
            </Link>
          </div>
        </div>
        {/* 语言切换 */}
        <div className="flex items-center">
          <div className="relative">
            <button
              onClick={() => setShowLanguageMenu(!showLanguageMenu)}
              className="flex items-center text-gray-700 hover:text-orange-500 px-4 py-2 rounded-lg text-base font-medium transition-colors border-2 border-orange-400/60 bg-white/40 backdrop-blur-md shadow"
            >
              <span>{currentLang.label}</span>
              <span className="text-lg ml-2">{currentLang.flag}</span>
            </button>
            {showLanguageMenu && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-10 border border-orange-200/60 backdrop-blur-md">
                {languageOptions.map(opt => (
                  <button
                    key={opt.code}
                    onClick={() => handleLanguageChange(opt.code)}
                    disabled={i18n.language === opt.code}
                    className={`block w-full text-left px-4 py-3 text-base transition-colors rounded-lg bg-white ${i18n.language === opt.code ? 'bg-orange-100 text-gray-400 cursor-not-allowed' : 'text-gray-700 hover:bg-orange-50'}`}
                  >
                    {opt.label} <span className="ml-2">{opt.flag}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

// 主布局组件
const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen bg-transparent pt-24">
      <Navbar />
      {/* SVG流光背景 */}
      <svg className="bg-glow" viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="glow1" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFB347" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#FF7A18" stopOpacity="0" />
          </radialGradient>
        </defs>
        <ellipse cx="300" cy="300" rx="280" ry="180" fill="url(#glow1)" />
        <ellipse cx="400" cy="200" rx="120" ry="80" fill="#FF9800" fillOpacity="0.12">
          <animate attributeName="rx" values="120;180;120" dur="6s" repeatCount="indefinite" />
        </ellipse>
      </svg>
      <main className="w-full px-0 py-6 flex flex-col items-center justify-start">
        {children}
      </main>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/address" element={<AddressGenerator />} />
          <Route path="/phone" element={<PhoneGenerator />} />
          <Route path="/credit-card" element={<CreditCardGenerator />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;