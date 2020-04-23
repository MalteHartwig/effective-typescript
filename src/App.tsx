import React from 'react';
import { Login } from './components/Login';
import { Products } from './components/Products/Products';

function App() {
  return (
    <>
      <Login />
      <Products title="I have the best products" />
    </>
  );
}

export default App;
