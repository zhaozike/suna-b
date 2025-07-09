"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { 
  BookOpen, 
  Menu, 
  X, 
  User, 
  Settings, 
  LogOut,
  CreditCard,
  MessageCircle
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface NavigationProps {
  user: any;
  onLogin: () => void;
  onRegister: () => void;
  onLogout: () => void;
}

export default function Navigation({ user, onLogin, onRegister, onLogout }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handlePayment = () => {
    // 占位符：支付功能
    alert('支付功能即将上线，敬请期待！');
  };

  const handleCustomerService = () => {
    // 占位符：客服功能
    alert('客服功能即将上线，如有问题请发送邮件至 support@example.com');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <BookOpen className="w-8 h-8 text-orange-500 mr-2" />
            <span className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent">
              绘本 AI
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-700 hover:text-orange-500 transition-colors">
              功能特色
            </a>
            <a href="#how-it-works" className="text-gray-700 hover:text-orange-500 transition-colors">
              使用说明
            </a>
            <a href="#examples" className="text-gray-700 hover:text-orange-500 transition-colors">
              精彩案例
            </a>
            <Button
              onClick={handlePayment}
              variant="outline"
              className="border-orange-200 text-orange-600 hover:bg-orange-50"
            >
              <CreditCard className="w-4 h-4 mr-2" />
              升级会员
            </Button>
            <Button
              onClick={handleCustomerService}
              variant="outline"
              className="border-blue-200 text-blue-600 hover:bg-blue-50"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              客服
            </Button>
          </div>

          {/* User Actions */}
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="flex items-center space-x-2">
                    <User className="w-4 h-4" />
                    <span>{user.email}</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>
                    <User className="w-4 h-4 mr-2" />
                    个人资料
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Settings className="w-4 h-4 mr-2" />
                    设置
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={onLogout}>
                    <LogOut className="w-4 h-4 mr-2" />
                    退出登录
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <div className="flex items-center space-x-2">
                <Button variant="outline" onClick={onLogin}>
                  登录
                </Button>
                <Button
                  onClick={onRegister}
                  className="bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600 text-white"
                >
                  注册
                </Button>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-2 space-y-1">
            <a
              href="#features"
              className="block px-3 py-2 text-gray-700 hover:text-orange-500 transition-colors"
            >
              功能特色
            </a>
            <a
              href="#how-it-works"
              className="block px-3 py-2 text-gray-700 hover:text-orange-500 transition-colors"
            >
              使用说明
            </a>
            <a
              href="#examples"
              className="block px-3 py-2 text-gray-700 hover:text-orange-500 transition-colors"
            >
              精彩案例
            </a>
            
            <div className="pt-4 border-t border-gray-200">
              <Button
                onClick={handlePayment}
                variant="outline"
                className="w-full mb-2 border-orange-200 text-orange-600 hover:bg-orange-50"
              >
                <CreditCard className="w-4 h-4 mr-2" />
                升级会员
              </Button>
              <Button
                onClick={handleCustomerService}
                variant="outline"
                className="w-full mb-2 border-blue-200 text-blue-600 hover:bg-blue-50"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                客服
              </Button>
              
              {user ? (
                <div className="space-y-2">
                  <div className="px-3 py-2 text-sm text-gray-600">
                    已登录: {user.email}
                  </div>
                  <Button
                    variant="outline"
                    onClick={onLogout}
                    className="w-full"
                  >
                    <LogOut className="w-4 h-4 mr-2" />
                    退出登录
                  </Button>
                </div>
              ) : (
                <div className="space-y-2">
                  <Button
                    variant="outline"
                    onClick={onLogin}
                    className="w-full"
                  >
                    登录
                  </Button>
                  <Button
                    onClick={onRegister}
                    className="w-full bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600 text-white"
                  >
                    注册
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}