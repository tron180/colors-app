import React from 'react';
import Pallete from './Palette';
import seedColors from './seedColors';

function App() {
  return (
    <div className="App">
      <Pallete {...seedColors[5]} />
    </div>
  );
}

export default App;
