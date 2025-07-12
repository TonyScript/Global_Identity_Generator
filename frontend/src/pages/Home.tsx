import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const { t } = useTranslation();

  const features = [
    {
      title: t('addressGenerator'),
      description: t('addressDescription'),
      icon: '📍',
      path: '/address',
      color: 'bg-blue-500',
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      title: t('phoneGenerator'),
      description: t('phoneDescription'),
      icon: '📱',
      path: '/phone',
      color: 'bg-green-500',
      gradient: 'from-green-500 to-green-600'
    },
    {
      title: t('creditCardGenerator'),
      description: t('creditCardDescription'),
      icon: '💳',
      path: '/credit-card',
      color: 'bg-purple-500',
      gradient: 'from-purple-500 to-purple-600'
    }
  ];

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-start bg-transparent">
      {/* Hero Section */}
      <div className="text-center mb-16 px-4 md:px-0">
        <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 mb-6 font-sans drop-shadow-lg">
          {t('welcome')}
        </h1>
        <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed font-medium">
          {t('description')}
        </p>
        <div className="flex justify-center space-x-6">
          <Link
            to="/address"
            className="bg-gradient-to-r from-orange-400 to-orange-600 shadow-lg hover:shadow-2xl text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105 focus:ring-4 focus:ring-orange-400/40 backdrop-blur-lg"
          >
            {t('generateAddress')}
          </Link>
          <Link
            to="/phone"
            className="bg-gradient-to-r from-orange-400 to-orange-600 shadow-lg hover:shadow-2xl text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105 focus:ring-4 focus:ring-orange-400/40 backdrop-blur-lg"
          >
            {t('generatePhone')}
          </Link>
          <Link
            to="/credit-card"
            className="bg-gradient-to-r from-orange-400 to-orange-600 shadow-lg hover:shadow-2xl text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105 focus:ring-4 focus:ring-orange-400/40 backdrop-blur-lg"
          >
            {t('generateCreditCard')}
          </Link>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-3 gap-8 mb-16 px-4 md:px-0 w-full max-w-7xl">
        {features.map((feature, index) => (
          <Link
            key={index}
            to={feature.path}
            className="group block"
          >
            <div className="bg-white/30 backdrop-blur-lg rounded-3xl shadow-xl border border-white/30 p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 hover:ring-2 hover:ring-orange-400/40">
              <div className={`w-16 h-16 ${feature.color} bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl flex items-center justify-center text-white text-3xl mb-6 group-hover:scale-110 transition-transform duration-200 shadow-lg`}>
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-orange-500 transition-colors font-sans">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed font-medium">
                {feature.description}
              </p>
            </div>
          </Link>
        ))}
      </div>

      {/* Info Section */}
      <div className="bg-white/40 backdrop-blur-lg rounded-3xl shadow-xl border border-white/30 p-4 md:p-10 mx-0 md:mx-auto w-full max-w-5xl">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center font-sans">
          {t('selectGenerator')}
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-100 to-orange-300 rounded-lg flex items-center justify-center">
                <span className="text-2xl">📍</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 font-sans">
                  {t('addressGenerator')}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed font-medium">
                  {t('addressDescription')}
                </p>
                <Link
                  to="/address"
                  className="inline-flex items-center text-orange-500 hover:text-orange-600 font-semibold text-lg transition-colors"
                >
                  {t('generateAddress')} →
                </Link>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-100 to-orange-300 rounded-lg flex items-center justify-center">
                <span className="text-2xl">📱</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 font-sans">
                  {t('phoneGenerator')}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed font-medium">
                  {t('phoneDescription')}
                </p>
                <Link
                  to="/phone"
                  className="inline-flex items-center text-orange-500 hover:text-orange-600 font-semibold text-lg transition-colors"
                >
                  {t('generatePhone')} →
                </Link>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-100 to-orange-300 rounded-lg flex items-center justify-center">
                <span className="text-2xl">💳</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 font-sans">
                  {t('creditCardGenerator')}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed font-medium">
                  {t('creditCardDescription')}
                </p>
                <Link
                  to="/credit-card"
                  className="inline-flex items-center text-orange-500 hover:text-orange-600 font-semibold text-lg transition-colors"
                >
                  {t('generateCreditCard')} →
                </Link>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-100 to-orange-300 rounded-lg flex items-center justify-center">
                <span className="text-2xl">🌍</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 font-sans">
                  {t('language')}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed font-medium">
                  {t('languageDescription')}
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