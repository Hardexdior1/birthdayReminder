import React, { useState } from "react";
import "./BirthDay.css";

const BirthDay = ({ birthDays }) => {
  const [data, setData] = useState(birthDays);
  const [buttonHolder, setButtonHolder] = useState(true);

  // filter underEleven Birthdays 
  const filterUnderEleven=data.filter((age)=>age.age <11);
        console.log(filterUnderEleven);
        const[showUnderElevenBirthday,setShowUnderElevenBirthday]=useState(filterUnderEleven);
        

        // filter from 11 years to 19.
        const filterElevenToNineTeen=data.filter((age)=>age.age>10&&age.age<20)
        console.log(filterElevenToNineTeen);
        const[showFromElevenToNineteen,setShowFromElevenToNineteen]=useState(filterElevenToNineTeen);
        // console.log(showFromElevenToNineteen);

        // filter from 19 upward
        const filterOverNineteen=data.filter((age)=>age.age>19)
        console.log(filterOverNineteen);
        
        const[showNineteenPlus,setNineteenPlus]=useState(filterOverNineteen)
        console.log(showNineteenPlus);

        
  return (
    <div className="wrap2">
      
      <h4>birthday reminder</h4>
      <small><b>{'<> coded by oluwadamilare</>'}</b></small>

      <h4>{data.length>1?<h4>There are {data.length} birthdays today</h4>:<h4>There is {data.length} birthday today</h4>}</h4>
      <button className="birthdayBtn" onClick={()=>{
                    setData(birthDays);
                    setButtonHolder(true)

      }}>All</button>
      <button className="birthdayBtn" onClick={()=>{
      setData(showUnderElevenBirthday);
      setButtonHolder(true)

     }}>under 11 Birthdays</button>
    
    <button className="birthdayBtn" onClick={()=>{
      setData(showFromElevenToNineteen);
      setButtonHolder(true)

     }}>11-19</button>

<button className="birthdayBtn" onClick={()=>{
      setData(showNineteenPlus);
      setButtonHolder(true)

     }}>over 19</button>

      {data.map((eachBirthDay) => {


        const { name, img, age, id } = eachBirthDay;
        console.log(data);

     
        // const filter=eachBirthDay.filter((age)=>age !==age)

        return (
          <div key={id}>
       
            <div className="flex2">
              <div className="img">
                <img src={img} alt={name+' img'} />
               
              </div>

              <div>
                <h4>Name: {name}</h4>
                <h4>Age: {age} years old</h4>
              </div>
            </div>
            <div></div>
          </div>
        );
      })}
      {buttonHolder ? (
        <button
          className="clear"
          onClick={() => {
            setData([]);
            setButtonHolder(!buttonHolder);
          }}>
          Clear all
        </button>
      ) : (
        <button
          className="reStore"
          onClick={() => {
            setData(birthDays);
            setButtonHolder(!buttonHolder);
          }}>
          Restore
        </button>
      )}

  
    </div>
  );
};

export default BirthDay;
