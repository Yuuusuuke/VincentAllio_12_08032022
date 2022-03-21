import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import "./ressources/style/global.css"; // Global css rules
import {DataProvider} from "./context/DataContext";
import APIChecker from './components/APIChecker/APIChecker';
import Page404 from "./pages/Page404/Pages404";
import TopNavBar from './components/TopNavBar/TopNavBar';
import SideNavBar from './components/SideNavBar/SideNavBar';

function App() {
  return (
    <div className="App">
      <TopNavBar />

      <div className='mainTable'>
        <SideNavBar />
        <div className='mainContent'>
          <Router>
            <Routes>
              <Route path="/user/:id" element={
                <DataProvider>
                  <APIChecker />
                </DataProvider>
              } />
              <Route path='*' element={<Page404 />} />
            </Routes>
          </Router>

        </div>
      </div>
    </div>
  );
}

export default App;
