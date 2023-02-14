import React from 'react';
import {  useColorMode, Button } from '@chakra-ui/react'
import './App.css';

function App() {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    
      <div className="App">
        <header className="App-header">
        <Button onClick={toggleColorMode}>
          Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
        </Button>
        </header>
        <p>This is Ivan Typing</p>
      </div>
  );
}

export default App;
