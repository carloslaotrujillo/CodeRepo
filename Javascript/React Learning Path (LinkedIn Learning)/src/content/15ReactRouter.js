import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, About, Events, Contact, Inexistent404 } from "./helpers/15Pages";

function ReactRouter() {
  return <div>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/events" element={<Events />} />
            <Route path="/contact" element={<Contact />} />        
            <Route path="*" element={<Inexistent404 />} />        
        </Routes>
      </BrowserRouter>
  </div>;
}

export default ReactRouter;
