import React, { useState } from 'react';
import { Settings, ChevronRight, Camera, Edit, MapPin, Heart, MessageCircle, LogOut, CreditCard, Bell, HelpCircle, Shield, Book } from 'lucide-react';

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState('posts');
  
  return (
    <div className="bg-gray-50 min-h-screen pb-16">
      {/* 顶部个人信息卡片 */}
      <div className="bg-white p-6 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-xl font-bold text-gray-800">个人中心</h1>
          <button className="p-2">
            <Settings size={20} className="text-gray-600" />
          </button>
        </div>
        
        <div className="flex items-center">
          <div className="relative">
            <div className="w-24 h-24 rounded-full bg-gray-200 overflow-hidden">
              {/* 用户头像 */}
              <img 
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200&auto=format&fit=crop" 
                alt="用户头像" 
                className="w-full h-full object-cover"
              />
            </div>
            <button className="absolute right-0 bottom-0 bg-blue-500 rounded-full p-1.5 border-2 border-white">
              <Camera size={14} className="text-white" />
            </button>
          </div>
          
          <div className="ml-5 flex-1">
            <div className="flex items-center">
              <h2 className="text-lg font-bold">旅行者小明</h2>
              <button className="ml-2">
                <Edit size={14} className="text-gray-500" />
              </button>
            </div>
            <p className="text-sm text-gray-500 mt-1">热爱旅行、探索世界的美食爱好者</p>
            <div className="flex items-center mt-2 text-xs text-gray-500">
              <MapPin size={12} className="mr-1" />
              <span>上海, 中国</span>
            </div>
          </div>
        </div>
        
        {/* 数据统计 */}
        <div className="flex justify-between mt-6 pt-5 border-t border-gray-100">
          <div className="text-center">
            <p className="text-xl font-bold">42</p>
            <p className="text-xs text-gray-500 mt-1">旅行日志</p>
          </div>
          <div className="text-center">
            <p className="text-xl font-bold">12</p>
            <p className="text-xs text-gray-500 mt-1">规划中</p>
          </div>
          <div className="text-center">
            <p className="text-xl font-bold">128</p>
            <p className="text-xs text-gray-500 mt-1">获赞</p>
          </div>
          <div className="text-center">
            <p className="text-xl font-bold">56</p>
            <p className="text-xs text-gray-500 mt-1">收藏</p>
          </div>
        </div>
      </div>
      
      {/* 标签切换 */}
      <div className="flex bg-white mt-2 border-b border-gray-100 shadow-sm">
        <button 
          className={`flex-1 py-4 text-sm font-medium ${activeTab === 'posts' ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-500'}`}
          onClick={() => setActiveTab('posts')}
        >
          我的记录
        </button>
        <button 
          className={`flex-1 py-4 text-sm font-medium ${activeTab === 'collections' ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-500'}`}
          onClick={() => setActiveTab('collections')}
        >
          我的收藏
        </button>
        <button 
          className={`flex-1 py-4 text-sm font-medium ${activeTab === 'likes' ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-500'}`}
          onClick={() => setActiveTab('likes')}
        >
          我的点赞
        </button>
      </div>
      
      {/* 内容区域 */}
      <div className="p-6">
        {activeTab === 'posts' && (
          <div className="grid grid-cols-2 gap-4">
            {[1, 2, 3, 4, 5, 6].map(item => (
              <div key={item} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100">
                <div className="h-32 bg-gray-200 relative">
                  {item === 1 && (
                    <img 
                      src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=300&auto=format&fit=crop" 
                      alt="巴黎艺术之旅" 
                      className="w-full h-full object-cover"
                    />
                  )}
                  {item === 2 && (
                    <img 
                      src="https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=300&auto=format&fit=crop" 
                      alt="巴黎艺术之旅" 
                      className="w-full h-full object-cover"
                    />
                  )}
                  {item === 3 && (
                    <img 
                      src="https://images.unsplash.com/photo-1503917988258-f87a78e3c995?q=80&w=300&auto=format&fit=crop" 
                      alt="巴黎艺术之旅" 
                      className="w-full h-full object-cover"
                    />
                  )}
                  {item === 4 && (
                    <img 
                      src="https://images.unsplash.com/photo-1550340499-a6c60fc8287c?q=80&w=300&auto=format&fit=crop" 
                      alt="巴黎艺术之旅" 
                      className="w-full h-full object-cover"
                    />
                  )}
                  {item === 5 && (
                    <img 
                      src="https://images.unsplash.com/photo-1524396309943-e03f5249f002?q=80&w=300&auto=format&fit=crop" 
                      alt="巴黎艺术之旅" 
                      className="w-full h-full object-cover"
                    />
                  )}
                  {item === 6 && (
                    <img 
                      src="https://images.unsplash.com/photo-1520939817895-060bdaf4fe1b?q=80&w=300&auto=format&fit=crop" 
                      alt="巴黎艺术之旅" 
                      className="w-full h-full object-cover"
                    />
                  )}
                  <div className="absolute bottom-2 left-2 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded-full flex items-center">
                    <MapPin size={10} className="mr-1" /> 巴黎, 法国
                  </div>
                </div>
                <div className="p-2">
                  <h3 className="font-medium text-sm">巴黎艺术之旅 #{item}</h3>
                  <div className="flex justify-between items-center mt-1">
                    <span className="text-xs text-gray-500">2024.10.15</span>
                    <div className="flex items-center space-x-2">
                      <span className="text-xs text-gray-500 flex items-center">
                        <Heart size={10} className="mr-0.5" /> 18
                      </span>
                      <span className="text-xs text-gray-500 flex items-center">
                        <MessageCircle size={10} className="mr-0.5" /> 3
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        
        {activeTab === 'collections' && (
          <div className="space-y-4">
            <div className="text-center py-8 text-gray-500">
              <Book size={40} className="mx-auto mb-2 text-gray-300" />
              <p>您还没有收藏任何内容</p>
              <button className="mt-3 text-blue-500 text-sm">去探索更多旅行灵感</button>
            </div>
          </div>
        )}
        
        {activeTab === 'likes' && (
          <div className="grid grid-cols-2 gap-4">
            {[1, 2, 3].map(item => (
              <div key={item} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100">
                <div className="h-32 bg-gray-200 relative">
                  {item === 1 && (
                    <img 
                      src="https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=300&auto=format&fit=crop" 
                      alt="京都赏樱之旅" 
                      className="w-full h-full object-cover"
                    />
                  )}
                  {item === 2 && (
                    <img 
                      src="https://images.unsplash.com/photo-1528360983277-13d401cdc186?q=80&w=300&auto=format&fit=crop" 
                      alt="京都赏樱之旅" 
                      className="w-full h-full object-cover"
                    />
                  )}
                  {item === 3 && (
                    <img 
                      src="https://images.unsplash.com/photo-1493997181344-712f2f19d87a?q=80&w=300&auto=format&fit=crop" 
                      alt="京都赏樱之旅" 
                      className="w-full h-full object-cover"
                    />
                  )}
                  <div className="absolute bottom-2 left-2 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded-full flex items-center">
                    <MapPin size={10} className="mr-1" /> 京都, 日本
                  </div>
                </div>
                <div className="p-2">
                  <h3 className="font-medium text-sm">京都赏樱之旅 #{item}</h3>
                  <div className="flex justify-between items-center mt-1">
                    <span className="text-xs text-gray-500">2024.04.05</span>
                    <div className="flex items-center space-x-2">
                      <span className="text-xs text-gray-500 flex items-center">
                        <Heart size={10} className="mr-0.5 text-red-500" /> 42
                      </span>
                      <span className="text-xs text-gray-500 flex items-center">
                        <MessageCircle size={10} className="mr-0.5" /> 7
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      
      {/* 设置选项 */}
      <div className="mt-4 mx-6 bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="divide-y divide-gray-100">
          <SettingItem icon={<CreditCard size={18} />} title="我的会员" />
          <SettingItem icon={<Bell size={18} />} title="消息通知" badge="2" />
          <SettingItem icon={<HelpCircle size={18} />} title="帮助中心" />
          <SettingItem icon={<Shield size={18} />} title="隐私设置" />
        </div>
      </div>
      
      <div className="mt-4 mx-6 bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="divide-y divide-gray-100">
          <SettingItem icon={<LogOut size={18} />} title="退出登录" danger />
        </div>
      </div>
      
      <div className="text-center text-xs text-gray-400 mt-6 mb-4">
        <p>旅程 App v1.0.0</p>
      </div>
    </div>
  );
};

// 设置项组件
type SettingItemProps = {
  icon: React.ReactNode;
  title: string;
  badge?: string | number;
  danger?: boolean;
};

const SettingItem = ({ icon, title, badge, danger }: SettingItemProps) => (
  <div className="flex items-center justify-between p-5">
    <div className="flex items-center">
      <div className={`${danger ? 'text-red-500' : 'text-gray-500'}`}>
        {icon}
      </div>
      <span className={`ml-3 ${danger ? 'text-red-500' : 'text-gray-700'}`}>{title}</span>
    </div>
    <div className="flex items-center">
      {badge && (
        <span className="bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center mr-2">
          {badge}
        </span>
      )}
      <ChevronRight size={18} className="text-gray-400" />
    </div>
  </div>
);

export default ProfilePage;