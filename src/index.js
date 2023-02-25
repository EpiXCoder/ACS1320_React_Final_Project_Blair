import React from 'react';
// import ReactDOM from 'react-dom/client';
import {createRoot} from 'react-dom/client';
import './index.css';
import App from './components/App';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/About/About';
import BLAIRList from './components/BLAIRList/BLAIRList';
import reportWebVitals from './reportWebVitals';
import BLAIRDetails from './components/BLAIRDetails/BLAIRDetails';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);


root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<BLAIRList />} />
        <Route path="about" element={<About />} />
        <Route path="/details/:id" element={<BLAIRDetails />} />
      </Route>
    </Routes>
  </Router>,
  // document.getElementById('root')
);

reportWebVitals();
