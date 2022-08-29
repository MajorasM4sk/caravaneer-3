//components/App.tsx

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Map, Title } from "./Components/MainLayouts";
import { NewCharacter } from "./Components/MainLayouts/NewCharacter.component";
//import { QueryCache, ReactQueryCacheProvider } from "react-query";

function App(): React.ReactElement {
  return (
    // <ReactQueryCacheProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Title />} />
        <Route path="/new-character" element={<NewCharacter />} />
        <Route path="/map" element={<Map />} />
      </Routes>
    </BrowserRouter>
    //</ReactQueryCacheProvider>
  );
}

export default App;
