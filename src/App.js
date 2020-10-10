import React from 'react';
import { Router } from '@reach/router';
import HomeView from './HomeView';
import ListingsView from './components/ListingsView';
import './App.css';

function App() {
  return (
    <Router>
      <HomeView path="/" />
      <ListingsView path="ryde" endpointName="ryde" />
      <ListingsView path="strathfield" endpointName="strathfield" />
      <ListingsView path="parramatta" endpointName="parramatta" />
    </Router>
  );
}

export default App;
