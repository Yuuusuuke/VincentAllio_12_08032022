import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import {DataProvider} from "./context/DataContext";
import APIChecker from './components/APIChecker/APIChecker';
import Page404 from "./pages/Page404/Pages404";

function App() {
  return (
    <div className="App">
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
  );
}

export default App;
