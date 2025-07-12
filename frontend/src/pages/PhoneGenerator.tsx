import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { COUNTRIES, generatePhoneNumber } from '../utils/generators';

const PhoneGenerator: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [selectedCountry, setSelectedCountry] = useState<string>('US');
  const [generatedPhone, setGeneratedPhone] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [copySuccess, setCopySuccess] = useState<boolean>(false);

  const countries = Object.entries(COUNTRIES[i18n.language as 'zh' | 'en']).map(([code, name]) => ({
    code,
    name: name as string
  }));

  const handleGenerate = () => {
    if (!selectedCountry) return;

    setIsLoading(true);
    try {
      // 模拟加载延迟
      setTimeout(() => {
        const phoneNumber = generatePhoneNumber(selectedCountry, i18n.language as 'zh' | 'en');
        setGeneratedPhone(phoneNumber);
        setIsLoading(false);
      }, 500);
    } catch (error) {
      console.error('Failed to generate phone number:', error);
      alert(t('error'));
      setIsLoading(false);
    }
  };

  const copyToClipboard = async () => {
    if (!generatedPhone) return;

    try {
      await navigator.clipboard.writeText(generatedPhone);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    } catch (error) {
      console.error('Failed to copy:', error);
    }
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-start bg-transparent">
      <div className="relative w-full max-w-4xl mx-auto mt-16 mb-12">
        <div className="absolute -inset-1 bg-gradient-to-br from-orange-200/60 via-white/0 to-orange-400/30 rounded-3xl blur-2xl opacity-80 animate-pulse z-0" />
        <div className="relative z-10 bg-white/60 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/40 p-8 md:p-14 flex flex-col md:flex-row gap-10 md:gap-16 items-stretch">
          {/* 左侧：操作区 */}
          <div className="flex-1 flex flex-col justify-center gap-8 min-w-[260px]">
            <div>
              <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 mb-4 font-sans drop-shadow-xl flex items-center gap-3">
                <span className="text-4xl md:text-5xl">📱</span> {t('phoneGenerator')}
              </h1>
              <p className="text-lg md:text-xl text-gray-700 font-medium mb-6">
                {t('phoneGeneratorSubtitle')}
              </p>
            </div>
            <div className="space-y-6">
              <div>
                <label className="block text-base md:text-lg font-semibold text-gray-800 mb-2 font-sans">
                  {t('selectCountry')}
                </label>
                <select
                  value={selectedCountry}
                  onChange={(e) => setSelectedCountry(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-orange-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400 text-base bg-white/70 backdrop-blur-md transition-all duration-300 text-gray-800"
                >
                  {countries.map((country) => (
                    <option key={country.code} value={country.code}>
                      {country.name}
                    </option>
                  ))}
                </select>
              </div>
              <button
                onClick={handleGenerate}
                disabled={!selectedCountry || isLoading}
                className="w-full bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 hover:from-orange-500 hover:to-orange-700 disabled:bg-gray-400 text-white font-bold py-4 px-6 rounded-2xl text-xl shadow-xl transition-all duration-300 hover:scale-105 focus:ring-4 focus:ring-orange-400/40 relative overflow-hidden group"
              >
                <span className="relative z-10">
                  {isLoading ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      {t('loading')}
                    </span>
                  ) : (
                    t('generatePhone')
                  )}
                </span>
                <span className="absolute left-0 top-0 w-full h-full bg-gradient-to-r from-white/30 via-orange-200/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 blur-lg" />
              </button>
            </div>
          </div>
          {/* 右侧：结果区 */}
          <div className="flex-1 flex flex-col justify-center gap-8 min-w-[260px]">
            <div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 font-sans flex items-center gap-2">
                <span className="text-orange-500">📦</span> {t('resultTitle')}
              </h3>
              {generatedPhone ? (
                <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 border border-orange-100 shadow-lg flex flex-col gap-4 animate-fade-in">
                  <p className="text-gray-800 text-lg font-mono break-all leading-relaxed select-all">
                    {generatedPhone}
                  </p>
                  <button
                    onClick={copyToClipboard}
                    className="w-full bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 hover:from-orange-500 hover:to-orange-700 text-white font-bold py-3 px-4 rounded-xl transition-all duration-200 shadow hover:shadow-lg focus:ring-4 focus:ring-orange-400/40"
                  >
                    {copySuccess ? t('copied') : t('copy')}
                  </button>
                </div>
              ) : (
                <div className="bg-white/60 backdrop-blur-md rounded-2xl p-6 border border-orange-100 text-center animate-fade-in">
                  <p className="text-gray-500 text-lg">
                    {t('phoneEmptyTip')}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* 底部说明区 */}
      <div className="w-full max-w-4xl mx-auto mt-2">
        <div className="flex items-center gap-3 p-4 bg-white/70 backdrop-blur-lg rounded-xl border-l-4 border-orange-400 shadow-md">
          <span className="text-2xl text-orange-400">ℹ️</span>
          <div>
            <h3 className="text-base font-bold text-orange-900 mb-1">{t('usageTitle')}</h3>
            <p className="text-sm text-orange-800">
              {t('phoneUsageDesc')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneGenerator; 