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
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-orange-50 to-blue-50">
      <Navigation 
        user={user} 
        onLogin={() => { setAuthMode('login'); setShowAuthModal(true); }}
        onRegister={() => { setAuthMode('register'); setShowAuthModal(true); }}
        onLogout={() => setUser(null)}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <Badge className="bg-gradient-to-r from-pink-500 to-orange-500 text-white border-0 text-sm px-4 py-2">
                <Sparkles className="w-4 h-4 mr-2" />
                AI 驱动的儿童绘本创作
              </Badge>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              让想象力
              <span className="bg-gradient-to-r from-pink-500 via-orange-500 to-blue-500 bg-clip-text text-transparent">
                无限绘本
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              用 AI 的魔力，将您的创意瞬间变成专业的儿童绘本。精美插画、专业配音、多语言支持，让每个故事都成为孩子们的珍藏。
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={handleStartCreating}
                className="bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <Sparkles className="w-5 h-5 mr-2" />
                开始创作故事
              </Button>
              
              <Button
                variant="outline"
                className="border-2 border-orange-300 text-orange-600 hover:bg-orange-50 px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Play className="w-5 h-5 mr-2" />
                观看演示
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">为什么选择我们？</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              结合最新的 AI 技术，为您提供专业级别的儿童绘本创作体验
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-gradient-to-br from-pink-50 to-pink-100">
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-pink-500 to-orange-500 rounded-full flex items-center justify-center">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">AI 智能创作</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  强大的 AI 引擎，根据您的创意生成独特的故事情节和人物设定
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-gradient-to-br from-orange-50 to-orange-100">
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-full flex items-center justify-center">
                  <Palette className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">精美插画</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  专业级别的插画生成，多种艺术风格可选，让每个故事都栩栩如生
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-gradient-to-br from-blue-50 to-blue-100">
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                  <Mic className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">专业配音</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  多种语音角色可选，自然流畅的语音合成，让故事更加生动有趣
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-gradient-to-br from-purple-50 to-purple-100">
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">多语言支持</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  支持多种语言创作，让全世界的孩子都能享受到优质的故事内容
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">简单四步，完成创作</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              从创意到成品，只需几分钟时间
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "输入创意", desc: "描述你的故事主题和想法", icon: BookOpen },
              { step: "2", title: "选择风格", desc: "选择插画风格和语音类型", icon: Palette },
              { step: "3", title: "AI 生成", desc: "AI 自动生成故事和插画", icon: Sparkles },
              { step: "4", title: "完成作品", desc: "获得专业的儿童绘本作品", icon: Heart }
            ].map((item, index) => (
              <div key={index} className="text-center relative">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-pink-500 to-orange-500 rounded-full flex items-center justify-center">
                  <item.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
                {index < 3 && (
                  <ArrowRight className="w-6 h-6 text-orange-400 absolute top-8 -right-3 hidden md:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Examples Section */}
      <section className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">精彩案例展示</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              看看其他创作者都制作了什么样的精彩作品
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "小兔子的太空冒险",
                description: "一个关于勇敢小兔子探索太空的温馨故事",
                image: "https://images.pexels.com/photos/6032511/pexels-photo-6032511.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop"
              },
              {
                title: "魔法森林的秘密",
                description: "神奇的森林里住着会说话的动物朋友们",
                image: "https://images.pexels.com/photos/1619654/pexels-photo-1619654.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop"
              },
              {
                title: "彩虹桥上的小公主",
                description: "善良的小公主用爱心拯救了整个王国",
                image: "https://images.pexels.com/photos/1619640/pexels-photo-1619640.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop"
              }
            ].map((example, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-pink-200 to-orange-200 relative">
                  <img 
                    src={example.image} 
                    alt={example.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{example.title}</h3>
                  <p className="text-gray-600 mb-4">{example.description}</p>
                  <Button variant="outline" className="w-full">
                    <Play className="w-4 h-4 mr-2" />
                    查看故事
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-pink-500 via-orange-500 to-blue-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            准备好创作您的第一个故事了吗？
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            加入我们，让 AI 帮助您创作出令人难忘的儿童绘本
          </p>
          <Button
            onClick={handleStartCreating}
            className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <Sparkles className="w-5 h-5 mr-2" />
            立即开始创作
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent">
                绘本 AI
              </h3>
              <p className="text-gray-400">
                让每个孩子都能享受到专业级别的儿童绘本，用 AI 技术点亮想象力。
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">产品</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">故事生成器</a></li>
                <li><a href="#" className="hover:text-white transition-colors">插画创作</a></li>
                <li><a href="#" className="hover:text-white transition-colors">语音合成</a></li>
                <li><a href="#" className="hover:text-white transition-colors">多语言支持</a></li>
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