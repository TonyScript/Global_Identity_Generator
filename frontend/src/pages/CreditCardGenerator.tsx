import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { COUNTRIES, generateCreditCard } from '../utils/generators';

interface CreditCardData {
  card_number: string;
  expiry_month: string;
  expiry_year: string;
  cvv: string;
  card_type: string;
}

const CreditCardGenerator: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [selectedCountry, setSelectedCountry] = useState<string>('CN');
  const [generatedCard, setGeneratedCard] = useState<CreditCardData | null>(null);
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
        const creditCard = generateCreditCard(selectedCountry, i18n.language as 'zh' | 'en');
        setGeneratedCard(creditCard);
        setIsLoading(false);
      }, 500);
    } catch (error) {
      console.error('Failed to generate credit card:', error);
      alert(t('error'));
      setIsLoading(false);
    }
  };

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    } catch (error) {
      console.error('Failed to copy:', error);
    }
  };

  const copyAllData = async () => {
    if (!generatedCard) return;

    const allData = `Card Number: ${generatedCard.card_number}\nExpiry: ${generatedCard.expiry_month}/${generatedCard.expiry_year}\nCVV: ${generatedCard.cvv}\nCard Type: ${generatedCard.card_type}`;
    await copyToClipboard(allData);
  };

  return (
    <div className="w-full min-h-screen bg-gray-50">
      <div className="bg-white rounded-xl shadow-lg p-4 md:p-8 w-full mx-0 md:mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            💳 {t('creditCardGenerator')}
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            选择国家/地区，生成符合Luhn算法校验的信用卡信息
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
                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-base"
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
              className="w-full bg-purple-600 hover:bg-purple-700 disabled:bg-gray-400 text-white font-semibold py-4 px-6 rounded-lg text-lg transition-colors duration-200"
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
                t('generateCreditCard')
              )}
            </button>
          </div>

          {/* 右侧：结果显示 */}
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                生成结果
              </h3>
              {generatedCard ? (
                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                  {/* 信用卡显示 */}
                  <div className="bg-gradient-to-r from-purple-600 to-purple-800 rounded-lg p-6 text-white mb-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <p className="text-sm opacity-75">Card Type</p>
                        <p className="font-semibold">{generatedCard.card_type}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm opacity-75">CVV</p>
                        <p className="font-semibold">{generatedCard.cvv}</p>
                      </div>
                    </div>
                    <div className="mb-4">
                      <p className="text-sm opacity-75 mb-1">Card Number</p>
                      <p className="text-xl font-mono tracking-wider">
                        {generatedCard.card_number.replace(/(\d{4})/g, '$1 ').trim()}
                      </p>
                    </div>
                    <div className="flex justify-between">
                      <div>
                        <p className="text-sm opacity-75">Expiry Date</p>
                        <p className="font-semibold">{generatedCard.expiry_month}/{generatedCard.expiry_year}</p>
                      </div>
                    </div>
                  </div>

                  {/* 复制按钮 */}
                  <div className="space-y-3">
                    <button
                      onClick={() => copyToClipboard(generatedCard.card_number)}
                      className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200"
                    >
                      {copySuccess ? t('copied') : t('copy')} Card Number
                    </button>
                    <button
                      onClick={copyAllData}
                      className="w-full bg-gray-600 hover:bg-gray-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200"
                    >
                      {copySuccess ? t('copied') : t('copy')} All Data
                    </button>
                  </div>
                </div>
              ) : (
                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 text-center">
                  <p className="text-gray-500 text-lg">
                    点击生成按钮开始生成信用卡信息
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* 底部提示 */}
        <div className="mt-12 p-6 bg-purple-50 rounded-lg border border-purple-200">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <svg className="h-6 w-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-semibold text-purple-900">
                使用说明
              </h3>
              <p className="text-sm text-purple-800 mt-1">
                生成的信用卡信息仅用于测试和学习目的，不代表真实存在的卡片。所有卡号都通过了Luhn算法校验。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreditCardGenerator; 