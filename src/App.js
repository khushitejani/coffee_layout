import { Routes, Route } from "react-router-dom";
import React from 'react'
import Home from './Home.js';

import Header from "./Header.js";
import Menupg from "./menupg.js";
import Contact from "./contact.js";
import Event from "./event.js";
import News from "./news.js";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="header" element={ <Header/> } />
        <Route path="menupg" element={ <Menupg/> } />
        <Route path="contact" element={ <Contact/> } />
        <Route path="event" element={ <Event/> } />
        <Route path="news" element={ <News/> } />

        {/* <Route path="contact" element={ <Contact/> } /> */}
      </Routes>
      </div>
  );
}

export default App;
