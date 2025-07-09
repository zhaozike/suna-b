"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Progress } from '@/components/ui/progress';
import { 
  ArrowLeft, 
  Sparkles, 
  Palette, 
  Mic, 
  Play, 
  Pause,
  Download,
  Share2,
  Loader2,
  CheckCircle,
  AlertCircle
} from 'lucide-react';

interface StoryGeneratorProps {
  user: any;
  onBack: () => void;
}

interface StoryData {
  title: string;
  content: string;
  illustrations: string[];
  audioUrl?: string;
  style: string;
  voice: string;
}

export default function StoryGenerator({ user, onBack }: StoryGeneratorProps) {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState('');
  const [isPlaying, setIsPlaying] = useState(false);
  const [generatedStory, setGeneratedStory] = useState<StoryData | null>(null);
  
  const [formData, setFormData] = useState({
    topic: '',
    description: '',
    characters: '',
    style: '',
    voice: '',
    language: 'zh-CN'
  });

  const artStyles = [
    { value: 'cartoon', label: '卡通风格', description: '可爱活泼的卡通插画' },
    { value: 'watercolor', label: '水彩风格', description: '柔和温馨的水彩画' },
    { value: 'digital', label: '数字艺术', description: '现代精美的数字插画' },
    { value: 'vintage', label: '复古风格', description: '经典复古的艺术风格' }
  ];

  const voiceOptions = [
    { value: 'child-boy', label: '小男孩', description: '活泼可爱的男童声音' },
    { value: 'child-girl', label: '小女孩', description: '甜美温柔的女童声音' },
    { value: 'narrator-warm', label: '温暖叙述', description: '温暖亲切的成人声音' },
    { value: 'narrator-gentle', label: '温柔叙述', description: '温柔平和的成人声音' }
  ];

  const generateStory = async () => {
    setLoading(true);
    setError('');
    setProgress(0);

    try {
      // 模拟生成过程
      const steps = [
        { message: '正在分析您的创意...', duration: 1000 },
        { message: '正在生成故事内容...', duration: 2000 },
        { message: '正在创作精美插画...', duration: 3000 },
        { message: '正在生成专业配音...', duration: 2000 },
        { message: '正在完成最终作品...', duration: 1000 }
      ];

      for (let i = 0; i < steps.length; i++) {
        await new Promise(resolve => setTimeout(resolve, steps[i].duration));
        setProgress((i + 1) / steps.length * 100);
      }

      // 实际项目中这里应该调用您的 AI 后端服务
      // const response = await fetch('https://suna-1.learnwise.app/api/generate-story', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(formData)
      // });

      // 模拟生成的故事数据
      const mockStory: StoryData = {
        title: `${formData.topic}的奇妙冒险`,
        content: `从前，有一个叫做${formData.characters || '小明'}的勇敢孩子，他生活在一个充满魔法的世界里。

有一天，${formData.characters || '小明'}发现了一个闪闪发光的神秘宝箱。当他打开宝箱时，里面飞出了一只美丽的彩虹蝴蝶。

蝴蝶告诉${formData.characters || '小明'}："我是魔法森林的守护者，我的家园正面临危险，需要你的帮助！"

${formData.characters || '小明'}毫不犹豫地答应了。他跟着蝴蝶来到了魔法森林，发现这里的花朵都失去了颜色，小动物们也都很伤心。

通过勇气和智慧，${formData.characters || '小明'}找到了问题的根源，并用善良的心拯救了整个森林。从此，魔法森林又重新充满了生机和快乐。

这个故事告诉我们，只要有勇气和善良的心，我们就能克服任何困难，帮助别人。`,
        illustrations: [
          'https://images.pexels.com/photos/1619654/pexels-photo-1619654.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
          'https://images.pexels.com/photos/1619640/pexels-photo-1619640.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
          'https://images.pexels.com/photos/6032511/pexels-photo-6032511.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
        ],
        audioUrl: 'https://www.soundjay.com/misc/sounds/magic-chime-02.wav', // 示例音频
        style: formData.style,
        voice: formData.voice
      };

      setGeneratedStory(mockStory);
      setStep(3);
      
    } catch (err: any) {
      setError(err.message || '生成故事时发生错误，请重试');
    } finally {
      setLoading(false);
    }
  };

  const handlePlayAudio = () => {
    // 实际项目中这里应该播放生成的音频
    setIsPlaying(!isPlaying);
    if (!isPlaying) {
      // 模拟播放
      setTimeout(() => setIsPlaying(false), 5000);
    }
  };

  const handleShare = () => {
    // 分享功能占位符
    navigator.clipboard.writeText(window.location.href);
    alert('故事链接已复制到剪贴板！');
  };

  const handleDownload = () => {
    // 下载功能占位符
    alert('下载功能即将上线，敬请期待！');
  };

  if (step === 1) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-orange-50 to-blue-50 py-8">
        <div className="max-w-4xl mx-auto px-4">
          <div className="mb-8">
            <Button
              variant="outline"
              onClick={onBack}
              className="mb-4"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              返回首页
            </Button>
            
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                创作您的
                <span className="bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent">
                  专属故事
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                告诉我们您的创意，让 AI 为您创作独特的儿童绘本
              </p>
            </div>
          </div>

          <Card className="shadow-xl border-0">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl flex items-center justify-center">
                <Sparkles className="w-6 h-6 mr-2 text-orange-500" />
                第一步：分享您的创意
              </CardTitle>
              <CardDescription>
                请详细描述您想要创作的故事，信息越详细，生成的故事越精彩
              </CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="topic" className="text-lg font-semibold">故事主题 *</Label>
                <Input
                  id="topic"
                  placeholder="例如：小兔子的太空冒险"
                  value={formData.topic}
                  onChange={(e) => setFormData({...formData, topic: e.target.value})}
                  className="text-lg p-4"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="description" className="text-lg font-semibold">故事描述 *</Label>
                <Textarea
                  id="description"
                  placeholder="请详细描述您想要的故事情节、背景、要传达的寓意等..."
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                  className="text-lg p-4 min-h-[120px]"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="characters" className="text-lg font-semibold">主要角色</Label>
                <Input
                  id="characters"
                  placeholder="例如：勇敢的小兔子豆豆、智慧的猫头鹰老师"
                  value={formData.characters}
                  onChange={(e) => setFormData({...formData, characters: e.target.value})}
                  className="text-lg p-4"
                />
              </div>

              <div className="flex justify-center">
                <Button
                  onClick={() => setStep(2)}
                  disabled={!formData.topic || !formData.description}
                  className="bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600 text-white px-8 py-4 text-lg"
                >
                  下一步：选择风格
                  <Sparkles className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  if (step === 2) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-orange-50 to-blue-50 py-8">
        <div className="max-w-4xl mx-auto px-4">
          <div className="mb-8">
            <Button
              variant="outline"
              onClick={() => setStep(1)}
              className="mb-4"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              上一步
            </Button>
            
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                选择您的
                <span className="bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent">
                  创作风格
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                选择插画风格和配音类型，让故事更加生动
              </p>
            </div>
          </div>

          <div className="space-y-8">
            {/* 插画风格选择 */}
            <Card className="shadow-xl border-0">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl flex items-center justify-center">
                  <Palette className="w-6 h-6 mr-2 text-orange-500" />
                  插画风格
                </CardTitle>
                <CardDescription>
                  选择您喜欢的插画风格，每种风格都有独特的视觉效果
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {artStyles.map((style) => (
                    <Card
                      key={style.value}
                      className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
                        formData.style === style.value
                          ? 'ring-2 ring-orange-500 bg-orange-50'
                          : 'hover:bg-gray-50'
                      }`}
                      onClick={() => setFormData({...formData, style: style.value})}
                    >
                      <CardContent className="p-4">
                        <h3 className="font-semibold text-lg mb-2">{style.label}</h3>
                        <p className="text-gray-600">{style.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* 配音选择 */}
            <Card className="shadow-xl border-0">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl flex items-center justify-center">
                  <Mic className="w-6 h-6 mr-2 text-orange-500" />
                  配音类型
                </CardTitle>
                <CardDescription>
                  选择适合您故事的配音风格
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {voiceOptions.map((voice) => (
                    <Card
                      key={voice.value}
                      className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
                        formData.voice === voice.value
                          ? 'ring-2 ring-orange-500 bg-orange-50'
                          : 'hover:bg-gray-50'
                      }`}
                      onClick={() => setFormData({...formData, voice: voice.value})}
                    >
                      <CardContent className="p-4">
                        <h3 className="font-semibold text-lg mb-2">{voice.label}</h3>
                        <p className="text-gray-600">{voice.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* 生成按钮 */}
            <div className="text-center">
              <Button
                onClick={generateStory}
                disabled={!formData.style || !formData.voice || loading}
                className="bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600 text-white px-8 py-4 text-lg"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    生成中...
                  </>
                ) : (
                  <>
                    <Sparkles className="w-5 h-5 mr-2" />
                    开始生成故事
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-orange-50 to-blue-50 flex items-center justify-center">
        <Card className="max-w-md mx-auto shadow-xl border-0">
          <CardContent className="p-8 text-center">
            <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-pink-500 to-orange-500 rounded-full flex items-center justify-center">
              <Sparkles className="w-8 h-8 text-white animate-pulse" />
            </div>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              正在创作您的故事...
            </h3>
            
            <Progress value={progress} className="mb-4" />
            
            <p className="text-gray-600">
              请稍候，AI 正在为您创作专属的儿童绘本
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-orange-50 to-blue-50 flex items-center justify-center">
        <Card className="max-w-md mx-auto shadow-xl border-0">
          <CardContent className="p-8 text-center">
            <AlertCircle className="w-16 h-16 mx-auto mb-4 text-red-500" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">生成失败</h3>
            <Alert variant="destructive" className="mb-4">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
            <Button
              onClick={() => setStep(2)}
              className="bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600 text-white"
            >
              重新尝试
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  // 故事展示页面
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-orange-50 to-blue-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="mb-8">
          <Button
            variant="outline"
            onClick={onBack}
            className="mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            返回首页
          </Button>
          
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <CheckCircle className="w-8 h-8 text-green-500 mr-2" />
              <h1 className="text-4xl font-bold text-gray-900">
                故事创作
                <span className="bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent">
                  完成！
                </span>
              </h1>
            </div>
            <p className="text-xl text-gray-600 mb-8">
              您的专属儿童绘本已经完成，快来欣赏吧！
            </p>
          </div>
        </div>

        <div className="space-y-8">
          {/* 故事标题和操作按钮 */}
          <Card className="shadow-xl border-0">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl mb-4">{generatedStory?.title}</CardTitle>
              <div className="flex justify-center space-x-4">
                <Button
                  onClick={handlePlayAudio}
                  className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white"
                >
                  {isPlaying ? (
                    <>
                      <Pause className="w-4 h-4 mr-2" />
                      暂停播放
                    </>
                  ) : (
                    <>
                      <Play className="w-4 h-4 mr-2" />
                      播放故事
                    </>
                  )}
                </Button>
                
                <Button
                  variant="outline"
                  onClick={handleShare}
                  className="border-orange-200 text-orange-600 hover:bg-orange-50"
                >
                  <Share2 className="w-4 h-4 mr-2" />
                  分享故事
                </Button>
                
                <Button
                  variant="outline"
                  onClick={handleDownload}
                  className="border-green-200 text-green-600 hover:bg-green-50"
                >
                  <Download className="w-4 h-4 mr-2" />
                  下载故事
                </Button>
              </div>
            </CardHeader>
          </Card>

          {/* 故事插画 */}
          <Card className="shadow-xl border-0">
            <CardHeader>
              <CardTitle className="text-2xl text-center">精美插画</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                {generatedStory?.illustrations.map((illustration, index) => (
                  <div
                    key={index}
                    className="aspect-square bg-gradient-to-br from-pink-100 to-orange-100 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <img
                      src={illustration}
                      alt={`插画 ${index + 1}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* 故事内容 */}
          <Card className="shadow-xl border-0">
            <CardHeader>
              <CardTitle className="text-2xl text-center">故事内容</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="prose prose-lg max-w-none">
                {generatedStory?.content.split('\n').map((paragraph, index) => (
                  <p key={index} className="mb-4 text-gray-700 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* 再次创作按钮 */}
          <div className="text-center">
            <Button
              onClick={() => setStep(1)}
              className="bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600 text-white px-8 py-4 text-lg"
            >
              <Sparkles className="w-5 h-5 mr-2" />
              创作新故事
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}