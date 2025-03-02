import React, { useState, useEffect } from 'react';
import { HelpCircle, ChevronRight, Languages } from 'lucide-react';

// Identity types with their icons, names, and colors
const identityTypes = [
  { 
    id: 'explorer', 
    emoji: '🧭', 
    name: '探险家', 
    primaryColor: '#3B82F6',
    secondaryColor: '#93C5FD'
  },
  { 
    id: 'artist', 
    emoji: '🎨', 
    name: '艺术家', 
    primaryColor: '#4F46E5',
    secondaryColor: '#A5B4FC'
  },
  { 
    id: 'foodie', 
    emoji: '🍜', 
    name: '吃货', 
    primaryColor: '#0EA5E9',
    secondaryColor: '#7DD3FC'
  },
  { 
    id: 'influencer', 
    emoji: '📸', 
    name: '网红', 
    primaryColor: '#0D9488',
    secondaryColor: '#5EEAD4'
  },
  { 
    id: 'meditator', 
    emoji: '🧘', 
    name: '冥想者', 
    primaryColor: '#2563EB',
    secondaryColor: '#BFDBFE'
  },
  { 
    id: 'business', 
    emoji: '💼', 
    name: '商务客', 
    primaryColor: '#1E40AF',
    secondaryColor: '#93C5FD'
  },
  { 
    id: 'family', 
    emoji: '👪', 
    name: '家庭客', 
    primaryColor: '#3B82F6',
    secondaryColor: '#DBEAFE'
  },
  { 
    id: 'history', 
    emoji: '📚', 
    name: '历史迷', 
    primaryColor: '#1D4ED8',
    secondaryColor: '#BFDBFE'
  },
  { 
    id: 'extreme', 
    emoji: '🏂', 
    name: '极限者', 
    primaryColor: '#0369A1',
    secondaryColor: '#7DD3FC'
  }
];

interface IdentityPassportProps {
  onComplete: (selectedIdentities: string[]) => void;
  isFirstTime?: boolean;
}

const IdentityPassport: React.FC<IdentityPassportProps> = ({ onComplete, isFirstTime = true }) => {
  const [selectedIdentities, setSelectedIdentities] = useState<string[]>([]);
  const [recommendation, setRecommendation] = useState<string>('');
  const [shake, setShake] = useState<string | null>(null);
  
  // Calculate recommendation based on selected identities
  useEffect(() => {
    if (selectedIdentities.length >= 2) {
      const primaryIdentity = identityTypes.find(i => i.id === selectedIdentities[0])?.name;
      const secondaryIdentity = identityTypes.find(i => i.id === selectedIdentities[1])?.name;
      
      if (primaryIdentity && secondaryIdentity) {
        const primaryPercentage = 65;
        const secondaryPercentage = 35;
        
        setRecommendation(`您可能是：${primaryPercentage}%${primaryIdentity} + ${secondaryPercentage}%${secondaryIdentity}`);
      }
    } else {
      setRecommendation('');
    }
  }, [selectedIdentities]);
  
  // Handle identity selection
  const toggleIdentity = (id: string) => {
    if (selectedIdentities.includes(id)) {
      // Remove identity if already selected
      setSelectedIdentities(prev => prev.filter(item => item !== id));
    } else {
      // Add identity if not at max limit
      if (selectedIdentities.length < 3) {
        setSelectedIdentities(prev => [...prev, id]);
      } else {
        // Shake effect for max selection
        setShake(id);
        setTimeout(() => setShake(null), 500);
      }
    }
  };
  
  // Handle continue button click
  const handleContinue = () => {
    if (selectedIdentities.length > 0) {
      onComplete(selectedIdentities);
    } else {
      // Auto-select recommendations if user hasn't chosen any
      const autoSelected = ['explorer', 'foodie'];
      setSelectedIdentities(autoSelected);
      setTimeout(() => onComplete(autoSelected), 1000);
    }
  };
  
  // Handle skip button click
  const handleSkip = () => {
    // Default selection if user skips
    const defaultSelection = ['family', 'foodie'];
    onComplete(defaultSelection);
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
          <Languages size={18} className="text-blue-600 mr-2" />
          <span className="text-sm text-blue-800 font-medium">语言选择</span>
        </div>
        <button className="p-2 hover:bg-blue-50 rounded-full transition-colors">
          <HelpCircle size={18} className="text-blue-600" />
        </button>
      </div>
      
      {/* Welcome text */}
      <div className="px-6 pt-12 pb-10 text-center relative z-10">
        <h1 className="text-3xl font-bold text-blue-900 mb-3">选择你的旅行人格DNA</h1>
        <p className="text-blue-700 mt-2 text-lg font-light">开启专属中国冒险！</p>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto mt-8 rounded-full"></div>
      </div>
      
      {/* Identity grid */}
      <div className="px-6 flex-1 relative z-10">
        <div className="grid grid-cols-3 gap-6">
          {identityTypes.map((identity) => {
            const isSelected = selectedIdentities.includes(identity.id);
            const isShaking = shake === identity.id;
            
            return (
              <button
                key={identity.id}
                onClick={() => toggleIdentity(identity.id)}
                className={`
                  aspect-square flex flex-col items-center justify-center rounded-2xl p-3 transition-all duration-300
                  ${isSelected ? 'transform scale-105' : 'transform scale-100'}
                  ${isShaking ? 'animate-shake' : ''}
                `}
                style={{
                  background: isSelected 
                    ? `linear-gradient(135deg, ${identity.primaryColor}20, ${identity.secondaryColor}30)` 
                    : 'rgba(255, 255, 255, 0.7)',
                  backdropFilter: 'blur(12px)',
                  boxShadow: isSelected 
                    ? `0 10px 20px rgba(0,0,0,0.08), 0 0 0 1px rgba(255,255,255,0.5), 0 0 0 3px ${identity.primaryColor}40` 
                    : '0 4px 12px rgba(0,0,0,0.05), 0 0 0 1px rgba(255,255,255,0.1)',
                }}
              >
                <div 
                  className={`
                    text-4xl mb-3 transition-all duration-300
                    ${isSelected ? 'transform scale-110 animate-float' : 'transform scale-100'}
                  `}
                >
                  {identity.emoji}
                </div>
                <div className={`text-sm font-medium ${isSelected ? 'text-blue-800' : 'text-blue-700'}`}>
                  {identity.name}
                </div>
                {isSelected && (
                  <div className="absolute top-3 right-3 w-5 h-5 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </div>
      
      {/* Recommendation preview */}
      {recommendation && (
        <div className="mx-6 mt-6 p-5 bg-white/80 backdrop-blur-xl rounded-xl border border-blue-100 relative z-10 shadow-lg">
          <p className="text-blue-800 font-medium">{recommendation}</p>
          <p className="text-blue-600 text-sm mt-2">
            👉 推荐方向：{
              selectedIdentities[0] === 'explorer' && selectedIdentities[1] === 'foodie' 
                ? '野外生存美食挑战' 
                : selectedIdentities[0] === 'history' && selectedIdentities[1] === 'family'
                  ? '亲子历史探索之旅'
                  : '多元化体验旅程'
            }
          </p>
        </div>
      )}
      
      {/* Selected identities */}
      <div className="px-6 mt-6 mb-4 relative z-10">
        <div className="flex items-center">
          <span className="text-sm text-blue-600 font-medium mr-2">已选：</span>
          <div className="flex space-x-2">
            {selectedIdentities.map(id => {
              const identity = identityTypes.find(i => i.id === id);
              return identity ? (
                <span key={id} className="text-xl bg-white/60 p-1 rounded-lg">{identity.emoji}</span>
              ) : null;
            })}
          </div>
        </div>
      </div>
      
      {/* Bottom action bar */}
      <div className="p-6 border-t border-blue-100 bg-white/80 backdrop-blur-xl relative z-10">
        <button
          onClick={handleContinue}
          className="w-full py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl font-medium flex items-center justify-center shadow-md hover:shadow-lg transition-all animate-pulse-glow"
        >
          继续探索中国 <ChevronRight size={18} className="ml-1" />
        </button>
        
        <button
          onClick={handleSkip}
          className="w-full mt-3 py-2.5 text-blue-500 text-sm hover:text-blue-700 transition-colors"
        >
          跳过，稍后设置
        </button>
      </div>
    </div>
  );
};

export default IdentityPassport;
