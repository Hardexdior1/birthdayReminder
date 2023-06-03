import "./App.css";
import "./index.css";


import React, { useState } from "react";
import BirthData from "./Birsthdayproject/BirthData";
import BirthDay from "./Birsthdayproject/BirthDay";



function App() {
 
  const [birthDay, setBirthDay] = useState(BirthData);
 
  return (
    <div>



     

      <BirthDay birthDays={birthDay}  />
     
    </div>
  );
}

export default App;
