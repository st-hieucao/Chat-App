import React from "react";
import Routes from "./routes";
import Sidebar from "./shared/layout/sidebar";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className="app-content">
        <Routes />
      </div>
    </div>
  );
}

export default App;
