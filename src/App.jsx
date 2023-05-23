import React, { useState } from "react";
import Header from "./Header";
import Form from "./Form";
import "./Form";

function App() {
  const [showForm, setShowForm] = useState(false);

  const handleLoginClick = () => {
    setShowForm(true);
  };

  return (
    <div>
      <Header onLoginClick={handleLoginClick} />
     {showForm && <Form />}
     </div> 
    
  );
}

export default App;
