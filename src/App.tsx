//components/App.tsx

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { City, Title } from "./Components/MainLayouts";
import Map from "./Components/MainLayouts/Map.component";
import { NewCharacter } from "./Components/MainLayouts/NewCharacter.component";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Header } from "./Components/MainLayouts/Header";
//import { QueryCache, ReactQueryCacheProvider } from "react-query";

function App(): React.ReactElement {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Title />} />
          <Route path="/new-character" element={<NewCharacter />} />
          <Route path="/map" element={<Map />} />
          <Route path="/cities/:city" element={<City />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
