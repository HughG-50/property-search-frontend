import React from 'react';
import { Router } from '@reach/router';
import HomeView from './HomeView';
import ListingsView from './components/ListingsView';

function App() {
  return (
    <Router>
      <HomeView path="/" />
      <ListingsView path="ryde" endpointName="ryde" />
      <ListingsView path="strathfield" endpointName="strathfield" />
    </Router>
  );
}

export default App;
