import React, { useState } from 'react';
import IoiForm from './components/IoiForm';
import IoiList from './components/IoiList';

function App() {
  // This key forces IoiList to re-render when a new IOI is added
  const [refreshKey, setRefreshKey] = useState(0);

  const handleRefresh = () => {
    setRefreshKey(prev => prev + 1);
  };

  return (
    <div className="App" style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>IOI Manager Dashboard</h1>
      <IoiForm onSuccess={handleRefresh} />
      <IoiList key={refreshKey} />
    </div>
  );
}

export default App;
