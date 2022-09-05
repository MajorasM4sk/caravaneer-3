//components/App.tsx

import React, { useRef } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Caravan, City, Title } from "./Components/MainLayouts";
import Map from "./Components/MainLayouts/Map.component";
import { NewCharacter } from "./Components/MainLayouts/NewCharacter.component";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Header } from "./Components/MainLayouts/Header";
//import { QueryCache, ReactQueryCacheProvider } from "react-query";

function App(): React.ReactElement {
  let body = useRef<HTMLBodyElement>(document.querySelector("body"));
  body.current.style.backgroundImage = "url(/background.jpg)";
  body.current.style.backgroundSize = "cover";
  body.current.style.backgroundRepeat = "no-repeat";
  body.current.style.backgroundPosition = "center";
  body.current.style.backgroundAttachment = "fixed";

  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Title />} />
          <Route path="/new-character" element={<NewCharacter />} />
          <Route path="/map" element={<Map />} />
          <Route path="/cities/:city" element={<City />} />
          <Route path="/caravan" element={<Caravan />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
