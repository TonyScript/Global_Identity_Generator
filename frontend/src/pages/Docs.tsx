import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Docs: React.FC = () => {
  const { i18n } = useTranslation();
  const isZh = i18n.language === 'zh';

  if (isZh) {
    return (
      <div className="max-w-3xl mx-auto py-12 px-4">
        <h1 className="text-4xl font-extrabold mb-6 text-orange-500">如何高效生成和使用全球身份测试数据</h1>
        <p className="mb-4 text-lg text-gray-800">在现代软件开发、测试和数据分析中，<b>高质量的测试数据</b>至关重要。<Link to="/" className="text-orange-500 underline">Global Identity Generator</Link> 提供了便捷的方式，帮助开发者、测试工程师、教育工作者等快速生成全球各地的地址、手机号和信用卡信息。</p>
        {/* 图片已移除 */}
        <h2 className="text-2xl font-bold mt-8 mb-2 text-orange-500">为什么需要真实格式的测试数据？</h2>
        <p className="mb-4 text-gray-800">真实格式的地址、手机号和信用卡数据有助于：</p>
        <ul className="mb-6 list-disc list-inside text-gray-800">
          <li>验证表单输入、正则校验和前端交互</li>
          <li>模拟国际化场景，提升产品全球适配能力</li>
          <li>保护用户隐私，避免泄露真实数据</li>
          <li>提升自动化测试的覆盖率和准确性</li>
        </ul>
        <h2 className="text-2xl font-bold mt-8 mb-2 text-orange-500">使用技巧与注意事项</h2>
        <ol className="mb-6 list-decimal list-inside text-gray-800">
          <li>根据目标国家/地区选择合适的生成器，确保数据格式符合本地规范。</li>
          <li>在 <Link to="/address" className="text-orange-500 underline">地址生成器</Link> 页面，可生成包含城市、区县、街道等详细信息的地址。</li>
          <li>在 <Link to="/phone" className="text-orange-500 underline">手机号生成器</Link> 页面，获取带国际区号的手机号码，适合短信验证、注册测试等场景。</li>
          <li>在 <Link to="/credit-card" className="text-orange-500 underline">信用卡生成器</Link> 页面，生成通过Luhn算法校验的信用卡信息，适合支付流程演示。</li>
          <li>如需了解更多实际用例，请访问 <Link to="/guides" className="text-orange-500 underline">使用指南</Link> 页面。</li>
        </ol>
        <h2 className="text-2xl font-bold mt-8 mb-2 text-orange-500">常见问题解答</h2>
        <ul className="mb-6 list-disc list-inside text-gray-800">
          <li>所有数据仅供测试和学习使用，不代表真实存在。</li>
          <li>支持多语言切换，内容自动适配。</li>
          <li>如遇问题可通过页脚Support区联系。</li>
        </ul>
        <div className="my-8 p-4 bg-orange-50 border-l-4 border-orange-400 rounded">
          <h3 className="font-bold mb-2 text-orange-600">延伸阅读</h3>
          <p className="text-gray-800">想了解更多身份数据生成技巧、mock数据、表单测试、国际化开发等内容，欢迎访问 <Link to="/guides" className="text-orange-500 underline">使用指南</Link> 或返回 <Link to="/" className="text-orange-500 underline">首页</Link>。</p>
        </div>
        <p className="text-sm text-gray-500">关键词：测试数据生成、地址生成器、手机号生成器、信用卡生成器、mock、国际化、数据脱敏、表单测试、隐私保护。</p>
      </div>
    );
  }

  // English content
  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-extrabold mb-6 text-orange-500">How to Efficiently Generate and Use Global Identity Test Data</h1>
      <p className="mb-4 text-lg text-gray-800">In modern software development, testing, and data analysis, <b>high-quality test data</b> is essential. <Link to="/" className="text-orange-500 underline">Global Identity Generator</Link> provides a convenient way for developers, testers, educators, and more to quickly generate addresses, phone numbers, and credit card data for countries and regions worldwide.</p>
      {/* Image removed */}
      <h2 className="text-2xl font-bold mt-8 mb-2 text-orange-500">Why Use Realistic Test Data?</h2>
      <p className="mb-4 text-gray-800">Real-format addresses, phone numbers, and credit card data help you:</p>
      <ul className="mb-6 list-disc list-inside text-gray-800">
        <li>Validate form input, regex, and frontend interactions</li>
        <li>Simulate international scenarios and improve global product adaptation</li>
        <li>Protect user privacy and avoid leaking real data</li>
        <li>Increase coverage and accuracy of automated testing</li>
      </ul>
      <h2 className="text-2xl font-bold mt-8 mb-2 text-orange-500">Tips & Best Practices</h2>
      <ol className="mb-6 list-decimal list-inside text-gray-800">
        <li>Select the right generator for your target country/region to ensure data format compliance.</li>
        <li>On the <Link to="/address" className="text-orange-500 underline">Address Generator</Link> page, generate addresses with city, district, street, and more.</li>
        <li>On the <Link to="/phone" className="text-orange-500 underline">Phone Generator</Link> page, get phone numbers with international codes for SMS verification, registration, etc.</li>
        <li>On the <Link to="/credit-card" className="text-orange-500 underline">Credit Card Generator</Link> page, generate Luhn-valid credit card info for payment flow demos.</li>
        <li>For more use cases, visit the <Link to="/guides" className="text-orange-500 underline">Guides</Link> page.</li>
      </ol>
      <h2 className="text-2xl font-bold mt-8 mb-2 text-orange-500">FAQ</h2>
      <ul className="mb-6 list-disc list-inside text-gray-800">
        <li>All data is for testing and learning only, not real-world use.</li>
        <li>Multi-language support, content adapts automatically.</li>
        <li>For help, contact us via the Support section in the footer.</li>
      </ul>
      <div className="my-8 p-4 bg-orange-50 border-l-4 border-orange-400 rounded">
        <h3 className="font-bold mb-2 text-orange-600">Further Reading</h3>
        <p className="text-gray-800">For more tips on identity data generation, mock data, form testing, and internationalization, visit the <Link to="/guides" className="text-orange-500 underline">Guides</Link> page or return to the <Link to="/" className="text-orange-500 underline">Home</Link> page.</p>
      </div>
      <p className="text-sm text-gray-500">Keywords: test data generation, address generator, phone generator, credit card generator, mock, internationalization, data masking, form testing, privacy protection.</p>
    </div>
  );
};

export default Docs; 