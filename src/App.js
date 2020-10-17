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
      <ListingsView path="burwood" endpointName="burwood" />
      <ListingsView path="inner_west" endpointName="inner_west" />
      <ListingsView path="canada_bay" endpointName="canada_bay" />
    </Router>
  );
}

export default App;
