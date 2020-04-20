import React from 'react';
import { Login } from './components/Login';
import { Products } from './components/Products';

function App() {
  return (
    <>
      <Login />
      <Products 
        randomProp="so random" 
        onLogout={() => 'What happens if we pass this in? Does it override the actual logout method?'}
      />
    </>
  );
}

export default App;
