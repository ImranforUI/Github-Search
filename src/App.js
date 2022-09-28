import './App.css';
import React from 'react';
import GithubProfile from './components/GithubProfile';

function App() {
  return (
    <React.Fragment>
      <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
        <a href="/" className="navbar-brand h3">Github Search</a>
      </nav>
      <GithubProfile/>
    </React.Fragment>
  );
}

export default App;
