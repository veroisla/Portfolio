import '../styles/components/App.scss';
import ExampleComponent from './exampleComponent';
import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <h1>Starter Kit</h1>
      <ExampleComponent />
    </div>
  );
}

export default App;
