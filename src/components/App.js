import React from 'react'

import AerialImages from "./AerialImages"
import Header from "./Header"
import "../styles/App.css"

const App = () => {
  return (
    <>
      <Header />

      <div className="container">        
        <AerialImages />
      </div>
      
    </>
  );
};

export default App