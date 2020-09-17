import React from 'react';
import { Router } from '@reach/router';
import HomeView from './HomeView';
import RydeListingsView from './RydeListingsView';
import StrathfieldListingsView from './StrathfieldListingsView';

function App() {
  return (
    <Router>
      <HomeView path="/" />
      <RydeListingsView path="ryde" />
      <StrathfieldListingsView path="strathfield" />
    </Router>
  );
}

export default App;
