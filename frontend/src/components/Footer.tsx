import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
  const { t, i18n } = useTranslation();
  const isZh = i18n.language === 'zh';

  return (
    <footer className="w-full bg-gray-900 text-gray-200 pt-12 pb-8 px-4 mt-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Logo & Intro */}
        <div className="md:col-span-2 flex flex-col gap-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-2xl">🌐</span>
            <span className="text-xl font-bold text-orange-400">{t('siteTitle') || 'Global Identity Generator'}</span>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            {isZh
              ? '一站式全球身份信息生成工具，支持多国家/地区的地址、手机号、信用卡等信息生成，助力开发、测试与学习。'
              : 'All-in-one global identity generator for addresses, phone numbers, credit cards and more. Perfect for development, testing, and learning.'}
          </p>
          <p className="text-gray-500 text-xs mt-2">Copyright © 2025 - All rights reserved</p>
        </div>
        {/* Features */}
        <div>
          <h4 className="font-bold mb-3 text-gray-300 uppercase tracking-wider">{isZh ? '功能' : 'Features'}</h4>
          <ul className="space-y-2 text-sm">
            <li>{t('addressGenerator')}</li>
            <li>{t('phoneGenerator')}</li>
            <li>{t('creditCardGenerator')}</li>
          </ul>
        </div>
        {/* Resources */}
        <div>
          <h4 className="font-bold mb-3 text-gray-300 uppercase tracking-wider">{isZh ? '资源' : 'Resources'}</h4>
          <ul className="space-y-2 text-sm">
            <li>{isZh ? '使用指南' : 'Guides'}</li>
            <li>{isZh ? '帮助文档' : 'Docs'}</li>
          </ul>
        </div>
        {/* Support */}
        <div>
          <h4 className="font-bold mb-3 text-gray-300 uppercase tracking-wider">{isZh ? '支持' : 'Support'}</h4>
          <ul className="space-y-2 text-sm">
            <li>Email</li>
            <li>FAQ</li>
            <li>{isZh ? '服务条款' : 'Terms of Service'}</li>
            <li>{isZh ? '隐私政策' : 'Privacy Policy'}</li>
          </ul>
        </div>
        {/* Links */}
        <div>
          <h4 className="font-bold mb-3 text-gray-300 uppercase tracking-wider">{isZh ? '推荐链接' : 'Links'}</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="https://charitydoing.com/" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400 transition-colors flex items-center gap-1">
                {isZh ? '精选博客' : 'Awesome Blog'}
                <span className="ml-1">↗</span>
              </a>
            </li>
            <li>
              <a href="https://www.qrcodehub.net/" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400 transition-colors flex items-center gap-1">
                {isZh ? '二维码生成' : 'QR Code Generator'}
                <span className="ml-1">↗</span>
              </a>
            </li>
            <li>
              <a href="http://tools.charitydoing.com/" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400 transition-colors flex items-center gap-1">
                {isZh ? 'AI工具集' : 'AI Tools'}
                <span className="ml-1">↗</span>
              </a>
            </li>
            <li>
              <a href="https://xvideodl.charitydoing.com/" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400 transition-colors flex items-center gap-1">
                {isZh ? '免费视频下载' : 'Free Video Downloader'}
                <span className="ml-1">↗</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 