import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { COUNTRIES, generatePhoneNumber } from '../utils/generators';

const PhoneGenerator: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [selectedCountry, setSelectedCountry] = useState<string>('CN');
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
    <div className="w-full min-h-screen bg-gray-50">
      <div className="bg-white rounded-xl shadow-lg p-4 md:p-8 w-full mx-0 md:mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            📱 {t('phoneGenerator')}
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            选择国家/地区，生成符合当地格式的手机号码
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 w-full">
          {/* 左侧：控制面板 */}
          <div className="space-y-6">
            <div>
              <label className="block text-lg font-medium text-gray-700 mb-3">
                {t('selectCountry')}
              </label>
              <select
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 text-base"
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
              className="w-full bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white font-semibold py-4 px-6 rounded-lg text-lg transition-colors duration-200"
            >
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
            </button>
          </div>

          {/* 右侧：结果显示 */}
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                生成结果
              </h3>
              {generatedPhone ? (
                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                  <div className="bg-white border border-gray-200 rounded-lg p-4 mb-4">
                    <p className="text-gray-800 text-lg font-mono break-all leading-relaxed">
                      {generatedPhone}
                    </p>
                  </div>
                  <button
                    onClick={copyToClipboard}
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200"
                  >
                    {copySuccess ? t('copied') : t('copy')}
                  </button>
                </div>
              ) : (
                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 text-center">
                  <p className="text-gray-500 text-lg">
                    点击生成按钮开始生成手机号
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* 底部提示 */}
        <div className="mt-12 p-6 bg-green-50 rounded-lg border border-green-200">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <svg className="h-6 w-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-semibold text-green-900">
                使用说明
              </h3>
              <p className="text-sm text-green-800 mt-1">
                生成的手机号仅用于测试和学习目的，不代表真实存在的号码。所有号码都符合国际格式规范。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneGenerator; 