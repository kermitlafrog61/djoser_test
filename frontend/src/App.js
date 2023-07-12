import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import ActivateAccount from './ActivateAccount';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>My React Application</h1>
        </header>
        <Routes>
          <Route path="/login" component={Login} />
          <Route path="/register" element={<Register />} />
          <Route path="/activate" element={<ActivateAccount />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
