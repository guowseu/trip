import React, { useState, useEffect } from 'react';
import { HelpCircle, ChevronRight, ArrowLeft, RefreshCw } from 'lucide-react';

// Cultural interests types with their icons, names, and descriptions
const culturalInterests = [
  { 
    id: 'national_parks', 
    emoji: '🏞️', 
    name: '国家公园', 
    description: '壮丽自然风光',
    primaryColor: '#3B82F6',
    secondaryColor: '#93C5FD'
  },
  { 
    id: 'skyscrapers', 
    emoji: '🏙️', 
    name: '摩天大楼', 
    description: '城市繁华景象',
    primaryColor: '#4F46E5',
    secondaryColor: '#A5B4FC'
  },
  { 
    id: 'theme_parks', 
    emoji: '🎢', 
    name: '主题公园', 
    description: '娱乐游玩胜地',
    primaryColor: '#0EA5E9',
    secondaryColor: '#7DD3FC'
  },
  { 
    id: 'political_landmarks', 
    emoji: '🏛️', 
    name: '政治地标', 
    description: '历史政治遗迹',
    primaryColor: '#0D9488',
    secondaryColor: '#5EEAD4'
  },
  { 
    id: 'beach_resorts', 
    emoji: '🏖️', 
    name: '海滨度假', 
    description: '阳光沙滩胜地',
    primaryColor: '#2563EB',
    secondaryColor: '#BFDBFE'
  },
  { 
    id: 'road_trips', 
    emoji: '🚗', 
    name: '公路旅行', 
    description: '自驾探险之旅',
    primaryColor: '#1E40AF',
    secondaryColor: '#93C5FD'
  },
  { 
    id: 'famous_schools', 
    emoji: '🎓', 
    name: '名校情结', 
    description: '顶尖学府文化',
    primaryColor: '#3B82F6',
    secondaryColor: '#DBEAFE'
  },
  { 
    id: 'local_cuisine', 
    emoji: '🥩', 
    name: '特色美食', 
    description: '舌尖上的体验',
    primaryColor: '#1D4ED8',
    secondaryColor: '#BFDBFE'
  },
  { 
    id: 'music_culture', 
    emoji: '🎸', 
    name: '音乐文化', 
    description: '音乐艺术氛围',
    primaryColor: '#0369A1',
    secondaryColor: '#7DD3FC'
  }
];

// Recommendation templates based on selected combinations
const recommendationTemplates = [
  // National Parks + Road Trips
  {
    ids: ['national_parks', 'road_trips'],
    recommendations: [
      {
        title: '川藏线越野',
        matchPercentage: 87,
        features: [
          { name: '雪山', rating: 5 },
          { name: '驾驶难度', rating: 3 }
        ]
      },
      {
        title: '河西走廊穿越',
        matchPercentage: 76,
        features: [
          { name: '沙漠', rating: 4 },
          { name: '文化密度', rating: 5 }
        ]
      },
      {
        title: '大兴安岭探险',
        matchPercentage: 65,
        features: [
          { name: '森林', rating: 3 },
          { name: '动物遇见率', rating: 4 }
        ]
      }
    ]
  },
  // Skyscrapers + Music Culture
  {
    ids: ['skyscrapers', 'music_culture'],
    recommendations: [
      {
        title: '上海夜生活探索',
        matchPercentage: 92,
        features: [
          { name: '摩登建筑', rating: 5 },
          { name: '爵士酒吧', rating: 4 }
        ]
      },
      {
        title: '深圳科技音乐节',
        matchPercentage: 85,
        features: [
          { name: '创新音乐', rating: 5 },
          { name: '城市景观', rating: 4 }
        ]
      },
      {
        title: '成都说唱文化',
        matchPercentage: 73,
        features: [
          { name: '民间艺术', rating: 4 },
          { name: '城市氛围', rating: 3 }
        ]
      }
    ]
  },
  // Beach Resorts + Local Cuisine
  {
    ids: ['beach_resorts', 'local_cuisine'],
    recommendations: [
      {
        title: '海南岛美食之旅',
        matchPercentage: 90,
        features: [
          { name: '热带海滩', rating: 5 },
          { name: '海鲜盛宴', rating: 5 }
        ]
      },
      {
        title: '大连滨海食光',
        matchPercentage: 82,
        features: [
          { name: '城市海岸', rating: 4 },
          { name: '东北海鲜', rating: 4 }
        ]
      },
      {
        title: '舟山群岛渔家乐',
        matchPercentage: 78,
        features: [
          { name: '原始海岸', rating: 3 },
          { name: '渔民美食', rating: 5 }
        ]
      }
    ]
  },
  // Default recommendations for other combinations
  {
    ids: ['default'],
    recommendations: [
      {
        title: '北京文化体验',
        matchPercentage: 80,
        features: [
          { name: '历史遗迹', rating: 5 },
          { name: '现代艺术', rating: 4 }
        ]
      },
      {
        title: '西安古都之旅',
        matchPercentage: 75,
        features: [
          { name: '古代文明', rating: 5 },
          { name: '美食文化', rating: 4 }
        ]
      },
      {
        title: '云南多元文化探索',
        matchPercentage: 70,
        features: [
          { name: '民族多样性', rating: 5 },
          { name: '自然风光', rating: 4 }
        ]
      }
    ]
  }
];

// Geographic conflict groups
const geographicConflicts = [
  ['national_parks', 'skyscrapers', 'political_landmarks'], // Geographic conflict group 1
  ['beach_resorts', 'theme_parks', 'political_landmarks']   // Geographic conflict group 2
];

// Special recommendations for extreme cases
const specialRecommendations = {
  // For geographic conflicts (when user selects multiple locations with conflicts)
  mixedGeography: {
    title: '文化混搭大师',
    description: '检测到您跨越东西部的兴趣',
    recommendation: {
      title: '深圳"一日看尽长安花"路线',
      items: [
        '上午：腾讯大厦数字艺术展（现代）',
        '下午：大鹏所城明清海防遗址（历史）',
        '夜晚：世界之窗环球风情（多元）'
      ]
    }
  },
  // For zero selections
  zeroSelection: {
    title: '智能推荐',
    description: '基于您的位置',
    recommendations: [
      {
        title: '三亚冲浪文化（类比马里布）',
        matchPercentage: 92,
        features: [
          { name: '海滩活力', rating: 5 },
          { name: '阳光指数', rating: 5 }
        ]
      },
      {
        title: '云南咖啡庄园（类比纳帕谷）',
        matchPercentage: 85,
        features: [
          { name: '气候宜人', rating: 4 },
          { name: '风景如画', rating: 5 }
        ]
      },
      {
        title: '成都说唱俱乐部（类比洛杉矶）',
        matchPercentage: 78,
        features: [
          { name: '文化氛围', rating: 4 },
          { name: '城市活力', rating: 4 }
        ]
      }
    ]
  }
};

// Check if there are geographic conflicts in selected interests
const hasGeographicConflicts = (selectedInterests: string[]): boolean => {
  for (const conflictGroup of geographicConflicts) {
    const conflictsInGroup = conflictGroup.filter(id => selectedInterests.includes(id));
    if (conflictsInGroup.length > 1) {
      return true;
    }
  }
  return false;
};

/**
 * CulturalPalette Component - 文化基因配对系统
 * 
 * 该组件实现了"文化基因配对法则"的核心思想：
 * 1. 提取基因片段（分析你的母国偏好）
 * 2. 寻找同源序列（匹配中国相似体验）
 * 3. 重组新型基因（生成跨文化旅行方案）
 * 
 * 三大核心数学规则：
 * 1. 兴趣浓度检测：选择的图标数量反映兴趣专注度
 *    公式: 兴趣强度 = 1.5^(选择数量) × 基础权重
 * 
 * 2. 文化光谱融合：不同选择的距离决定创新程度
 *    公式: 创新值 = 最远选项间距 × log(选项数)
 * 
 * 3. 隐性需求推导：未选图标暗示排斥方向
 *    公式: 排斥系数 = (总图标数 - 选择数) / 总图标数
 */

// Get recommendations based on selected interests
const getRecommendations = (selectedInterests: string[]) => {
  // 规则一：兴趣浓度检测 - 选择数量越多，推荐强度越高
  const interestIntensity = Math.pow(1.5, selectedInterests.length) * 100;
  const intensityBoost = interestIntensity > 120; // 当强度超过120%时触发强化推荐
  
  // 规则二：文化光谱融合 - 计算选择之间的"文化距离"
  let maxDistance = 0;
  let innovationValue = 0;
  
  if (selectedInterests.length >= 2) {
    // 计算九宫格坐标
    const getPosition = (id: string): [number, number] => {
      const index = culturalInterests.findIndex(item => item.id === id);
      const row = Math.floor(index / 3);
      const col = index % 3;
      return [row, col];
    };
    
    // 计算两点之间的最大距离
    for (let i = 0; i < selectedInterests.length; i++) {
      for (let j = i + 1; j < selectedInterests.length; j++) {
        const [r1, c1] = getPosition(selectedInterests[i]);
        const [r2, c2] = getPosition(selectedInterests[j]);
        const distance = Math.sqrt(Math.pow(r2 - r1, 2) + Math.pow(c2 - c1, 2));
        maxDistance = Math.max(maxDistance, distance);
      }
    }
    
    // 计算创新值
    innovationValue = maxDistance * Math.log10(selectedInterests.length);
  }
  
  // 规则三：隐性需求推导 - 计算排斥系数
  const totalOptions = culturalInterests.length;
  const rejectionCoefficient = (totalOptions - selectedInterests.length) / totalOptions;
  const extremeRejection = rejectionCoefficient > 0.8; // 当排斥系数>0.8触发极致体验
  
  // 根据计算的指标进行匹配推荐
  // Try to match specific combinations first
  for (const template of recommendationTemplates) {
    const { ids, recommendations } = template;
    if (ids[0] !== 'default' && selectedInterests.includes(ids[0]) && selectedInterests.includes(ids[1])) {
      // 如果匹配到特定组合，根据强度和创新值进行调整
      const enhancedRecommendations = [...recommendations];
      
      if (intensityBoost || innovationValue > 0.7) {
        // 增强推荐的特色性和独特性
        enhancedRecommendations.forEach(rec => {
          // 增加匹配度
          rec.matchPercentage = Math.min(99, rec.matchPercentage + 5);
          // 增强特性评分
          rec.features.forEach((feature: any) => {
            if (feature.rating < 5) feature.rating += 1;
          });
        });
      }
      
      return enhancedRecommendations;
    }
  }
  
  // If no specific match, return default recommendations with possible adjustments
  const defaultRecs = [...recommendationTemplates.find(t => t.ids[0] === 'default')!.recommendations];
  
  // 如果是极致排斥情况，提供更专注的体验
  if (extremeRejection && selectedInterests.length === 1) {
    const focusedRecs = defaultRecs.map(rec => {
      const newRec = {...rec};
      // 提高匹配度
      newRec.matchPercentage += 10;
      // 增加更极致的体验描述
      return newRec;
    });
    return focusedRecs;
  }
  
  return defaultRecs;
};

interface CulturalPaletteProps {
  selectedIdentities: string[];
  onComplete: (selectedInterests: string[]) => void;
}

const CulturalPalette: React.FC<CulturalPaletteProps> = ({ 
  selectedIdentities, 
  onComplete 
}) => {
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [currentRecommendations, setCurrentRecommendations] = useState<any[]>([]);
  const [dynamicHeading, setDynamicHeading] = useState('');
  const [hasConflicts, setHasConflicts] = useState(false);
  const [specialCase, setSpecialCase] = useState<string | null>(null);
  
  // Update recommendations when selections change
  useEffect(() => {
    if (selectedInterests.length === 0) {
      // Zero selection case
      setCurrentRecommendations([]);
      setSpecialCase('zero');
      setHasConflicts(false);
    } else if (hasGeographicConflicts(selectedInterests)) {
      // Geographic conflict case
      setCurrentRecommendations([]);
      setSpecialCase('conflict');
      setHasConflicts(true);
    } else {
      // Normal case
      setCurrentRecommendations(getRecommendations(selectedInterests));
      setSpecialCase(null);
      setHasConflicts(false);
    }
  }, [selectedInterests]);
  
  // Set dynamic heading based on first identity
  useEffect(() => {
    if (selectedIdentities.includes('influencer')) {
      setDynamicHeading('拍出你的文化基因！');
    } else if (selectedIdentities.includes('history')) {
      setDynamicHeading('发现文明的对话密码');
    } else {
      setDynamicHeading('选择你的美国旅行DNA 🧬 → 生成中国冒险配方');
    }
  }, [selectedIdentities]);
  
  // Handle interest selection
  const toggleInterest = (id: string) => {
    if (selectedInterests.includes(id)) {
      // Remove interest if already selected
      setSelectedInterests(prev => prev.filter(item => item !== id));
    } else {
      // Add interest
      setSelectedInterests(prev => [...prev, id]);
    }
  };
  
  // Refresh recommendations
  const refreshRecommendations = () => {
    // Simple shuffle algorithm to simulate new recommendations
    setCurrentRecommendations(prev => [...prev].sort(() => Math.random() - 0.5));
  };
  
  // Handle continue button click
  const handleContinue = () => {
    if (selectedInterests.length > 0) {
      onComplete(selectedInterests);
    } else {
      // Auto-select default options if user hasn't chosen any
      const defaultInterests = ['national_parks', 'local_cuisine'];
      setSelectedInterests(defaultInterests);
      setTimeout(() => onComplete(defaultInterests), 1000);
    }
  };
  
  // Handle skip button
  const handleSkip = () => {
    setSpecialCase('zero');
    // Wait a moment to show the recommendations, then proceed
    setTimeout(() => {
      onComplete(['beach_resorts', 'local_cuisine']);
    }, 2000);
  };
  
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden bg-gradient-to-b from-blue-50 to-blue-100">
      {/* 装饰元素 */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-300/20 to-blue-500/20 rounded-full -mr-48 -mt-48 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-400/20 to-blue-600/20 rounded-full -ml-48 -mb-48 blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[url('https://images.unsplash.com/photo-1516893842880-5d8aada7ac05?q=80&w=1470&auto=format&fit=crop')] bg-cover bg-center opacity-5"></div>
      
      {/* Top navigation bar */}
      <div className="flex items-center justify-between p-5 border-b border-blue-100 backdrop-blur-sm bg-white/70 z-10 shadow-sm">
        <div className="flex items-center">
          <ArrowLeft size={18} className="text-blue-600 mr-2" />
          <span className="text-sm text-blue-800 font-medium">返回修改身份</span>
        </div>
        <button className="p-2 hover:bg-blue-50 rounded-full transition-colors">
          <HelpCircle size={18} className="text-blue-600" />
        </button>
      </div>
      
      {/* Dynamic heading */}
      <div className="px-6 pt-12 pb-10 text-center relative z-10">
        <h2 className="text-3xl font-bold text-blue-900 mb-3">
          {dynamicHeading}
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto mt-8 rounded-full"></div>
      </div>
      
      {/* Grid of cultural interests */}
      <div className="px-6 flex-1 relative z-10">
        <div className="grid grid-cols-3 gap-6">
          {culturalInterests.map((interest) => {
            const isSelected = selectedInterests.includes(interest.id);
            
            return (
              <button
                key={interest.id}
                onClick={() => toggleInterest(interest.id)}
                className={`
                  aspect-square flex flex-col items-center justify-center rounded-2xl p-3 transition-all duration-300
                  ${isSelected ? 'transform scale-105' : 'transform scale-100'}
                  hover:shadow-md
                `}
                style={{
                  background: isSelected 
                    ? `linear-gradient(135deg, ${interest.primaryColor}20, ${interest.secondaryColor}30)` 
                    : 'rgba(255, 255, 255, 0.7)',
                  backdropFilter: 'blur(12px)',
                  boxShadow: isSelected 
                    ? `0 10px 20px rgba(0,0,0,0.08), 0 0 0 1px rgba(255,255,255,0.5), 0 0 0 3px ${interest.primaryColor}40` 
                    : '0 4px 12px rgba(0,0,0,0.05), 0 0 0 1px rgba(255,255,255,0.1)',
                }}
              >
                <div 
                  className={`
                    text-4xl mb-3 transition-all duration-300
                    ${isSelected ? 'transform scale-110 animate-float' : 'transform scale-100'}
                  `}
                >
                  {interest.emoji}
                </div>
                <div className={`text-sm font-medium ${isSelected ? 'text-blue-800' : 'text-blue-700'}`}>
                  {interest.name}
                </div>
                {isSelected && (
                  <div className="absolute top-3 right-3 w-5 h-5 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                )}
                {isSelected && (
                  <div 
                    className="absolute inset-0 rounded-2xl overflow-hidden"
                    style={{
                      background: `linear-gradient(90deg, ${interest.primaryColor}10, ${interest.secondaryColor}20, ${interest.primaryColor}10)`,
                      opacity: 0.7,
                      animation: 'pulse 2s infinite'
                    }}
                  >
                    {/* Particle animation effect here when selected */}
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </div>
      
      {/* Recommendations preview */}
      {currentRecommendations.length > 0 && !hasConflicts && specialCase !== 'zero' && (
        <div className="px-6 mt-6">
          <div className="p-5 bg-white/80 backdrop-blur-xl rounded-xl border border-blue-100 relative z-10 shadow-lg">
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-medium text-blue-800">
                当前选择：{selectedInterests.map(id => 
                  culturalInterests.find(i => i.id === id)?.emoji
                ).join(' + ')}
              </h3>
              <button 
                onClick={refreshRecommendations}
                className="p-1 text-blue-500 hover:text-blue-700 transition-colors"
              >
                <RefreshCw size={16} />
              </button>
            </div>
            
            <div className="space-y-4">
              {currentRecommendations.slice(0, 3).map((rec, index) => (
                <div key={index} className="border-b border-blue-50 pb-4 last:border-0">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-blue-800">
                      {index + 1}️⃣ {rec.title}
                    </span>
                    <span className="text-xs bg-blue-100 text-blue-800 py-0.5 px-2 rounded-full">
                      {rec.matchPercentage}%匹配度
                    </span>
                  </div>
                  
                  <div className="mt-3 grid grid-cols-2 gap-2">
                    {rec.features.map((feature: any, fIndex: number) => (
                      <div key={fIndex} className="flex items-center">
                        <span className="mr-2 text-blue-700">{
                          feature.name.includes('雪山') ? '🏔️' :
                          feature.name.includes('沙漠') ? '🏜️' :
                          feature.name.includes('森林') ? '🌲' :
                          feature.name.includes('海滩') || feature.name.includes('海岸') ? '🏖️' :
                          feature.name.includes('摩登') || feature.name.includes('城市') ? '🏙️' :
                          feature.name.includes('音乐') || feature.name.includes('爵士') ? '🎵' :
                          feature.name.includes('美食') || feature.name.includes('海鲜') ? '🍲' :
                          feature.name.includes('历史') || feature.name.includes('古代') ? '🏺' :
                          feature.name.includes('文化') || feature.name.includes('民族') ? '👥' :
                          '✨'
                        } {feature.name}</span>
                        <div className="flex space-x-0.5">
                          {Array(5).fill(0).map((_, i) => (
                            <div 
                              key={i} 
                              className={`w-3 h-2 rounded-sm ${i < feature.rating ? 'bg-blue-500 rating-bar' : 'bg-blue-100'}`} 
                              style={{ animationDelay: `${i * 0.1}s` }}
                            />
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      
      {/* Special case: Geographic conflicts */}
      {hasConflicts && specialCase === 'conflict' && (
        <div className="px-6 mt-6">
          <div className="p-5 bg-white/80 backdrop-blur-xl rounded-xl border border-blue-100 relative z-10 shadow-lg">
            <div className="flex items-center mb-3">
              <span className="inline-block p-1 bg-blue-100 text-blue-800 rounded-md mr-2">🎭</span>
              <h3 className="font-medium text-blue-800">
                {specialRecommendations.mixedGeography.title}
              </h3>
            </div>
            
            <p className="text-blue-700 text-sm mb-3">
              {specialRecommendations.mixedGeography.description}
            </p>
            
            <div className="border-l-4 border-blue-500 pl-3 py-2 mb-3 bg-blue-50/50 rounded-r-lg">
              <h4 className="font-medium text-blue-800">
                {specialRecommendations.mixedGeography.recommendation.title}
              </h4>
              <ul className="mt-2 space-y-1">
                {specialRecommendations.mixedGeography.recommendation.items.map((item, idx) => (
                  <li key={idx} className="text-sm text-blue-700">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
      
      {/* Special case: Zero selection */}
      {specialCase === 'zero' && selectedInterests.length === 0 && (
        <div className="px-6 mt-6">
          <div className="p-5 bg-white/80 backdrop-blur-xl rounded-xl border border-blue-100 relative z-10 shadow-lg">
            <div className="flex items-center mb-3">
              <span className="inline-block p-1 bg-blue-100 text-blue-800 rounded-md mr-2">🌎</span>
              <h3 className="font-medium text-blue-800">
                {specialRecommendations.zeroSelection.title}
              </h3>
            </div>
            
            <p className="text-blue-700 text-sm mb-3">
              {specialRecommendations.zeroSelection.description}
            </p>
            
            <div className="space-y-4">
              {specialRecommendations.zeroSelection.recommendations.map((rec, index) => (
                <div key={index} className="border-b border-blue-50 pb-4 last:border-0 animate-card-flip" style={{ animationDelay: `${index * 0.2}s` }}>
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-blue-800">
                      {index + 1}️⃣ {rec.title}
                    </span>
                    <span className="text-xs bg-blue-100 text-blue-800 py-0.5 px-2 rounded-full">
                      {rec.matchPercentage}%匹配度
                    </span>
                  </div>
                  
                  <div className="mt-3 grid grid-cols-2 gap-2">
                    {rec.features.map((feature: any, fIndex: number) => (
                      <div key={fIndex} className="flex items-center">
                        <span className="mr-2 text-blue-700">✨ {feature.name}</span>
                        <div className="flex space-x-0.5">
                          {Array(5).fill(0).map((_, i) => (
                            <div 
                              key={i} 
                              className={`w-3 h-2 rounded-sm ${i < feature.rating ? 'bg-blue-500 rating-bar' : 'bg-blue-100'}`} 
                              style={{ animationDelay: `${(i * 0.1) + (index * 0.2)}s` }}
                            />
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      
      {/* Bottom action buttons */}
      <div className="p-6 border-t border-blue-100 bg-white/80 backdrop-blur-xl relative z-10">
        <button
          onClick={handleContinue}
          className="w-full py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl font-medium flex items-center justify-center shadow-md hover:shadow-lg transition-all animate-pulse-glow"
        >
          锁定此方案 <ChevronRight size={18} className="ml-1" />
        </button>
        
        <button
          onClick={specialCase === 'zero' ? handleSkip : () => setSelectedInterests([])}
          className="w-full mt-3 py-2.5 text-blue-500 text-sm hover:text-blue-700 transition-colors"
        >
          {specialCase === 'zero' ? '跳过，稍后设置' : '清除选择'}
        </button>
      </div>
    </div>
  );
};

export default CulturalPalette;
