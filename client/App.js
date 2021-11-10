import React from 'react';
import Cart from './components/Cart';

import Navbar from './components/Navbar';
import Routes from './Routes';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes />
      <Cart />
    </div>
  );
};

export default App;
