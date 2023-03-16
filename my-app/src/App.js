import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path="about" element={<About />}/>
          <Route path="about" element={<Contact />}/>
        </Route>

      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
