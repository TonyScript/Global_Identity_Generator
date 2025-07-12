import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Guides: React.FC = () => {
  const { i18n } = useTranslation();
  const isZh = i18n.language === 'zh';

  if (isZh) {
    return (
      <div className="max-w-3xl mx-auto py-12 px-4">
        <h1 className="text-4xl font-extrabold mb-6 text-orange-500">使用指南（Guides）</h1>
        <p className="mb-4 text-lg text-gray-700">欢迎使用 <Link to="/" className="text-orange-500 underline">Global Identity Generator</Link>！本工具可帮助你快速生成全球各地的地址、手机号和信用卡信息，适用于开发、测试、学习等多种场景。</p>
        {/* 图片已移除 */}
        <h2 className="text-2xl font-bold mt-8 mb-2 text-orange-500">核心功能</h2>
        <ul className="mb-6 list-disc list-inside text-gray-700">
          <li>地址生成器：支持多国家/地区，生成真实格式的地址数据</li>
          <li>手机号生成器：生成带国际区号、符合规范的手机号码</li>
          <li>信用卡生成器：生成通过Luhn算法校验的信用卡信息</li>
          <li>多语言切换：支持中英文界面，内容自动适配</li>
        </ul>
        <h2 className="text-2xl font-bold mt-8 mb-2 text-orange-500">典型用例（Use Cases）</h2>
        <div className="mb-6">
          <h3 className="font-semibold text-lg mb-1 text-gray-900">1. 测试数据生成</h3>
          <p className="text-gray-600 mb-2">开发者可用本工具批量生成假地址、手机号、信用卡信息，进行系统测试、表单验证、数据填充等。关键词：测试数据、假数据、自动化测试、mock。</p>
        </div>
        <div className="mb-6">
          <h3 className="font-semibold text-lg mb-1 text-gray-900">2. 前端表单演示</h3>
          <p className="text-gray-600 mb-2">UI/UX设计师和前端开发者可用生成的数据填充表单，演示注册、支付、地址填写等流程。关键词：表单演示、UI测试、注册流程、支付体验。</p>
        </div>
        <div className="mb-6">
          <h3 className="font-semibold text-lg mb-1 text-gray-900">3. 教育与培训</h3>
          <p className="text-gray-600 mb-2">老师和讲师可用本工具为学生提供真实格式的国际化数据，讲解数据结构、正则校验、国际化开发等知识。关键词：教育、培训、正则表达式、国际化。</p>
        </div>
        <div className="mb-6">
          <h3 className="font-semibold text-lg mb-1 text-gray-900">4. 数据脱敏与隐私保护</h3>
          <p className="text-gray-600 mb-2">在演示或分享项目时，用生成的假数据替换真实用户信息，保护隐私。关键词：数据脱敏、隐私保护、GDPR、合规。</p>
        </div>
        <div className="my-8 p-4 bg-orange-50 border-l-4 border-orange-400 rounded">
          <h3 className="font-bold mb-2 text-orange-600">更多帮助</h3>
          <p className="text-gray-800">详细字段说明等请参考 <Link to="/docs" className="text-orange-500 underline">文档（Docs）</Link> 页面。</p>
        </div>
        <p className="text-sm text-gray-500">本项目支持多语言切换，所有生成内容均可自由复制粘贴，助力高效开发与测试。更多用法请关注 <Link to="/docs" className="text-orange-500 underline">帮助文档</Link>。</p>
      </div>
    );
  }

  // English content
  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-extrabold mb-6 text-orange-500">Guides: How to Use Global Identity Generator</h1>
      <p className="mb-4 text-lg text-gray-700">Welcome to <Link to="/" className="text-orange-500 underline">Global Identity Generator</Link>! This tool helps you quickly generate addresses, phone numbers, and credit card data for countries and regions worldwide. Perfect for development, testing, learning, and more.</p>
      {/* Image removed */}
      <h2 className="text-2xl font-bold mt-8 mb-2 text-orange-500">Core Features</h2>
      <ul className="mb-6 list-disc list-inside text-gray-700">
        <li>Address Generator: Generate real-format addresses for multiple countries/regions</li>
        <li>Phone Generator: Generate phone numbers with international codes and valid formats</li>
        <li>Credit Card Generator: Generate credit card info with Luhn validation</li>
        <li>Multi-language: Switch between English and Chinese, content adapts automatically</li>
      </ul>
      <h2 className="text-2xl font-bold mt-8 mb-2 text-orange-500">Typical Use Cases</h2>
      <div className="mb-6">
        <h3 className="font-semibold text-lg mb-1 text-gray-900">1. Test Data Generation</h3>
        <p className="text-gray-600 mb-2">Developers can use this tool to generate fake addresses, phone numbers, and credit card data for system testing, form validation, and data filling. Keywords: test data, fake data, automated testing, mock.</p>
      </div>
      <div className="mb-6">
        <h3 className="font-semibold text-lg mb-1 text-gray-900">2. Frontend Form Demo</h3>
        <p className="text-gray-600 mb-2">UI/UX designers and frontend developers can use generated data to fill forms and demonstrate registration, payment, and address input flows. Keywords: form demo, UI testing, registration flow, payment experience.</p>
      </div>
      <div className="mb-6">
        <h3 className="font-semibold text-lg mb-1 text-gray-900">3. Education & Training</h3>
        <p className="text-gray-600 mb-2">Teachers and trainers can use this tool to provide students with real-format international data, explaining data structures, regex validation, and i18n development. Keywords: education, training, regex, internationalization.</p>
      </div>
      <div className="mb-6">
        <h3 className="font-semibold text-lg mb-1 text-gray-900">4. Data Masking & Privacy</h3>
        <p className="text-gray-600 mb-2">When demoing or sharing projects, use generated fake data to replace real user info and protect privacy. Keywords: data masking, privacy protection, GDPR, compliance.</p>
      </div>
      <div className="my-8 p-4 bg-orange-50 border-l-4 border-orange-400 rounded">
        <h3 className="font-bold mb-2 text-orange-600">More Help</h3>
        <p className="text-gray-800">For detailed field explanations, see the <Link to="/docs" className="text-orange-500 underline">Docs</Link> page.</p>
      </div>
      <p className="text-sm text-gray-500">This project supports multi-language switching. All generated content can be freely copied and pasted for efficient development and testing. For more usage, see the <Link to="/docs" className="text-orange-500 underline">Docs</Link> page.</p>
    </div>
  );
};

export default Guides; 