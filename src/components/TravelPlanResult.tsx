import React, { useState } from 'react';
import { ArrowLeft, Share2, Download, Calendar, MapPin, Clock, Camera, ChevronRight, Plus } from 'lucide-react';
import LocalImage from './LocalImage';

// 旅行计划结果页面
const TravelPlanResult = ({ onBack, tripId, onViewResult }: { onBack?: () => void; tripId?: number; onViewResult?: (tripId: any) => void }) => {
  const [activeTab, setActiveTab] = useState<'plan' | 'story'>('plan');
  const [activeDay, setActiveDay] = useState(1);
  const [showShareOptions, setShowShareOptions] = useState(false);
  const [showCustomizeModal, setShowCustomizeModal] = useState(false);
  const [showDetailModal, setShowDetailModal] = useState(false);
  
  // 模拟的旅行计划数据
  const tripData = {
    title: '东京文化探索之旅',
    dates: '2024.10.15 - 2024.10.19',
    duration: '共5天',
    location: '东京, 日本',
    weather: '晴朗 | 18°C - 24°C',
    days: [
      {
        day: 1,
        date: '10月15日',
        activities: [
          {
            time: '09:00',
            title: '浅草寺参观',
            location: '浅草寺, 东京',
            duration: '预计2小时',
            description: '参观东京最古老的寺庙，感受日本传统文化氛围。',
            nextTransport: '地铁 约15分钟',
            type: 'sightseeing'
          },
          {
            time: '12:00',
            title: '午餐',
            location: '浅草寺附近美食街',
            duration: '预计1.5小时',
            description: '品尝当地特色小吃，如天妇罗和寿司。',
            nextTransport: '步行 约15分钟',
            type: 'food'
          },
          {
            time: '14:00',
            title: '东京晴空塔',
            location: '东京晴空塔, 东京',
            duration: '预计3小时',
            description: '登上东京最高的塔，俯瞰东京全景。',
            nextTransport: '地铁 约15分钟',
            type: 'sightseeing'
          },
          {
            time: '18:00',
            title: '晚餐',
            location: '银座区',
            duration: '预计2小时',
            description: '在东京高级餐厅享用正宗日式料理。',
            nextTransport: '地铁 约20分钟',
            type: 'food'
          }
        ]
      },
      {
        day: 2,
        date: '10月16日',
        activities: [
          {
            time: '08:30',
            title: '秋叶原电器街',
            location: '秋叶原, 东京',
            duration: '预计3小时',
            description: '探索日本最大的电子产品和动漫中心，体验日本科技与流行文化。',
            nextTransport: '地铁 约20分钟',
            type: 'sightseeing'
          },
          {
            time: '12:00',
            title: '女仆咖啡厅午餐',
            location: '秋叶原, 东京',
            duration: '预计1.5小时',
            description: '体验独特的日本亚文化，在女仆咖啡厅享用特色午餐。',
            nextTransport: '地铁 约25分钟',
            type: 'food'
          },
          {
            time: '14:30',
            title: '上野公园',
            location: '上野, 东京',
            duration: '预计2.5小时',
            description: '漫步于东京最大的公园之一，欣赏自然风光和文化景点。',
            nextTransport: '步行 约10分钟',
            type: 'sightseeing'
          },
          {
            time: '17:30',
            title: '东京国立博物馆',
            location: '上野, 东京',
            duration: '预计2小时',
            description: '参观日本最古老、最大的博物馆，了解日本丰富的历史和文化。',
            nextTransport: '地铁 约15分钟',
            type: 'sightseeing'
          },
          {
            time: '20:00',
            title: '居酒屋晚餐',
            location: '上野, 东京',
            duration: '预计2小时',
            description: '在传统日本居酒屋享用晚餐，体验当地人的夜生活。',
            nextTransport: '地铁 约25分钟',
            type: 'food'
          }
        ]
      },
      {
        day: 3,
        date: '10月17日',
        activities: [
          {
            time: '09:00',
            title: '明治神宫',
            location: '涩谷区, 东京',
            duration: '预计2小时',
            description: '参观东京最重要的神道教圣地，漫步于宁静的森林中。',
            nextTransport: '步行 约15分钟',
            type: 'sightseeing'
          },
          {
            time: '11:30',
            title: '原宿购物',
            location: '原宿, 东京',
            duration: '预计2.5小时',
            description: '在竹下通和表参道探索时尚商店和独特的街头文化。',
            nextTransport: '步行 约10分钟',
            type: 'shopping'
          },
          {
            time: '14:30',
            title: '午餐',
            location: '原宿, 东京',
            duration: '预计1.5小时',
            description: '品尝原宿特色美食，如彩虹棉花糖和创意可丽饼。',
            nextTransport: '地铁 约10分钟',
            type: 'food'
          },
          {
            time: '16:30',
            title: '涩谷十字路口',
            location: '涩谷区, 东京',
            duration: '预计1小时',
            description: '体验世界上最繁忙的十字路口，感受东京的都市脉搏。',
            nextTransport: '步行 约15分钟',
            type: 'sightseeing'
          },
          {
            time: '18:00',
            title: '涩谷购物',
            location: '涩谷区, 东京',
            duration: '预计2小时',
            description: '在涩谷的百货商店和特色商店购物，体验现代东京的消费文化。',
            nextTransport: '地铁 约20分钟',
            type: 'shopping'
          },
          {
            time: '20:30',
            title: '晚餐',
            location: '涩谷区, 东京',
            duration: '预计2小时',
            description: '在涩谷的时尚餐厅享用晚餐，品尝创新的日本料理。',
            nextTransport: '地铁 约25分钟',
            type: 'food'
          }
        ]
      },
      {
        day: 4,
        date: '10月18日',
        activities: []
      },
      {
        day: 5,
        date: '10月19日',
        activities: []
      }
    ]
  };

  // 模拟的旅行故事
  const tripStories = [
    {
      day: 1,
      title: '东京初印象：浅草寺与晴空塔的一天',
      content: `清晨的阳光洒在东京的街道上，我踏上了探索这座城市的第一步。浅草寺是我的第一站，这座东京最古老的寺庙充满了历史的气息。

穿过雷门，巨大的红色灯笼映入眼帘，上面写着"雷门"两个大字。参道两旁是热闹的商店街，贩卖着各种日本传统小吃和纪念品。我买了一个幸运符，据说可以保佑旅途平安。

寺庙的主殿前，香炉里袅袅升起的烟雾中，游客们争相沐浴，相传这烟雾有治愈的功效。我也跟随人群，让烟雾环绕全身，感受这份神秘的祝福。

午餐时分，我在浅草寺附近的美食街品尝了正宗的天妇罗和寿司。新鲜的食材配上精湛的烹饪技艺，让我对日本料理有了全新的认识。

下午，我前往东京晴空塔。电梯迅速将我送到450米高的观景台，整个东京城尽收眼底。远处的富士山若隐若现，东京湾的蓝色水面在阳光下闪闪发光。我在这里拍了无数照片，试图捕捉这座城市的每一个角落。

夜幕降临，晴空塔亮起了蓝色的灯光，如同一座巨大的灯塔，为东京的夜空增添了一抹亮色。晚餐我选择了银座区的一家高级餐厅，品尝了怀石料理，每一道菜都如同艺术品般精致。

回到酒店，回想今天的经历，我已经爱上了这座城市的节奏和文化。明天，新的探索等待着我，我迫不及待想要发现东京更多的魅力。`,
      images: [
        'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?q=80&w=2070&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?q=80&w=2036&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1570521462033-3015e76e7432?q=80&w=2071&auto=format&fit=crop'
      ]
    },
    {
      day: 2,
      title: '秋叶原与上野公园：科技与自然的交融',
      content: `今天的行程从秋叶原开始，这里是动漫、电子产品和游戏的天堂。街道两旁是五颜六色的霓虹灯招牌，各种动漫人物的巨幅海报挂在高楼上，吸引着无数游客的目光。

我走进一家大型电器店，里面琳琅满目的电子产品让我目不暇接。从最新款的相机到各种家用电器，应有尽有。我忍不住买了一个小型相机配件，作为旅行的纪念。

中午，我在一家女仆咖啡厅用餐，这是秋叶原特有的文化体验。身着可爱女仆装的服务员用甜美的声音欢迎我的到来，为我点的食物画上可爱的图案。这种独特的用餐体验让我感受到了日本亚文化的魅力。

下午，我前往上野公园，这是东京最大的公园之一。秋天的公园里，枫叶已经开始泛红，与绿色的松树形成鲜明对比。我漫步在公园的小径上，呼吸着新鲜的空气，感受着大自然的宁静。

上野公园内的东京国立博物馆是我下一个目的地。博物馆收藏了大量日本古代艺术品，从陶瓷、绘画到武士盔甲，让我深入了解了日本的历史和文化。

晚上，我在上野的一家居酒屋享用晚餐。小小的店面里坐满了下班后来喝一杯的上班族。我点了几样推荐的小菜和一杯清酒，融入当地人的生活节奏。老板热情地向我介绍每道菜的特点，尽管语言不通，但美食拉近了我们的距离。

结束了充实的一天，我带着满满的收获回到酒店。东京的魅力在于它能够完美地融合传统与现代、科技与自然，让每个游客都能找到属于自己的那份惊喜。`,
      images: [
        'https://images.unsplash.com/photo-1551641506-ee5bf4cb45f1?q=80&w=2071&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?q=80&w=2070&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1526289034009-0240ddb68ce3?q=80&w=2071&auto=format&fit=crop'
      ]
    },
    {
      day: 3,
      title: '涩谷与原宿：时尚与流行的交汇',
      content: `今天的行程从涩谷开始，这里是东京时尚的中心。涩谷十字路口是世界上最繁忙的十字路口之一，我在这里感受到了东京的都市脉搏。

接着，我前往原宿，这里是东京时尚的另一个中心。竹下通和表参道是时尚的天堂，我在这里发现了许多独特的时尚品牌和潮流店铺。

中午，我在原宿的时尚餐厅用餐，品尝了创新的日本料理。下午，我继续探索原宿的时尚店铺和文化景点。

晚上，我回到涩谷，享用了涩谷的夜生活。涩谷的夜生活是东京最丰富的夜生活之一，我在这里体验到了东京的夜生活文化。

结束了充实的一天，我带着满满的收获回到酒店。东京的魅力在于它能够完美地融合传统与现代、时尚与流行，让每个游客都能找到属于自己的那份惊喜。`,
      images: [
        'https://images.unsplash.com/photo-1551641506-ee5bf4cb45f1?q=80&w=2071&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?q=80&w=2070&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1526289034009-0240ddb68ce3?q=80&w=2071&auto=format&fit=crop'
      ]
    }
  ];

  // 获取当前日期的故事
  const getCurrentDayStory = () => {
    const story = tripStories.find(story => story.day === activeDay);
    if (story) return story;
    
    // 如果没有找到当前日期的故事，返回默认内容
    return {
      day: activeDay,
      title: `第${activeDay}天的旅行故事`,
      content: '这一天的旅行故事正在创作中...',
      images: []
    };
  };

  // 显示活动图标
  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'sightseeing':
        return <Camera size={20} className="text-blue-500" />;
      case 'food':
        return <div className="text-orange-500">🍽️</div>;
      case 'shopping':
        return <div className="text-green-500">🛍️</div>;
      default:
        return <div className="text-gray-500">📍</div>;
    }
  };

  // 分享功能
  const handleShare = () => {
    setShowShareOptions(true);
  };

  // 下载功能
  const handleDownload = () => {
    alert('旅行计划已保存到本地');
  };

  // 查看详情功能
  const handleViewDetails = () => {
    if (onViewResult && tripId) {
      onViewResult(tripId);
    } else {
      setShowDetailModal(true);
    }
  };

  // 自定义行程
  const handleCustomizePlan = () => {
    setShowCustomizeModal(true);
  };

  // 关闭模态框
  const closeModals = () => {
    setShowShareOptions(false);
    setShowCustomizeModal(false);
    setShowDetailModal(false);
  };

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      {/* 顶部导航栏 */}
      <div className="bg-white p-4 flex items-center justify-between shadow-sm">
        <button onClick={onBack} className="p-2">
          <ArrowLeft size={20} />
        </button>
        <h1 className="text-lg font-bold">行程规划</h1>
        <div className="flex">
          <button className="p-2" onClick={handleShare}>
            <Share2 size={20} />
          </button>
          <button className="p-2" onClick={handleDownload}>
            <Download size={20} />
          </button>
        </div>
      </div>

      {/* 旅行信息卡片 */}
      <div className="p-4">
        <div className="bg-white rounded-xl p-4 shadow-sm">
          <div className="flex justify-between items-start">
            <h2 className="text-xl font-bold text-left">{tripData.title}</h2>
            <button className="text-blue-500" onClick={handleViewDetails}>
              <ChevronRight size={20} />
            </button>
          </div>
          
          <div className="flex items-center text-gray-500 text-sm mt-2 text-left">
            <Calendar size={14} className="mr-1" />
            <span>{tripData.dates} · {tripData.duration}</span>
          </div>
          
          <div className="flex items-center text-gray-500 text-sm mt-1 text-left">
            <MapPin size={14} className="mr-1" />
            <span>{tripData.location}</span>
          </div>
          
          <div className="flex justify-between items-center mt-4">
            <div className="flex items-center text-left">
              <span className="text-yellow-500 mr-1">☀️</span>
              <span className="text-sm">{tripData.weather}</span>
            </div>
            <button className="text-xs text-blue-500 border border-blue-500 rounded-full px-3 py-1" onClick={handleViewDetails}>
              查看详情
            </button>
          </div>
        </div>
      </div>

      {/* 标签切换 */}
      <div className="flex bg-white shadow-sm">
        <button 
          className={`flex-1 py-4 text-sm font-medium ${activeTab === 'plan' ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-500'}`}
          onClick={() => setActiveTab('plan')}
        >
          行程安排
        </button>
        <button 
          className={`flex-1 py-4 text-sm font-medium ${activeTab === 'story' ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-500'}`}
          onClick={() => setActiveTab('story')}
        >
          旅行故事
        </button>
      </div>

      {/* 内容区域 */}
      <div className="p-4 pb-16 overflow-y-auto">
        {activeTab === 'plan' && (
          <div>
            {/* 天数选择器 */}
            <div className="flex overflow-x-auto pb-2 -mx-1">
              {tripData.days.map((day) => (
                <div 
                  key={day.day} 
                  className={`flex-shrink-0 mx-1 px-4 py-2 rounded-lg ${day.day === activeDay ? 'bg-blue-500 text-white' : 'bg-white text-gray-700'} cursor-pointer`}
                  onClick={() => setActiveDay(day.day)}
                >
                  <div className="text-sm font-medium text-left">第{day.day}天</div>
                  <div className="text-xs mt-1 text-left">{day.date}</div>
                </div>
              ))}
            </div>

            {/* 当天行程 */}
            <div className="mt-4">
              {/* 行程标题 */}
              <div className="flex items-center mb-4">
                <Calendar size={18} className="text-blue-500 mr-2" />
                <span className="text-lg font-bold">第{activeDay}天行程</span>
              </div>

              {/* 行程时间线 */}
              <div className="relative">
                {activeDay <= 3 ? (
                  tripData.days[activeDay - 1].activities.map((activity, index) => (
                    <div key={index} className="mb-6 relative">
                      {/* 时间线 */}
                      <div className="absolute left-[30px] top-0 bottom-0 w-0.5 bg-gray-200" 
                           style={{ display: index === tripData.days[activeDay - 1].activities.length - 1 ? 'none' : 'block' }}></div>
                      
                      {/* 活动卡片 */}
                      <div className="flex">
                        {/* 时间 */}
                        <div className="w-[60px] text-right pr-4 pt-1">
                          <div className="text-sm font-medium">{activity.time}</div>
                        </div>
                        
                        {/* 图标 */}
                        <div className="relative z-10 w-[40px] flex justify-center">
                          <div className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center">
                            {getActivityIcon(activity.type)}
                          </div>
                        </div>
                        
                        {/* 活动内容 */}
                        <div className="flex-1 ml-3 bg-white rounded-xl p-4 shadow-sm">
                          <h3 className="font-bold text-left">{activity.title}</h3>
                          
                          <div className="flex items-center text-gray-500 text-xs mt-2 text-left">
                            <MapPin size={12} className="mr-1" />
                            <span>{activity.location}</span>
                          </div>
                          
                          <div className="flex items-center text-gray-500 text-xs mt-1 text-left">
                            <Clock size={12} className="mr-1" />
                            <span>{activity.duration}</span>
                          </div>
                          
                          <p className="text-sm text-gray-600 mt-3 text-left">{activity.description}</p>
                          
                          {activity.nextTransport && (
                            <div className="mt-3 pt-2 border-t border-gray-100 text-xs text-gray-500 text-left">
                              下一站：{activity.nextTransport.includes('地铁') ? '🚇' : '🚶‍♂️'} {activity.nextTransport}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="bg-white rounded-xl p-6 shadow-sm text-center">
                    <div className="text-gray-500 mb-4">第{activeDay}天的行程正在规划中...</div>
                    <button 
                      className="text-blue-500 border border-blue-500 rounded-full px-4 py-2 text-sm"
                      onClick={handleCustomizePlan}
                    >
                      自定义行程
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'story' && (
          <div className="bg-white rounded-xl p-4 shadow-sm">
            <h2 className="text-xl font-bold mb-4 text-left">{getCurrentDayStory().title}</h2>
            
            {/* 故事图片 */}
            <div className="flex overflow-x-auto -mx-2 pb-4 mb-4">
              {getCurrentDayStory().images.map((image, index) => (
                <div key={index} className="flex-shrink-0 w-[250px] h-[150px] mx-2 rounded-xl overflow-hidden">
                  <img src={image} alt="旅行照片" className="w-full h-full object-cover" />
                </div>
              ))}
              {getCurrentDayStory().images.length === 0 && (
                <div className="flex-shrink-0 w-full h-[150px] mx-2 rounded-xl overflow-hidden bg-gray-100 flex items-center justify-center">
                  <span className="text-gray-400">暂无照片</span>
                </div>
              )}
            </div>
            
            {/* 故事内容 */}
            <div className="text-gray-700 leading-relaxed whitespace-pre-line text-left">
              {getCurrentDayStory().content}
            </div>
          </div>
        )}
      </div>

      {/* 分享选项模态框 */}
      {showShareOptions && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={closeModals}>
          <div className="bg-white rounded-xl p-5 w-80 m-4" onClick={e => e.stopPropagation()}>
            <h3 className="text-lg font-medium mb-4">分享到</h3>
            <div className="grid grid-cols-4 gap-4 mb-6">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center mb-1">
                  <span className="text-white text-xl">W</span>
                </div>
                <span className="text-xs">微信</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-blue-400 flex items-center justify-center mb-1">
                  <span className="text-white text-xl">Q</span>
                </div>
                <span className="text-xs">QQ</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-red-500 flex items-center justify-center mb-1">
                  <span className="text-white text-xl">W</span>
                </div>
                <span className="text-xs">微博</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center mb-1">
                  <span className="text-white text-xl">D</span>
                </div>
                <span className="text-xs">短信</span>
              </div>
            </div>
            <div className="flex justify-end">
              <button className="px-4 py-2 text-blue-500" onClick={closeModals}>取消</button>
            </div>
          </div>
        </div>
      )}

      {/* 自定义行程模态框 */}
      {showCustomizeModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={closeModals}>
          <div className="bg-white rounded-xl p-5 w-90 max-w-md m-4" onClick={e => e.stopPropagation()}>
            <h3 className="text-lg font-medium mb-4 text-left">自定义第{activeDay}天行程</h3>
            
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 text-left mb-1">日期</label>
              <input 
                type="text" 
                className="w-full p-2 border border-gray-300 rounded-lg"
                defaultValue={activeDay === 4 ? "10月18日" : "10月19日"}
              />
            </div>
            
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 text-left mb-1">添加活动</label>
              <div className="space-y-3">
                <div className="flex items-center border border-gray-300 rounded-lg p-3">
                  <div className="mr-3">🕙</div>
                  <div className="flex-1">
                    <input 
                      type="text" 
                      className="w-full border-b border-gray-200 pb-1 mb-1 focus:outline-none"
                      placeholder="活动名称"
                    />
                    <input 
                      type="text" 
                      className="w-full text-sm text-gray-600 focus:outline-none"
                      placeholder="地点和时间"
                    />
                  </div>
                </div>
                <button className="w-full border border-dashed border-gray-300 rounded-lg p-3 text-gray-500 flex items-center justify-center">
                  <Plus size={18} className="mr-1" /> 添加更多活动
                </button>
              </div>
            </div>
            
            <div className="flex justify-end space-x-3 mt-6">
              <button className="px-4 py-2 text-gray-500 border border-gray-300 rounded-lg" onClick={closeModals}>取消</button>
              <button className="px-4 py-2 bg-blue-500 text-white rounded-lg" onClick={closeModals}>保存</button>
            </div>
          </div>
        </div>
      )}

      {/* 详情模态框 */}
      {showDetailModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={closeModals}>
          <div className="bg-white rounded-xl p-5 w-90 max-w-md m-4 max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
            <h3 className="text-lg font-medium mb-4 text-left">{tripData.title}</h3>
            
            <div className="space-y-4 text-left">
              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-1">旅行日期</h4>
                <p className="text-gray-900">{tripData.dates}</p>
              </div>
              
              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-1">旅行地点</h4>
                <p className="text-gray-900">{tripData.location}</p>
              </div>
              
              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-1">天气情况</h4>
                <p className="text-gray-900">{tripData.weather}</p>
              </div>
              
              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-1">旅行主题</h4>
                <p className="text-gray-900">文化体验，美食探索</p>
              </div>
              
              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-1">适合人群</h4>
                <p className="text-gray-900">情侣，朋友，家庭</p>
              </div>
              
              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-1">建议预算</h4>
                <p className="text-gray-900">约8000元/人</p>
              </div>
              
              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-1">行程亮点</h4>
                <ul className="list-disc list-inside text-gray-900">
                  <li>游览东京最古老的寺庙浅草寺</li>
                  <li>登上东京晴空塔俯瞰全城美景</li>
                  <li>探索秋叶原的电器街和动漫文化</li>
                  <li>在原宿体验日本潮流时尚</li>
                  <li>品尝正宗日式料理和特色小吃</li>
                </ul>
              </div>
            </div>
            
            <div className="flex justify-end mt-6">
              <button className="px-4 py-2 text-blue-500" onClick={closeModals}>关闭</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TravelPlanResult;
