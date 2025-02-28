import React, { useState } from 'react';
import { Calendar, MapPin, Heart, MessageCircle, Share2, ArrowLeft, List, Plus, Camera, Search, Filter, X, Sparkles, Edit, Grid } from 'lucide-react';

const RecordPage = () => {
  const [viewMode, setViewMode] = useState('grid');
  const [showDetail, setShowDetail] = useState(false);
  const [showAICreator, setShowAICreator] = useState(false);
  
  if (showDetail) {
    return <RecordDetailPage onBack={() => setShowDetail(false)} />;
  }

  if (showAICreator) {
    return <AILogCreator onBack={() => setShowAICreator(false)} />;
  }
  
  return (
    <div className="bg-gray-50 min-h-screen pb-16">
      <div className="p-4">
        <header className="flex justify-between items-center mb-4">
          <h1 className="text-xl font-bold text-gray-800">旅行日志</h1>
          <div className="flex space-x-2">
            <button className="p-2 bg-gray-100 rounded-full">
              <Search size={20} className="text-gray-600" />
            </button>
            <button className="p-2 bg-gray-100 rounded-full">
              <Filter size={20} className="text-gray-600" />
            </button>
          </div>
        </header>
        
        {/* 视图切换和创建按钮 */}
        <div className="flex justify-between items-center mb-4">
          <div className="flex bg-gray-100 rounded-lg p-1">
            <button 
              className={`p-1.5 rounded-md ${viewMode === 'grid' ? 'bg-white shadow-sm' : ''}`}
              onClick={() => setViewMode('grid')}
            >
              <Grid size={18} />
            </button>
            <button 
              className={`p-1.5 rounded-md ${viewMode === 'list' ? 'bg-white shadow-sm' : ''}`}
              onClick={() => setViewMode('list')}
            >
              <List size={18} />
            </button>
          </div>
          
          <button 
            className="flex items-center justify-center space-x-1 bg-blue-500 text-white rounded-full px-4 py-2 shadow-md"
            onClick={() => setShowAICreator(true)}
          >
            <Plus size={18} />
            <span>AI旅行日志</span>
          </button>
        </div>
        
        {/* 记录标签筛选 */}
        <div className="flex space-x-2 overflow-x-auto pb-2 mb-4 hide-scrollbar">
          <button className="whitespace-nowrap px-3 py-1.5 bg-blue-500 text-white rounded-full text-sm">
            全部记录
          </button>
          <button className="whitespace-nowrap px-3 py-1.5 bg-gray-100 text-gray-600 rounded-full text-sm">
            美食探索
          </button>
          <button className="whitespace-nowrap px-3 py-1.5 bg-gray-100 text-gray-600 rounded-full text-sm">
            文化体验
          </button>
          <button className="whitespace-nowrap px-3 py-1.5 bg-gray-100 text-gray-600 rounded-full text-sm">
            自然风光
          </button>
        </div>
        
        {/* 记录内容 - 网格视图 */}
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-2 gap-3">
            {[1, 2, 3, 4].map(item => (
              <div 
                key={item}
                onClick={() => setShowDetail(true)}
                className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100"
              >
                <div className="h-32 bg-gray-200 relative">
                  {item === 1 && (
                    <img 
                      src="https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&w=300&auto=format&fit=crop" 
                      alt="东京美食" 
                      className="w-full h-full object-cover"
                    />
                  )}
                  {item === 2 && (
                    <img 
                      src="https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?q=80&w=300&auto=format&fit=crop" 
                      alt="东京街景" 
                      className="w-full h-full object-cover"
                    />
                  )}
                  {item === 3 && (
                    <img 
                      src="https://images.unsplash.com/photo-1528360983277-13d401cdc186?q=80&w=300&auto=format&fit=crop" 
                      alt="东京寺庙" 
                      className="w-full h-full object-cover"
                    />
                  )}
                  {item === 4 && (
                    <img 
                      src="https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?q=80&w=300&auto=format&fit=crop" 
                      alt="东京夜景" 
                      className="w-full h-full object-cover"
                    />
                  )}
                  <div className="absolute bottom-2 left-2 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded-full flex items-center">
                    <MapPin size={10} className="mr-1" /> 东京, 日本
                  </div>
                </div>
                <div className="p-2">
                  <h3 className="font-medium text-sm">东京美食探索 #{item}</h3>
                  <div className="flex justify-between items-center mt-1">
                    <span className="text-xs text-gray-500">2025.01.15</span>
                    <div className="flex items-center space-x-2">
                      <span className="text-xs text-gray-500 flex items-center">
                        <Heart size={10} className="mr-0.5" /> 24
                      </span>
                      <span className="text-xs text-gray-500 flex items-center">
                        <MessageCircle size={10} className="mr-0.5" /> 5
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {[1, 2, 3].map(item => (
              <div 
                key={item}
                onClick={() => setShowDetail(true)}
                className="bg-white rounded-xl p-3 shadow-sm border border-gray-100 flex"
              >
                <div className="w-20 h-20 bg-gray-200 rounded-lg mr-3">
                  {item === 1 && (
                    <img 
                      src="https://images.unsplash.com/photo-1493976040374-85c8e12f92ce?q=80&w=300&auto=format&fit=crop" 
                      alt="京都风景" 
                      className="w-full h-full object-cover rounded-lg"
                    />
                  )}
                  {item === 2 && (
                    <img 
                      src="https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?q=80&w=300&auto=format&fit=crop" 
                      alt="京都寺庙" 
                      className="w-full h-full object-cover rounded-lg"
                    />
                  )}
                  {item === 3 && (
                    <img 
                      src="https://images.unsplash.com/photo-1493997181344-712f2f19d87a?q=80&w=300&auto=format&fit=crop" 
                      alt="京都神社" 
                      className="w-full h-full object-cover rounded-lg"
                    />
                  )}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between">
                    <h3 className="font-medium">京都赏枫之旅 #{item}</h3>
                    <span className="text-xs text-gray-500">2024.11.20</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1 line-clamp-2">
                    在京都的红叶季节，漫步于古老的寺庙和花园中，感受日本传统文化的魅力...
                  </p>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-xs bg-red-50 text-red-600 px-2 py-0.5 rounded-full">
                      文化体验
                    </span>
                    <div className="flex items-center space-x-3">
                      <span className="text-xs text-gray-500 flex items-center">
                        <Heart size={12} className="mr-1" /> 36
                      </span>
                      <span className="text-xs text-gray-500 flex items-center">
                        <MessageCircle size={12} className="mr-1" /> 8
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      
      {/* 浮动创建按钮 */}
      <button 
        className="fixed right-6 bottom-20 bg-blue-500 text-white p-3 rounded-full shadow-lg"
      >
        <Plus size={24} />
      </button>
    </div>
  );
};

// AI旅行日志创建页面
interface AILogCreatorProps {
  onBack: () => void;
}

const AILogCreator = ({ onBack }: AILogCreatorProps) => {
  const [photos, setPhotos] = useState<string[]>([]);
  const [destination, setDestination] = useState('');
  const [dateRange, setDateRange] = useState('');
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [startDate, setStartDate] = useState<string>('');
  const [endDate, setEndDate] = useState<string>('');
  const [generatedLog, setGeneratedLog] = useState<null | {
    title: string;
    content: string;
    photos: string[];
  }>(null);
  
  // 处理日期选择
  const handleDateSelect = () => {
    if (startDate && endDate) {
      // 格式化日期显示
      const formatDate = (dateStr: string) => {
        const date = new Date(dateStr);
        return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`;
      };
      
      setDateRange(`${formatDate(startDate)} - ${formatDate(endDate)}`);
      setShowDatePicker(false);
    }
  };

  // 添加照片
  const handleAddPhoto = () => {
    // 这里模拟添加照片，实际应用中需要使用文件上传组件
    const mockPhotos = [
      'https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1542051841857-5f90071e7989?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1504198322253-cfa87a0ff60f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    ];
    
    if (photos.length < 10) {
      const randomIndex = Math.floor(Math.random() * mockPhotos.length);
      setPhotos([...photos, mockPhotos[randomIndex]]);
    }
  };
  
  // 删除照片
  const handleRemovePhoto = (index: number) => {
    const newPhotos = [...photos];
    newPhotos.splice(index, 1);
    setPhotos(newPhotos);
  };
  
  // 生成日志
  const handleGenerateLog = () => {
    if (photos.length === 0) return;
    
    // 模拟AI生成过程
    setTimeout(() => {
      setGeneratedLog({
        title: `${destination || '东京'}之旅 - 难忘的${photos.length}天冒险`,
        content: `这是一次令人难忘的旅程。我们来到了${destination || '东京'}，体验了当地的文化和美食。每一天都充满了惊喜和发现，从街头小巷到著名景点，我们留下了许多美好的回忆。特别是当地的美食，让我们流连忘返。这次旅行不仅拓宽了我们的视野，也让我们更加珍惜彼此相处的时光。`,
        photos: photos
      });
    }, 2000);
  };
  
  // 分享日志
  const handleShareLog = () => {
    alert('日志已分享');
  };
  
  return (
    <div className="bg-gray-50 min-h-screen pb-16">
      {/* 顶部导航栏 */}
      <div className="bg-white p-4 flex items-center justify-between shadow-sm">
        <button onClick={onBack} className="p-2">
          <ArrowLeft size={20} />
        </button>
        <h1 className="text-lg font-bold">创建AI旅行日志</h1>
        <div className="w-8"></div>
      </div>
      
      <div className="p-4">
        {!generatedLog ? (
          <>
            {/* 旅行信息输入 */}
            <div className="bg-white rounded-xl p-4 shadow-sm mb-5">
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">目的地</label>
                <input
                  type="text"
                  placeholder="例如：东京、巴黎、纽约"
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                />
              </div>
              
              <div className="mb-6">
                <div className="flex flex-col space-y-4">
                  <div className="flex items-center space-x-2 bg-white p-3 rounded-xl shadow-sm cursor-pointer">
                    <MapPin className="text-gray-400" size={20} />
                    <input
                      type="text"
                      placeholder="输入旅行目的地"
                      className="flex-1 outline-none"
                      value={destination}
                      onChange={(e) => setDestination(e.target.value)}
                    />
                  </div>
                  
                  <div className="relative">
                    <div 
                      className="flex items-center space-x-2 bg-white p-3 rounded-xl shadow-sm cursor-pointer"
                      onClick={() => setShowDatePicker(!showDatePicker)}
                    >
                      <Calendar className="text-gray-400" size={20} />
                      <span className={`flex-1 ${dateRange ? 'text-gray-800' : 'text-gray-400'}`}>
                        {dateRange || '选择旅行日期范围'}
                      </span>
                    </div>
                    
                    {/* 日期选择器 */}
                    {showDatePicker && (
                      <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-md p-4 z-10">
                        <div className="flex flex-col space-y-4">
                          <div>
                            <label className="block text-sm text-gray-600 mb-1">开始日期</label>
                            <input 
                              type="date" 
                              className="w-full p-2 border border-gray-300 rounded-lg"
                              value={startDate}
                              onChange={(e) => setStartDate(e.target.value)}
                            />
                          </div>
                          <div>
                            <label className="block text-sm text-gray-600 mb-1">结束日期</label>
                            <input 
                              type="date" 
                              className="w-full p-2 border border-gray-300 rounded-lg"
                              value={endDate}
                              onChange={(e) => setEndDate(e.target.value)}
                            />
                          </div>
                          <button 
                            className="w-full py-2 bg-blue-500 text-white rounded-lg"
                            onClick={handleDateSelect}
                          >
                            确定
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            
            {/* 照片上传区域 */}
            <div className="bg-white rounded-xl p-4 shadow-sm mb-5">
              <h2 className="text-base font-medium mb-3">上传照片（{photos.length}/10）</h2>
              
              <div className="grid grid-cols-3 gap-2 mb-4">
                {photos.map((photo, index) => (
                  <div key={index} className="relative aspect-square rounded-lg overflow-hidden">
                    <img src={photo} alt="旅行照片" className="w-full h-full object-cover" />
                    <button
                      className="absolute top-1 right-1 bg-black bg-opacity-50 rounded-full p-1"
                      onClick={() => handleRemovePhoto(index)}
                    >
                      <X size={14} className="text-white" />
                    </button>
                  </div>
                ))}
                
                {photos.length < 10 && (
                  <button
                    className="aspect-square rounded-lg border-2 border-dashed border-gray-300 flex flex-col items-center justify-center text-gray-400"
                    onClick={handleAddPhoto}
                  >
                    <Camera size={24} className="mb-1" />
                    <span className="text-xs">添加</span>
                  </button>
                )}
              </div>
              
              <p className="text-xs text-gray-500 mb-3">
                * 上传更多照片可以帮助AI生成更详细的旅行日志
              </p>
              
              <button
                className={`w-full py-3 rounded-lg flex items-center justify-center space-x-2 ${
                  photos.length > 0
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-200 text-gray-500'
                }`}
                onClick={handleGenerateLog}
                disabled={photos.length === 0}
              >
                <Sparkles size={18} />
                <span>AI生成旅行日志</span>
              </button>
            </div>
            
            {/* 提示说明 */}
            <div className="text-xs text-gray-500 leading-relaxed">
              <p className="mb-2">AI旅行日志功能将根据您上传的照片，使用人工智能技术自动生成一篇精美的旅行记录。</p>
              <p>上传的照片越多，生成的内容越丰富。目前支持最多10张照片。</p>
            </div>
          </>
        ) : (
          // 生成结果展示
          <div>
            {/* 日志标题和封面 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm mb-4">
              {/* 封面图 */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={photos[0]} 
                  alt="封面照片" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-4 text-white">
                    <h2 className="text-2xl font-bold">{generatedLog.title}</h2>
                    <div className="flex items-center mt-1 text-sm opacity-90">
                      <Calendar size={14} className="mr-1" />
                      <span 
                        className="cursor-pointer hover:text-blue-400"
                        onClick={() => setShowDatePicker(!showDatePicker)}
                      >
                        {dateRange || '2025年2月15日 - 2025年2月20日'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* 操作按钮 */}
              <div className="flex justify-between items-center p-3 border-t border-gray-100">
                <div className="flex items-center text-gray-500 text-sm">
                  <Heart size={16} className="mr-1" />
                  <span className="mr-3">26</span>
                  <MessageCircle size={16} className="mr-1" />
                  <span>8</span>
                </div>
                <div className="flex space-x-2">
                  <button className="px-3 py-1.5 bg-blue-500 text-white rounded-full flex items-center space-x-1 text-sm" onClick={handleShareLog}>
                    <Share2 size={14} />
                    <span>分享</span>
                  </button>
                  <button className="px-3 py-1.5 border border-gray-300 text-gray-700 rounded-full flex items-center space-x-1 text-sm">
                    <Edit size={14} />
                    <span>编辑</span>
                  </button>
                </div>
              </div>
            </div>
            
            {/* 日志内容 */}
            <div className="bg-white rounded-xl p-5 shadow-sm mb-4">
              {/* 旅行介绍 */}
              <div className="mb-6 text-left">
                <h3 className="text-lg font-semibold mb-3 text-gray-800">旅行介绍</h3>
                <p className="text-gray-700 leading-relaxed">
                  这是一次令人难忘的旅程。我们来到了{destination || '东京'}，体验了当地的文化和美食。每一天都充满了惊喜和发现，从街头小巷到著名景点，我们留下了许多美好的回忆。
                </p>
              </div>
              
              {/* 第一天 */}
              <div className="mb-6 text-left">
                <h3 className="text-lg font-semibold mb-3 text-gray-800">第一天 · 初探{destination || '东京'}</h3>
                
                {/* 图文混排 */}
                <div className="flex flex-col md:flex-row mb-4 gap-4">
                  <div className="md:w-1/2">
                    <p className="text-gray-700 leading-relaxed mb-2">
                      抵达{destination || '东京'}的第一天，我们迫不及待地开始了探索之旅。首先参观了当地最著名的地标建筑，感受这座城市独特的魅力。
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      午餐时，我们品尝了正宗的当地美食，口感鲜美，令人回味无穷。下午漫步在古老的街道上，欣赏两旁精美的建筑和店铺。
                    </p>
                  </div>
                  <div className="md:w-1/2 h-48 rounded-lg overflow-hidden">
                    {photos.length > 1 && (
                      <img src={photos[1]} alt="第一天照片" className="w-full h-full object-cover" />
                    )}
                  </div>
                </div>
                
                {/* 小标签 */}
                <div className="flex flex-wrap gap-2 mt-2">
                  <span className="px-2 py-1 bg-blue-50 text-blue-600 rounded-full text-xs">城市探索</span>
                  <span className="px-2 py-1 bg-green-50 text-green-600 rounded-full text-xs">美食体验</span>
                  <span className="px-2 py-1 bg-yellow-50 text-yellow-600 rounded-full text-xs">文化之旅</span>
                </div>
              </div>
              
              {/* 第二天 */}
              <div className="mb-6 text-left">
                <h3 className="text-lg font-semibold mb-3 text-gray-800">第二天 · 深度体验</h3>
                
                {/* 图文混排（反向） */}
                <div className="flex flex-col md:flex-row-reverse mb-4 gap-4">
                  <div className="md:w-1/2">
                    <p className="text-gray-700 leading-relaxed mb-2">
                      第二天，我们前往了当地著名的历史遗迹，了解这座城市悠久的历史和文化底蕴。导游的精彩讲解让我们对这里有了更深入的认识。
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      下午，我们参加了一个传统工艺体验活动，亲手制作了具有当地特色的手工艺品，这是一次难得的文化交流机会。
                    </p>
                  </div>
                  <div className="md:w-1/2 h-48 rounded-lg overflow-hidden">
                    {photos.length > 2 && (
                      <img src={photos[2]} alt="第二天照片" className="w-full h-full object-cover" />
                    )}
                  </div>
                </div>
                
                {/* 小标签 */}
                <div className="flex flex-wrap gap-2 mt-2">
                  <span className="px-2 py-1 bg-purple-50 text-purple-600 rounded-full text-xs">历史探索</span>
                  <span className="px-2 py-1 bg-red-50 text-red-600 rounded-full text-xs">工艺体验</span>
                </div>
              </div>
              
              {/* 照片集 */}
              <div className="mb-6 text-left">
                <h3 className="text-lg font-semibold mb-3 text-gray-800">精彩瞬间</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {generatedLog.photos.slice(0, 6).map((photo, index) => (
                    <div key={index} className="aspect-square rounded-lg overflow-hidden">
                      <img src={photo} alt={`旅行照片${index + 1}`} className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
              </div>
              
              {/* 旅行总结 */}
              <div className="text-left">
                <h3 className="text-lg font-semibold mb-3 text-gray-800">旅行感悟</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  这次{destination || '东京'}之行不仅拓宽了我们的视野，也让我们更加珍惜彼此相处的时光。在异国他乡的每一天都是一次新的冒险，每一个瞬间都值得铭记。
                </p>
                <p className="text-gray-700 leading-relaxed">
                  特别是当地的美食和人文风情，让我们流连忘返。我们期待着下一次旅行，继续探索这个精彩的世界。
                </p>
                
                {/* 引用框 */}
                <div className="border-l-4 border-blue-500 pl-4 py-2 my-4 bg-blue-50 rounded-r-lg">
                  <p className="text-gray-700 italic">
                    "旅行不在于你去了多远的地方，而在于你看世界的眼光发生了多大的变化。"
                  </p>
                </div>
              </div>
            </div>
            
            {/* 操作按钮 */}
            <div className="flex justify-between mb-4">
              <button 
                className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg"
                onClick={() => setGeneratedLog(null)}
              >
                重新生成
              </button>
              <button className="px-4 py-2 bg-blue-500 text-white rounded-lg">
                保存日志
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// 记录详情页面
type RecordDetailPageProps = {
  onBack: () => void;
};

const RecordDetailPage = ({ onBack }: RecordDetailPageProps) => (
  <div className="bg-white min-h-screen">
    <div className="relative">
      {/* 顶部图片 */}
      <div className="h-64 bg-gray-200">
        <img 
          src="https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&w=800&auto=format&fit=crop" 
          alt="东京美食" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* 返回按钮 */}
      <button 
        onClick={onBack}
        className="absolute top-4 left-4 p-1.5 bg-black bg-opacity-30 rounded-full"
      >
        <ArrowLeft size={20} className="text-white" />
      </button>
      
      {/* 分享按钮 */}
      <button className="absolute top-4 right-4 p-1.5 bg-black bg-opacity-30 rounded-full">
        <Share2 size={20} className="text-white" />
      </button>
    </div>
    
    <div className="p-4">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h1 className="text-xl font-bold">东京美食探索之旅</h1>
          <div className="flex items-center text-sm text-gray-500 mt-1">
            <Calendar size={14} className="mr-1" />
            <span>2025年1月15日</span>
          </div>
        </div>
        
        <div className="flex space-x-3">
          <button className="flex flex-col items-center">
            <Heart size={20} className="text-gray-400" />
            <span className="text-xs text-gray-500 mt-1">24</span>
          </button>
          <button className="flex flex-col items-center">
            <MessageCircle size={20} className="text-gray-400" />
            <span className="text-xs text-gray-500 mt-1">5</span>
          </button>
        </div>
      </div>
      
      <div className="flex items-center mb-4 text-sm">
        <MapPin size={14} className="text-red-500 mr-1" />
        <span className="text-gray-600">东京, 日本</span>
      </div>
      
      <div className="border-t border-gray-100 pt-4 mb-6">
        <p className="text-gray-700 leading-relaxed">
          今天探索了东京的美食文化，从筑地市场的新鲜寿司开始，到银座的高级怀石料理，再到新宿的居酒屋小吃，东京的美食丰富多彩，每一口都充满惊喜。特别是那家隐藏在小巷中的拉面店，汤底浓郁，面条劲道，是此行最难忘的味道。
        </p>
      </div>
      
      <div className="mb-6">
        <h3 className="font-medium mb-2">照片集 (6)</h3>
        <div className="grid grid-cols-3 gap-2">
          <div className="aspect-square bg-gray-200 rounded-lg">
            <img 
              src="https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&w=200&auto=format&fit=crop" 
              alt="东京美食1" 
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="aspect-square bg-gray-200 rounded-lg">
            <img 
              src="https://images.unsplash.com/photo-1579027989536-b7b1f875659b?q=80&w=200&auto=format&fit=crop" 
              alt="东京美食2" 
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="aspect-square bg-gray-200 rounded-lg">
            <img 
              src="https://images.unsplash.com/photo-1611143669185-af224c5e3252?q=80&w=200&auto=format&fit=crop" 
              alt="东京美食3" 
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="aspect-square bg-gray-200 rounded-lg">
            <img 
              src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=200&auto=format&fit=crop" 
              alt="东京美食4" 
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="aspect-square bg-gray-200 rounded-lg">
            <img 
              src="https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?q=80&w=200&auto=format&fit=crop" 
              alt="东京美食5" 
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="aspect-square bg-gray-200 rounded-lg">
            <img 
              src="https://images.unsplash.com/photo-1529042410759-befb1204b468?q=80&w=200&auto=format&fit=crop" 
              alt="东京美食6" 
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
      
      <div>
        <h3 className="font-medium mb-2">评论 (5)</h3>
        <div className="space-y-3">
          {[1, 2].map(item => (
            <div key={item} className="flex">
              <div className="w-8 h-8 rounded-full bg-gray-200 mr-2"></div>
              <div>
                <div className="flex items-center">
                  <span className="font-medium text-sm">用户名{item}</span>
                  <span className="text-xs text-gray-500 ml-2">3小时前</span>
                </div>
                <p className="text-sm text-gray-600 mt-0.5">
                  看起来好棒！我也想去尝尝那家拉面店，能分享一下具体位置吗？
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default RecordPage;