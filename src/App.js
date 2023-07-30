import React from 'react';
import Particles from './Particles';
function App() {
  return (
    <div className="App" style={{
      position: 'relative',
      width: '100%',
      height: '100%',
      overflow: 'hidden',
      backgroundImage: 'radial-gradient(circle at top left, rgb(254, 254, 246), rgb(116, 115, 108)), radial-gradient(circle at bottom right, #4B4B4Bff, #181818ff)',
    }}>
      <Particles />
      <h1 style={{
        position: 'absolute',
        top: '0',
        zIndex: '1'
      }}>React App</h1>
    </div>
  );
}

export default App;
