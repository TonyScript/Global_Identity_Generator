import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const { t } = useTranslation();

  const features = [
    {
      title: t('addressGenerator'),
      description: 'Generate realistic addresses for different countries and regions',
      icon: '📍',
      path: '/address',
      color: 'bg-blue-500',
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      title: t('phoneGenerator'),
      description: 'Generate phone numbers with proper country codes and formats',
      icon: '📱',
      path: '/phone',
      color: 'bg-green-500',
      gradient: 'from-green-500 to-green-600'
    },
    {
      title: t('creditCardGenerator'),
      description: 'Generate credit card information with Luhn algorithm validation',
      icon: '💳',
      path: '/credit-card',
      color: 'bg-purple-500',
      gradient: 'from-purple-500 to-purple-600'
    }
  ];

  return (
    <div className="w-full min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="text-center mb-16 px-4 md:px-0">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          {t('welcome')}
        </h1>
        <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
          {t('description')}
        </p>
        <div className="flex justify-center space-x-6">
          <Link
            to="/address"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            {t('generateAddress')}
          </Link>
          <Link
            to="/phone"
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            {t('generatePhone')}
          </Link>
          <Link
            to="/credit-card"
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            {t('generateCreditCard')}
          </Link>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-3 gap-8 mb-16 px-4 md:px-0">
        {features.map((feature, index) => (
          <Link
            key={index}
            to={feature.path}
            className="group block"
          >
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className={`w-16 h-16 ${feature.color} rounded-xl flex items-center justify-center text-white text-3xl mb-6 group-hover:scale-110 transition-transform duration-200`}>
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                {feature.description}
              </p>
            </div>
          </Link>
        ))}
      </div>

      {/* Info Section */}
      <div className="bg-white rounded-xl shadow-lg p-4 md:p-10 mx-0 md:mx-auto w-full">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          {t('selectGenerator')}
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl">📍</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {t('addressGenerator')}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Generate realistic addresses for different countries and regions. 
                  All addresses are formatted according to local standards.
                </p>
                <Link
                  to="/address"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold text-lg"
                >
                  {t('generateAddress')} →
                </Link>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl">📱</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {t('phoneGenerator')}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Generate phone numbers with proper country codes and formatting. 
                  Numbers follow international standards for each country.
                </p>
                <Link
                  to="/phone"
                  className="inline-flex items-center text-green-600 hover:text-green-700 font-semibold text-lg"
                >
                  {t('generatePhone')} →
                </Link>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl">💳</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {t('creditCardGenerator')}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Generate credit card information with Luhn algorithm validation. 
                  Cards include proper card types for each country.
                </p>
                <Link
                  to="/credit-card"
                  className="inline-flex items-center text-purple-600 hover:text-purple-700 font-semibold text-lg"
                >
                  {t('generateCreditCard')} →
                </Link>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl">🌍</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {t('language')}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Switch between Chinese and English interfaces. 
                  All generated content adapts to your selected language.
                </p>
                <span className="inline-flex items-center text-gray-600 font-semibold text-lg">
                  {t('language')} 🇨🇳 🇺🇸
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home; 