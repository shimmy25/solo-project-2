import React, { Component } from 'react';
import SearchForm from './components/SearchForm';

function App(props) {
  return (
    <div>
      <h1>The Crystal Cave</h1>
      <h3>Save your favorite crystals and discover new varieties!</h3>
      <h5>Choose one option below:</h5>
      <SearchForm />
    </div>
  );
}

export default App;
