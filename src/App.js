import React, { useState, createContext } from "react";
import "./App.css";
import { INDEX } from "./constants/pages";
import TabBar from "./components/tabbar/tabbar";
import Index from "./pages/index";

export const AppContext = createContext();

function App() {
  const [curPage, setCurPage] = useState(INDEX);
  return (
    <div className="App">
      <div className="main">{curPage === INDEX && <Index />}</div>
      <AppContext.Provider value={{ curPage, setCurPage }}>
        <TabBar />
      </AppContext.Provider>
    </div>
  );
}

export default App;
