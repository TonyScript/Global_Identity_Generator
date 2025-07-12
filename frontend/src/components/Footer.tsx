import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const linkClass =
  'flex items-center gap-1 text-orange-400 hover:text-white transition-colors duration-200 underline-offset-4 hover:underline';

const Footer: React.FC = () => {
  const { t, i18n } = useTranslation();
  const isZh = i18n.language === 'zh';

  return (
    <footer className="w-full bg-gradient-to-b from-gray-900 via-gray-950 to-gray-900 text-gray-200 pt-14 pb-8 px-4 mt-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8 mb-8">
        {/* Features */}
        <div>
          <h4 className="font-extrabold mb-4 text-lg md:text-xl text-orange-300 tracking-widest uppercase">{isZh ? '功能' : 'Features'}</h4>
          <ul className="space-y-2 text-base">
            <li>{t('addressGenerator')}</li>
            <li>{t('phoneGenerator')}</li>
            <li>{t('creditCardGenerator')}</li>
          </ul>
        </div>
        {/* Resources */}
        <div>
          <h4 className="font-extrabold mb-4 text-lg md:text-xl text-orange-300 tracking-widest uppercase">{isZh ? '资源' : 'Resources'}</h4>
          <ul className="space-y-2 text-base">
            <li>
              <Link to="/guides" className={linkClass}>
                {isZh ? '使用指南' : 'Guides'}
                <span className="ml-1 text-xs">→</span>
              </Link>
            </li>
            <li>
              <Link to="/docs" className={linkClass}>
                {isZh ? '帮助文档' : 'Docs'}
                <span className="ml-1 text-xs">→</span>
              </Link>
            </li>
          </ul>
        </div>
        {/* Support */}
        <div>
          <h4 className="font-extrabold mb-4 text-lg md:text-xl text-orange-300 tracking-widest uppercase">{isZh ? '支持' : 'Support'}</h4>
          <ul className="space-y-2 text-base">
            <li>Email</li>
            <li>FAQ</li>
            <li>{isZh ? '服务条款' : 'Terms of Service'}</li>
            <li>{isZh ? '隐私政策' : 'Privacy Policy'}</li>
          </ul>
        </div>
        {/* Links */}
        <div>
          <h4 className="font-extrabold mb-4 text-lg md:text-xl text-orange-300 tracking-widest uppercase">{isZh ? '推荐链接' : 'Links'}</h4>
          <ul className="space-y-2 text-base">
            <li>
              <a href="https://charitydoing.com/" target="_blank" rel="noopener noreferrer" className={linkClass}>
                {isZh ? '精选博客' : 'Awesome Blog'}
                <span className="ml-1 text-xs">↗</span>
              </a>
            </li>
            <li>
              <a href="https://www.qrcodehub.net/" target="_blank" rel="noopener noreferrer" className={linkClass}>
                {isZh ? '二维码生成' : 'QR Code Generator'}
                <span className="ml-1 text-xs">↗</span>
              </a>
            </li>
            <li>
              <a href="http://tools.charitydoing.com/" target="_blank" rel="noopener noreferrer" className={linkClass}>
                {isZh ? 'AI工具集' : 'AI Tools'}
                <span className="ml-1 text-xs">↗</span>
              </a>
            </li>
            <li>
              <a href="https://xvideodl.charitydoing.com/" target="_blank" rel="noopener noreferrer" className={linkClass}>
                {isZh ? '免费视频下载' : 'Free Video Downloader'}
                <span className="ml-1 text-xs">↗</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* Logo & Intro & Copyright 对齐优化 */}
      <div className="max-w-7xl mx-auto border-t border-gray-800 pt-6 flex flex-col md:flex-row md:items-center justify-between gap-4 text-sm">
        <div className="flex items-center gap-2">
          <span className="text-2xl">🌐</span>
          <span className="text-lg md:text-xl font-bold text-orange-400">{t('siteTitle') || 'Global Identity Generator'}</span>
        </div>
        <div className="flex-1 flex flex-col md:flex-row md:justify-between md:items-center gap-2 md:ml-6">
          <p className="text-gray-400 text-center md:text-left">
            {isZh
              ? '一站式全球身份信息生成工具，支持多国家/地区的地址、手机号、信用卡等信息生成，助力开发、测试与学习。'
              : 'All-in-one global identity generator for addresses, phone numbers, credit cards and more. Perfect for development, testing, and learning.'}
          </p>
          <p className="text-gray-500 text-center md:text-right mt-1 md:mt-0">Copyright © 2025 - All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 