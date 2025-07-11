import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import './App.css';

// 页面组件
import Home from './pages/Home';
import AddressGenerator from './pages/AddressGenerator';
import PhoneGenerator from './pages/PhoneGenerator';
import CreditCardGenerator from './pages/CreditCardGenerator';

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
          success: '生成成功'
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
          success: 'Generated successfully'
        }
      }
    },
    lng: 'zh',
    fallbackLng: 'zh',
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
    <nav className="bg-white shadow-lg border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-gray-900">
                {t('siteTitle')}
              </h1>
            </div>
          </div>

          {/* 导航链接 */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              <Link
                to="/"
                className="text-gray-700 hover:text-blue-600 px-4 py-2 rounded-lg text-base font-medium transition-colors"
              >
                {t('home')}
              </Link>
              <Link
                to="/address"
                className="text-gray-700 hover:text-blue-600 px-4 py-2 rounded-lg text-base font-medium transition-colors"
              >
                {t('addressGenerator')}
              </Link>
              <Link
                to="/phone"
                className="text-gray-700 hover:text-blue-600 px-4 py-2 rounded-lg text-base font-medium transition-colors"
              >
                {t('phoneGenerator')}
              </Link>
              <Link
                to="/credit-card"
                className="text-gray-700 hover:text-blue-600 px-4 py-2 rounded-lg text-base font-medium transition-colors"
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
                className="flex items-center text-gray-700 hover:text-blue-600 px-4 py-2 rounded-lg text-base font-medium transition-colors border-2 border-blue-500"
              >
                {/* 只显示当前语言和国旗 */}
                <span>{currentLang.label}</span>
                <span className="text-lg ml-2">{currentLang.flag}</span>
              </button>
              {showLanguageMenu && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-10 border border-gray-200">
                  {languageOptions.map(opt => (
                    <button
                      key={opt.code}
                      onClick={() => handleLanguageChange(opt.code)}
                      disabled={i18n.language === opt.code}
                      className={`block w-full text-left px-4 py-3 text-base transition-colors rounded-lg ${i18n.language === opt.code ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'text-gray-700 hover:bg-gray-100'}`}
                    >
                      {opt.label} <span className="ml-2">{opt.flag}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

// 主布局组件
const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="w-full px-4 sm:px-8 lg:px-16 py-12">
        {children}
      </main>
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
