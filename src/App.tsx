import React, { useState } from 'react';
import TravelApp from './components/TravelApp';
import './App.css';
import IdentityPassport from './components/IdentityPassport';
import CulturalPalette from './components/CulturalPalette';

function App() {
  const [identitiesSelected, setIdentitiesSelected] = useState(false);
  const [selectedIdentities, setSelectedIdentities] = useState<string[]>([]);
  const [culturalPaletteCompleted, setCulturalPaletteCompleted] = useState(false);
  const [selectedCulturalInterests, setSelectedCulturalInterests] = useState<string[]>([]);

  const handleIdentityComplete = (identities: string[]) => {
    setSelectedIdentities(identities);
    setIdentitiesSelected(true);
  };

  const handleCulturalPaletteComplete = (interests: string[]) => {
    setSelectedCulturalInterests(interests);
    setCulturalPaletteCompleted(true);
  };

  return (
    <div className="App">
      {identitiesSelected ? (
        culturalPaletteCompleted ? (
          <TravelApp 
            selectedIdentities={selectedIdentities}
            selectedInterests={selectedCulturalInterests}
          />
        ) : (
          <CulturalPalette 
            selectedIdentities={selectedIdentities}
            onComplete={handleCulturalPaletteComplete} 
          />
        )
      ) : (
        <IdentityPassport onComplete={handleIdentityComplete} />
      )}
    </div>
  );
}

export default App;
