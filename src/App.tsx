//components/App.tsx

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { City, Map, Title } from "./Components/MainLayouts";
import { NewCharacter } from "./Components/MainLayouts/NewCharacter.component";
import "bootstrap/dist/css/bootstrap.min.css";
//import { QueryCache, ReactQueryCacheProvider } from "react-query";

function App(): React.ReactElement {
  return (
    // <ReactQueryCacheProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Title />} />
        <Route path="/new-character" element={<NewCharacter />} />
        <Route path="/map" element={<Map />} />
        <Route path="/city/:city" element={<City />} />
      </Routes>
    </BrowserRouter>
    //</ReactQueryCacheProvider>
  );
}

export default App;
