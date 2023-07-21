import React from "react";
import "./App.css"; // Make sure to import CSS files
import Events from "./components/Events/Events";


function App() {
  return (
    <div className="body1">
      <div className="main">
        {/* content */}
        <Events />
        {/* / content */}
        {/* footer */}
      </div>
    </div>
  );
}

export default App;
