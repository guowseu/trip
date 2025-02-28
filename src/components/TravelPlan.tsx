import React, { useState } from 'react';
import { Calendar, Map, Menu, Plus, ChevronRight, Clock, Camera, Home, Compass, Book, User, Search, Filter, ArrowLeft, Sparkles } from 'lucide-react';
import TravelPlanResult from './TravelPlanResult';

// 主应用组件
const TravelPlan = ({ onViewResult }: { onViewResult?: (tripId: any) => void }) => {
  const [activeTab, setActiveTab] = useState('plan');
  
  // 渲染当前活动的页面内容
  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <HomePage />;
      case 'plan':
        return <PlannerPage onViewResult={onViewResult} />;
      case 'record':
        return <div className="p-4"><h1 className="text-2xl font-bold">旅行日志</h1></div>;
      case 'profile':
        return <div className="p-4"><h1 className="text-2xl font-bold">个人中心</h1></div>;
      default:
        return <HomePage />;
    }
  };
  
  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* 主内容区域 */}
      <div className="flex-1 overflow-y-auto pb-16">
        {renderContent()}
      </div>
      
      {/* 底部导航栏 */}
      <nav className="fixed bottom-0 w-full bg-white border-t border-gray-200 shadow-lg">
        <div className="flex justify-around items-center h-16">
          <TabButton 
            icon={<Home size={24} />} 
            label="首页" 
            active={activeTab === 'home'} 
            onClick={() => setActiveTab('home')} 
          />
          <TabButton 
            icon={<Compass size={24} />} 
            label="规划" 
            active={activeTab === 'plan'} 
            onClick={() => setActiveTab('plan')} 
          />
          <TabButton 
            icon={<Book size={24} />} 
            label="记录" 
            active={activeTab === 'record'} 
            onClick={() => setActiveTab('record')} 
          />
          <TabButton 
            icon={<User size={24} />} 
            label="我的" 
            active={activeTab === 'profile'} 
            onClick={() => setActiveTab('profile')} 
          />
        </div>
      </nav>
    </div>
  );
};

// 底部导航按钮组件
type TabButtonProps = {
  icon: React.ReactNode;
  label: string;
  active: boolean;
  onClick: () => void;
};

const TabButton = ({ icon, label, active, onClick }: TabButtonProps) => (
  <button 
    className={`flex flex-col items-center justify-center w-full py-1 ${active ? 'text-blue-500' : 'text-gray-500'}`}
    onClick={onClick}
  >
    {icon}
    <span className="text-xs mt-1">{label}</span>
  </button>
);

// 首页组件（简化版，仅保留基本结构）
const HomePage = () => (
  <div className="p-4">
    <header className="mb-6">
      <h1 className="text-2xl font-bold text-gray-800">你好，旅行者</h1>
      <p className="text-gray-600">开始规划你的下一次冒险吧！</p>
    </header>
    
    {/* 其他首页内容... */}
  </div>
);

// 规划页面组件
type PlannerPageProps = {
  onViewResult?: (tripId: any) => void;
};

const PlannerPage = ({ onViewResult }: PlannerPageProps) => {
  const [showAIPlanner, setShowAIPlanner] = useState(false);
  const [showPlanResult, setShowPlanResult] = useState(false);
  
  // 如果显示计划结果，则渲染结果页面
  if (showPlanResult) {
    return <TravelPlanResult onBack={() => setShowPlanResult(false)} onViewResult={onViewResult} />;
  }
  
  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      {showAIPlanner ? (
        <AIPlanner onBack={() => setShowAIPlanner(false)} onCreatePlan={() => setShowPlanResult(true)} onViewResult={onViewResult} />
      ) : (
        <PlannerHome onCreateAI={() => setShowAIPlanner(true)} />
      )}
    </div>
  );
};

// 规划首页
type PlannerHomeProps = {
  onCreateAI: () => void;
};

const PlannerHome = ({ onCreateAI }: PlannerHomeProps) => (
  <div className="p-4">
    {/* 顶部搜索栏 */}
    <div className="relative mb-6">
      <input
        type="text"
        placeholder="搜索目的地、景点、活动..."
        className="w-full bg-white rounded-xl py-3 pl-10 pr-4 shadow-sm focus:outline-none"
      />
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
    </div>
    
    {/* 探索世界标题 */}
    <div className="mb-6">
      <h2 className="text-xl font-bold mb-1">探索世界的无限可能</h2>
      <p className="text-gray-500 text-sm">发现令人惊叹的目的地和体验</p>
    </div>
    
    {/* 目的地推荐 */}
    <div className="mb-8">
      <div className="grid grid-cols-2 gap-3">
        <div className="bg-white rounded-xl overflow-hidden shadow-sm relative h-40">
          <img 
            src="https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&w=2487&auto=format&fit=crop"
            alt="东京" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-3">
            <h3 className="text-white font-bold">东京</h3>
            <p className="text-white/80 text-xs">现代与传统的完美融合</p>
          </div>
        </div>
        
        <div className="bg-white rounded-xl overflow-hidden shadow-sm relative h-40">
          <img 
            src="https://images.unsplash.com/photo-1534008897995-27a23e859048?q=80&w=2670&auto=format&fit=crop"
            alt="巴黎" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-3">
            <h3 className="text-white font-bold">巴黎</h3>
            <p className="text-white/80 text-xs">浪漫之都的艺术气息</p>
          </div>
        </div>
      </div>
    </div>
    
    {/* AI旅行规划 */}
    <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-5 mb-6 relative overflow-hidden">
      <div className="absolute right-0 top-0 w-32 h-32 opacity-10">
        <img 
          src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=2035&auto=format&fit=crop" 
          alt="Travel" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <h3 className="text-white text-lg font-bold mb-2">让AI为你定制完美旅程</h3>
      <p className="text-white/80 text-sm mb-4">根据你的偏好和需求，智能生成个性化旅行计划</p>
      
      <button 
        onClick={onCreateAI}
        className="bg-white text-blue-600 py-2.5 px-4 rounded-lg font-medium text-sm flex items-center"
      >
        <Sparkles size={16} className="mr-2" />
        开始AI规划
      </button>
    </div>
    
    {/* 热门体验 */}
    <div className="mb-6">
      <h2 className="text-xl font-bold mb-4">热门体验</h2>
      
      <div className="space-y-3">
        <PlanCard 
          title="东京美食之旅"
          date="2023年12月10日 - 12月15日"
          days={5}
          color="blue"
          progress={80}
          image="https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&w=500&auto=format&fit=crop"
        />
        
        <PlanCard 
          title="巴黎艺术探索"
          date="2024年1月15日 - 1月22日"
          days={7}
          color="green"
          progress={40}
          image="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=500&auto=format&fit=crop"
        />
        
        <PlanCard 
          title="清迈慢生活"
          date="2024年2月10日 - 2月17日"
          days={7}
          color="yellow"
          progress={10}
          image="https://images.unsplash.com/photo-1598935888738-cd2a3c61e91d?q=80&w=500&auto=format&fit=crop"
        />
      </div>
    </div>
  </div>
);

// 规划卡片组件
type PlanCardProps = {
  title: string;
  date: string;
  days: number;
  color: 'blue' | 'green' | 'yellow';
  progress: number;
  image?: string; // 添加可选的图片URL
};

const PlanCard = ({ title, date, days, color, progress, image }: PlanCardProps) => {
  const colorClasses = {
    blue: "bg-blue-100 text-blue-600",
    green: "bg-green-100 text-green-600",
    yellow: "bg-yellow-100 text-yellow-600"
  };
  
  return (
    <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 relative overflow-hidden">
      {/* 背景图片 */}
      {image && (
        <div className="absolute inset-0 opacity-10">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>
      )}
      
      <div className="relative z-10">
        <div className="flex justify-between items-start mb-3">
          <div className="flex items-center">
            <div className={`bg-${color}-100 p-2 rounded-lg mr-3`}>
              <Map size={24} className={`text-${color}-500`} />
            </div>
            <div>
              <h3 className="font-medium">{title}</h3>
              <p className="text-xs text-gray-500 flex items-center">
                <Calendar size={12} className="mr-1" /> {date}
              </p>
            </div>
          </div>
          <span className={`text-xs ${colorClasses[color]} px-2 py-1 rounded-full`}>
            {days}天行程
          </span>
        </div>
        
        <div className="mb-3">
          <div className="flex justify-between text-xs mb-1">
            <span className="text-gray-500">完成度</span>
            <span className="font-medium">{progress}%</span>
          </div>
          <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
            <div 
              className={`h-full bg-${color}-500`} 
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
        
        <div className="flex justify-between">
          <button className="text-gray-500 text-sm flex items-center">
            <Clock size={14} className="mr-1" /> 倒计时: 12天
          </button>
          <button className="text-blue-500 text-sm font-medium">查看详情</button>
        </div>
      </div>
    </div>
  );
};

// AI规划助手页面
type AIPlannerProps = {
  onBack: () => void;
  onCreatePlan: () => void;
  onViewResult?: (tripId: any) => void;
};

const AIPlanner = ({ onBack, onCreatePlan, onViewResult }: AIPlannerProps) => (
  <div className="p-4 min-h-screen bg-gray-50 pb-20">
    <header className="flex items-center mb-6">
      <button onClick={onBack} className="p-1 mr-3">
        <ArrowLeft size={24} className="text-gray-800" />
      </button>
      <h1 className="text-xl font-bold text-gray-800">AI旅行规划助手</h1>
    </header>
    
    {/* 顶部灵感图片区域 */}
    <div className="rounded-xl overflow-hidden mb-6 relative h-40">
      <img 
        src="https://images.unsplash.com/photo-1488085061387-422e29b40080?q=80&w=1000&auto=format&fit=crop" 
        alt="旅行灵感" 
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-60"></div>
      <div className="absolute bottom-0 left-0 p-4 text-white">
        <h2 className="text-xl font-bold">探索世界的无限可能</h2>
        <p className="text-sm opacity-90">让AI为你定制完美旅程</p>
      </div>
    </div>
    
    <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 mb-6">
      <h2 className="text-lg font-semibold mb-3">告诉我你的旅行计划</h2>
      <p className="text-sm text-gray-600 mb-4">
        描述你想去的目的地、旅行时间、预算、兴趣爱好等，AI将为你定制完美行程
      </p>
      
      <textarea 
        className="w-full border border-gray-200 rounded-lg p-3 mb-4 h-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="例如：我想去东京旅行5天，预算1万元，喜欢动漫和美食，希望能去迪士尼..."
      ></textarea>
      
      <div className="flex flex-wrap gap-2 mb-4">
        <button className="px-3 py-1.5 bg-gray-100 text-gray-600 rounded-full text-sm flex items-center hover:bg-gray-200 transition-colors">
          <Calendar size={14} className="mr-1" /> 选择日期
        </button>
        <button className="px-3 py-1.5 bg-gray-100 text-gray-600 rounded-full text-sm flex items-center hover:bg-gray-200 transition-colors">
          <Map size={14} className="mr-1" /> 目的地
        </button>
        <button className="px-3 py-1.5 bg-gray-100 text-gray-600 rounded-full text-sm flex items-center hover:bg-gray-200 transition-colors">
          预算范围
        </button>
        <button className="px-3 py-1.5 bg-gray-100 text-gray-600 rounded-full text-sm flex items-center hover:bg-gray-200 transition-colors">
          旅行主题
        </button>
      </div>
      
      <button 
        className="w-full bg-blue-500 text-white py-3 rounded-xl font-medium mt-6 flex items-center justify-center"
        onClick={onCreatePlan}
      >
        <Sparkles size={18} className="mr-2" />
        生成旅行计划
      </button>
    </div>
    
    <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
      <h3 className="font-medium mb-3 flex items-center">
        <Compass size={18} className="text-blue-500 mr-2" /> 规划小贴士
      </h3>
      <ul className="text-sm text-gray-600 space-y-2.5">
        <li className="flex items-start">
          <span className="text-blue-500 mr-2">•</span> 
          <span>详细描述你的偏好可以获得更精准的规划</span>
        </li>
        <li className="flex items-start">
          <span className="text-blue-500 mr-2">•</span> 
          <span>可以指定具体景点或活动</span>
        </li>
        <li className="flex items-start">
          <span className="text-blue-500 mr-2">•</span> 
          <span>提及特殊需求（如无障碍设施、儿童友好等）</span>
        </li>
        <li className="flex items-start">
          <span className="text-blue-500 mr-2">•</span> 
          <span>说明交通偏好（公共交通、租车等）</span>
        </li>
      </ul>
    </div>
  </div>
);

export default TravelPlan;