"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Sparkles, BookOpen, Mic, Palette, Globe, Users, ArrowRight, Play, Heart } from 'lucide-react';
import Navigation from '@/components/Navigation';
import StoryGenerator from '@/components/StoryGenerator';
import AuthModal from '@/components/AuthModal';

export default function Home() {
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');
  const [showStoryGenerator, setShowStoryGenerator] = useState(false);
  const [user, setUser] = useState<any>(null);

  const handleAuthSuccess = (userData: any) => {
    setUser(userData);
    setShowAuthModal(false);
  };

  const handleStartCreating = () => {
    if (user) {
      setShowStoryGenerator(true);
    } else {
      setAuthMode('register');
      setShowAuthModal(true);
    }
  };

  if (showStoryGenerator) {
    return <StoryGenerator user={user} onBack={() => setShowStoryGenerator(false)} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-orange-50 to-blue-50 font-inter">
      {/* 导航栏 */}
      <Navigation 
        user={user} 
        onLogin={() => { setAuthMode('login'); setShowAuthModal(true); }}
        onRegister={() => { setAuthMode('register'); setShowAuthModal(true); }}
        onLogout={() => setUser(null)}
      />

      {/* 主英雄区域 */}
      <main className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] text-center px-4 pt-16">
        <div className="max-w-4xl mx-auto">
          <Badge variant="secondary" className="mb-4 text-sm px-3 py-1 rounded-full bg-orange-100 text-orange-600">
            <Sparkles className="inline-block w-4 h-4 mr-2" />
            AI 驱动
          </Badge>
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6 animate-fade-in-up">
            用 AI 创作你自己的<br className="hidden md:inline"/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-500">个性化绘本</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
            释放你的想象力，轻松生成独特的故事和精美插画，为孩子们打造专属的阅读体验。
          </p>
          <Button
            onClick={handleStartCreating}
            className="px-8 py-4 text-lg font-semibold rounded-full shadow-lg transform transition-all duration-300 hover:scale-105 bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600 text-white animate-fade-in-up animation-delay-400"
          >
            <Play className="w-5 h-5 mr-2" />
            立即开始创作
          </Button>
        </div>
      </main>

      {/* 特色功能区 */}
      <section className="py-20 bg-white shadow-inner-top">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">我们的特色</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-6 shadow-md hover:shadow-xl transition-shadow duration-300 rounded-lg border-0">
              <CardHeader>
                <BookOpen className="w-12 h-12 text-orange-500 mx-auto mb-4" />
                <CardTitle className="text-xl font-semibold">智能故事生成</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  只需几个关键词，AI 即可创作引人入胜的原创故事。
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="text-center p-6 shadow-md hover:shadow-xl transition-shadow duration-300 rounded-lg border-0">
              <CardHeader>
                <Palette className="w-12 h-12 text-pink-500 mx-auto mb-4" />
                <CardTitle className="text-xl font-semibold">精美插画匹配</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  为你的故事自动生成风格多样的艺术插画。
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="text-center p-6 shadow-md hover:shadow-xl transition-shadow duration-300 rounded-lg border-0">
              <CardHeader>
                <Mic className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                <CardTitle className="text-xl font-semibold">个性化配音</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  选择不同的声音，为你的绘本故事添加生动的旁白。
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 工作原理区 */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">工作原理</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center text-xl font-bold mr-4 shadow-md">1</div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">输入你的想法</h3>
                  <p className="text-gray-700">
                    告诉 AI 你想创作什么类型的故事，比如角色、主题或关键情节。
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-pink-500 text-white rounded-full flex items-center justify-center text-xl font-bold mr-4 shadow-md">2</div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">AI 智能生成</h3>
                  <p className="text-gray-700">
                    我们的 AI 模型会根据你的输入，快速生成完整的故事文本和匹配的插画。
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center text-xl font-bold mr-4 shadow-md">3</div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">个性化定制与分享</h3>
                  <p className="text-gray-700">
                    你可以进一步编辑故事、选择配音，并轻松分享给家人和朋友。
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://placehold.co/600x400/FFDDC1/FF6B6B?text=AI+Storytelling"
                alt="AI 故事创作流程"
                className="rounded-lg shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500"
              />
              <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-lg shadow-xl animate-bounce-slow">
                <Sparkles className="w-6 h-6 text-yellow-500 inline-block mr-2" />
                <span className="font-semibold text-gray-800">创意无限</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 用户评价区 */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">用户评价</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 shadow-md rounded-lg border-0">
              <CardContent className="flex flex-col items-center text-center">
                <img
                  src="https://placehold.co/60x60/AEC6CF/FFFFFF?text=User1"
                  alt="用户头像"
                  className="w-16 h-16 rounded-full mb-4 object-cover"
                />
                <p className="text-gray-700 italic mb-4">
                  “这款 AI 绘本工具太棒了！我的孩子非常喜欢我为他们创作的专属故事。”
                </p>
                <p className="font-semibold text-gray-800">- 王女士</p>
              </CardContent>
            </Card>
            <Card className="p-6 shadow-md rounded-lg border-0">
              <CardContent className="flex flex-col items-center text-center">
                <img
                  src="https://placehold.co/60x60/CFF0CC/FFFFFF?text=User2"
                  alt="用户头像"
                  className="w-16 h-16 rounded-full mb-4 object-cover"
                />
                <p className="text-gray-700 italic mb-4">
                  “操作简单，生成的故事和插画质量都很高，是亲子阅读的好帮手！”
                </p>
                <p className="font-semibold text-gray-800">- 李先生</p>
              </CardContent>
            </Card>
            <Card className="p-6 shadow-md rounded-lg border-0">
              <CardContent className="flex flex-col items-center text-center">
                <img
                  src="https://placehold.co/60x60/FCD7A1/FFFFFF?text=User3"
                  alt="用户头像"
                  className="w-16 h-16 rounded-full mb-4 object-cover"
                />
                <p className="text-gray-700 italic mb-4">
                  “每次都能给我惊喜，AI 创作的故事充满了想象力，孩子们爱不释手。”
                </p>
                <p className="font-semibold text-gray-800">- 张老师</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA 区 */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">立即开启你的绘本创作之旅！</h2>
          <p className="text-xl mb-8">
            加入我们，和数百万家庭一起，为孩子们创造独特的睡前故事。
          </p>
          <Button
            onClick={handleStartCreating}
            className="px-10 py-5 text-xl font-semibold rounded-full shadow-lg transform transition-all duration-300 hover:scale-105 bg-white text-purple-700 hover:bg-gray-100"
          >
            <Sparkles className="w-6 h-6 mr-2" />
            免费开始创作
            <ArrowRight className="w-6 h-6 ml-2" />
          </Button>
        </div>
      </section>

      {/* 页脚 */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-orange-400">绘本 AI</h3>
              <p className="text-gray-400 text-sm">
                用 AI 赋能儿童故事创作，激发无限想象力。
              </p>
              <div className="flex space-x-4 mt-4">
                {/* 社交媒体图标占位符 */}
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Globe className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Users className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Heart className="w-6 h-6" />
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">产品</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">故事生成器</a></li>
                <li><a href="#" className="hover:text-white transition-colors">插画风格</a></li>
                <li><a href="#" className="hover:text-white transition-colors">语音定制</a></li>
                <li><a href="#" className="hover:text-white transition-colors">定价</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">支持</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">帮助中心</a></li>
                <li><a href="#" className="hover:text-white transition-colors">在线客服</a></li>
                <li><a href="#" className="hover:text-white transition-colors">联系我们</a></li>
                <li><a href="#" className="hover:text-white transition-colors">意见反馈</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">关于我们</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">公司介绍</a></li>
                <li><a href="#" className="hover:text-white transition-colors">隐私政策</a></li>
                <li><a href="#" className="hover:text-white transition-colors">服务条款</a></li>
                <li><a href="#" className="hover:text-white transition-colors">支付方式</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 绘本 AI. 保留所有权利。</p>
          </div>
        </div>
      </footer>

      {/* Auth Modal */}
      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        mode={authMode}
        onSuccess={handleAuthSuccess}
      />
    </div>
  );
}
