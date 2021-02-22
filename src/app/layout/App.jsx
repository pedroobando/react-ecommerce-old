import React from 'react';
import NavBar from '../../features/nav/NavBar';
import HomePage from '../../features/pages/home/HomePage';

const App = () => {
  return (
    <div className="app">
      {/* <NavBar /> */}
      <HomePage Navbar={NavBar()} />
    </div>
  );
};

export default App;
