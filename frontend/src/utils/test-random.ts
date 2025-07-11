// 测试随机化功能
import { generateAddress, generatePhoneNumber, generateCreditCard } from './generators';

// 测试地址生成
console.log('=== 地址生成测试 ===');
for (let i = 0; i < 5; i++) {
  console.log(`中国地址 ${i + 1}:`, generateAddress('CN', 'zh'));
  console.log(`美国地址 ${i + 1}:`, generateAddress('US', 'en'));
  console.log(`日本地址 ${i + 1}:`, generateAddress('JP', 'zh'));
  console.log('---');
}

// 测试手机号生成
console.log('=== 手机号生成测试 ===');
for (let i = 0; i < 5; i++) {
  console.log(`中国手机号 ${i + 1}:`, generatePhoneNumber('CN', 'zh'));
  console.log(`美国手机号 ${i + 1}:`, generatePhoneNumber('US', 'en'));
  console.log(`日本手机号 ${i + 1}:`, generatePhoneNumber('JP', 'zh'));
  console.log('---');
}

// 测试信用卡生成
console.log('=== 信用卡生成测试 ===');
for (let i = 0; i < 5; i++) {
  console.log(`中国信用卡 ${i + 1}:`, generateCreditCard('CN', 'zh'));
  console.log(`美国信用卡 ${i + 1}:`, generateCreditCard('US', 'en'));
  console.log(`日本信用卡 ${i + 1}:`, generateCreditCard('JP', 'zh'));
  console.log('---');
} 