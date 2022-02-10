import React from 'react'
import EnterCoordinates from "./EnterCoordinates"
import AerialImages from "./AerialImages"
import "../styles/App.css"

const App = () => {
  return (
    <>
      <h1>NASA-Homework!</h1>

      <div className="container">
        <EnterCoordinates />
        <AerialImages />
      </div>
      
    </>
  );
};

export default App