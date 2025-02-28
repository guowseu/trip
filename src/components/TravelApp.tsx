import React, { useState, useEffect } from 'react';
import { Map, ChevronRight, Home, Compass, Book, User } from 'lucide-react';
import TravelPlan from './TravelPlan';
import TravelRecord from './TravelRecord';
import UserCenter from './UserCenter';
import TravelPlanResult from './TravelPlanResult';
import LocalImage from './LocalImage';

// 主应用组件
const TravelApp = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [weatherData] = useState({ temp: '24°C', condition: '晴朗' });
  const [userPreferences] = useState({
    preferredDestinations: ['东方汉尼拔', '福尔摩斯探险', '华山论剑'],
    travelStyle: '非遗之路',
    budget: '中等'
  });

  const [upcomingTrips] = useState([
    { id: 1, destination: '华山论剑', dateRange: '2025.03.10 - 2025.03.15', days: 5 },
    { id: 2, destination: '丝绸之路', dateRange: '2025.05.20 - 2025.05.27', days: 7 }
  ]);

  const [travelRecords] = useState([
    { id: 1, destination: '东方汉尼拔', date: '2025.01' },
    { id: 2, destination: '福尔摩斯探险', date: '2024.11' }
  ]);
  
  // 新增状态
  const [selectedTrip, setSelectedTrip] = useState<number | null>(null);
  const [showAllTrips, setShowAllTrips] = useState(false);
  const [showTripDetail, setShowTripDetail] = useState(false);

  // 处理旅行详情查看
  const handleTripDetail = (tripId: number) => {
    setSelectedTrip(tripId);
    setShowTripDetail(true);
  };

  // 返回首页
  const handleBackToHome = () => {
    setShowTripDetail(false);
    setShowAllTrips(false);
    setSelectedTrip(null);
  };

  // 渲染当前活动的页面内容
  const renderContent = () => {
    // 首先处理旅行详情视图
    if (showTripDetail && selectedTrip !== null) {
      return <TravelPlanResult 
                onBack={handleBackToHome} 
                tripId={selectedTrip} 
             />;
    }
    
    // 处理查看所有旅行
    if (showAllTrips) {
      return (
        <div className="bg-gray-50 min-h-screen pb-20">
          <div className="bg-white p-4 flex items-center justify-between shadow-sm">
            <button onClick={handleBackToHome} className="p-2">
              <ChevronRight size={20} className="rotate-180" />
            </button>
            <h1 className="text-lg font-bold">所有旅行计划</h1>
            <div className="w-10"></div>
          </div>
          
          <div className="p-4 space-y-4">
            {upcomingTrips.map(trip => (
              <div 
                key={trip.id} 
                className="bg-white rounded-lg shadow p-4"
                onClick={() => handleTripDetail(trip.id)}
              >
                <div className="flex">
                  <div className="shrink-0 bg-blue-100 rounded-lg p-2 mr-3">
                    <Map size={24} className="text-blue-500" />
                  </div>
                  <div className="flex-1 min-w-0 flex flex-col items-start">
                    <h3 className="font-semibold text-gray-800 text-left">{trip.destination}</h3>
                    <p className="text-xs text-gray-500 mt-1 text-left w-full">{trip.dateRange}</p>
                    <p className="text-xs text-blue-500 mt-1 text-left w-full">{trip.days}天行程</p>
                  </div>
                  <div className="shrink-0 ml-2">
                    <button className="text-sm text-blue-600 whitespace-nowrap">查看详情</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }
    
    // 主标签导航
    switch (activeTab) {
      case 'home':
        return <HomePage 
                onPlanClick={() => setActiveTab('plan')}
                onRecordClick={() => setActiveTab('record')}
                onTripClick={handleTripDetail}
                onViewAllTrips={() => setShowAllTrips(true)}
                weatherData={weatherData}
                userPreferences={userPreferences}
                upcomingTrips={upcomingTrips}
                travelRecords={travelRecords}
               />;
      case 'plan':
        return <TravelPlan 
                 onViewResult={(tripId) => {
                   setSelectedTrip(tripId);
                   setShowTripDetail(true);
                 }}
               />;
      case 'record':
        return <TravelRecord />;
      case 'profile':
        return <UserCenter />;
      default:
        return <HomePage 
                onPlanClick={() => setActiveTab('plan')}
                onRecordClick={() => setActiveTab('record')}
                onTripClick={handleTripDetail}
                onViewAllTrips={() => setShowAllTrips(true)}
                weatherData={weatherData}
                userPreferences={userPreferences}
                upcomingTrips={upcomingTrips}
                travelRecords={travelRecords}
               />;
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen pb-16">
      {/* 主内容区域 */}
      <div className="overflow-y-auto h-[calc(100vh-4rem)]">
        {renderContent()}
      </div>
      
      {/* 底部导航栏 */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 h-16 z-50 shadow-md">
        <div className="flex justify-around items-center h-full">
          <TabButton 
            icon={<Home size={22} />} 
            label="首页" 
            active={activeTab === 'home'} 
            onClick={() => {
              setActiveTab('home');
              setShowTripDetail(false);
              setShowAllTrips(false);
            }} 
          />
          <TabButton 
            icon={<Compass size={22} />} 
            label="规划" 
            active={activeTab === 'plan'} 
            onClick={() => {
              setActiveTab('plan');
              setShowTripDetail(false);
              setShowAllTrips(false);
            }} 
          />
          <TabButton 
            icon={<Book size={22} />} 
            label="日志" 
            active={activeTab === 'record'} 
            onClick={() => {
              setActiveTab('record');
              setShowTripDetail(false);
              setShowAllTrips(false);
            }} 
          />
          <TabButton 
            icon={<User size={22} />} 
            label="我的" 
            active={activeTab === 'profile'} 
            onClick={() => {
              setActiveTab('profile');
              setShowTripDetail(false);
              setShowAllTrips(false);
            }} 
          />
        </div>
      </div>
    </div>
  );
};

// 底部导航按钮组件
const TabButton = ({ icon, label, active, onClick }: { 
  icon: React.ReactNode; 
  label: string; 
  active: boolean; 
  onClick: () => void;
}) => (
  <button 
    onClick={onClick} 
    className={`flex flex-col items-center justify-center w-full h-full ${active ? 'text-blue-500' : 'text-gray-500'}`}
  >
    {icon}
    <span className="text-xs mt-1">{label}</span>
  </button>
);

// 首页组件
const HomePage = ({ 
  onPlanClick, 
  onRecordClick, 
  onTripClick,
  onViewAllTrips,
  weatherData, 
  userPreferences, 
  upcomingTrips, 
  travelRecords 
}: {
  onPlanClick: () => void;
  onRecordClick: () => void;
  onTripClick: (tripId: number) => void;
  onViewAllTrips: () => void;
  weatherData: {
    temp: string;
    condition: string;
  };
  userPreferences: {
    preferredDestinations: string[];
    travelStyle: string;
    budget: string;
  };
  upcomingTrips: {
    id: number;
    destination: string;
    dateRange: string;
    days: number;
  }[];
  travelRecords: {
    id: number;
    destination: string;
    date: string;
  }[];
}) => {
  const [showRecommendation, setShowRecommendation] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowRecommendation(true), 500);
  }, []);

  return (
    <div className="py-4 pb-16 px-5">
      {/* 顶部问候和天气 */}
      <header className="mb-6">
        <div className="flex justify-between items-start">
          <div className="text-left">
            <h1 className="text-2xl font-bold mb-2">你好，旅行者</h1>
            <p className="text-gray-600 text-sm">今天是个探索的好日子！</p>
          </div>
          <div className="text-right">
            <p className="font-medium text-blue-600 text-lg">{weatherData.temp}</p>
            <p className="text-xs text-gray-500">{weatherData.condition}</p>
          </div>
        </div>
      </header>

      {/* AI智能旅行规划 */}
      <section className={`relative overflow-hidden rounded-xl mb-6 transition-all duration-500 ${
        showRecommendation ? 'opacity-100' : 'opacity-0'
      }`}>
        {/* 背景图片 */}
        <div className="absolute inset-0 z-0">
          <LocalImage 
            src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=800&auto=format&fit=crop" 
            alt="旅行背景" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-blue-600 opacity-80"></div>
        </div>
        
        {/* 内容 */}
        <div className="relative z-10 p-4 text-white">
          <div className="flex items-center mb-2">
            <Map size={20} className="mr-2" />
            <h2 className="font-semibold">AI智能旅行规划</h2>
          </div>
          <p className="text-sm mb-3 text-left">基于你的偏好，为你量身定制完美行程</p>
          
          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 mb-3">
            <p className="text-xs font-medium text-left">你的旅行偏好</p>
            <div className="flex flex-wrap gap-2 mt-2">
              {userPreferences.preferredDestinations.map((dest, idx) => (
                <span key={idx} className="text-xs bg-white/30 px-2 py-1 rounded-full">
                  {dest}
                </span>
              ))}
              <span className="text-xs bg-white/30 px-2 py-1 rounded-full">
                {userPreferences.travelStyle}
              </span>
            </div>
          </div>
          
          <button className="w-full bg-white text-blue-600 font-medium py-2.5 rounded-lg flex items-center justify-center shadow-sm hover:bg-blue-50 transition-colors" onClick={onPlanClick}>
            开始智能规划
            <ChevronRight size={16} className="ml-1" />
          </button>
        </div>
      </section>

      {/* 即将开始的旅行 */}
      <section className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-gray-800">即将开始的旅行</h2>
          <button 
            className="text-sm text-blue-600"
            onClick={onViewAllTrips}
          >
            查看全部
          </button>
        </div>

        <div className="space-y-3">
          {upcomingTrips.map((trip, idx) => (
            <div 
              key={idx} 
              className="bg-white rounded-lg shadow cursor-pointer"
              onClick={() => onTripClick(trip.id)}
            >
              <div className="flex p-4">
                <div className="shrink-0 bg-blue-100 rounded-lg p-2 mr-3">
                  <Map size={24} className="text-blue-500" />
                </div>
                <div className="flex-1 min-w-0 flex flex-col items-start">
                  <h3 className="font-semibold text-gray-800 text-left">{trip.destination}</h3>
                  <p className="text-xs text-gray-500 mt-1 text-left w-full">{trip.dateRange}</p>
                  <p className="text-xs text-blue-500 mt-1 text-left w-full">{trip.days}天行程</p>
                </div>
                <div className="shrink-0 ml-2">
                  <button 
                    className="text-sm text-blue-600 whitespace-nowrap"
                    onClick={(e) => {
                      e.stopPropagation();
                      onTripClick(trip.id);
                    }}
                  >
                    查看详情
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 我的旅行日志 */}
      <section className="mt-8">
        <h2 className="text-lg font-semibold mb-4 text-left cursor-pointer" onClick={onRecordClick}>我的旅行日志</h2>
        <div className="space-y-4">
          {travelRecords.map((record, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow p-4 cursor-pointer" onClick={onRecordClick}>
              <div className="flex flex-col">
                <h3 className="font-semibold text-gray-800 text-left">{record.destination}</h3>
                <p className="text-xs text-gray-500 mt-1 mb-3 text-left">{record.date}</p>
                <div className="grid grid-cols-2 gap-2 mt-2">
                  {idx === 0 ? (
                    <>
                      <LocalImage 
                        src="https://images.unsplash.com/photo-1576675466969-38eeae4b41f6?q=80&w=300&auto=format&fit=crop" 
                        alt="香港美食" 
                        className="w-full h-24 object-cover rounded-lg"
                      />
                      <LocalImage 
                        src="https://images.unsplash.com/photo-1536599018102-9f803c140fc1?q=80&w=300&auto=format&fit=crop" 
                        alt="香港街景" 
                        className="w-full h-24 object-cover rounded-lg"
                      />
                    </>
                  ) : (
                    <>
                      <LocalImage 
                        src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=300&auto=format&fit=crop" 
                        alt="福尔摩斯探险" 
                        className="w-full h-24 object-cover rounded-lg"
                      />
                      <LocalImage 
                        src="https://images.unsplash.com/photo-1519791883288-dc8bd696e667?q=80&w=300&auto=format&fit=crop" 
                        alt="福尔摩斯探险" 
                        className="w-full h-24 object-cover rounded-lg"
                      />
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default TravelApp;