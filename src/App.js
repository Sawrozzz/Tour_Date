import React from "react";
import Month from "./Month";
import Header from "./Header";
import Card from "./Cards";
import image1 from "../src/jungle.jpg";
import image2 from "../src/river.jpg";
import image from "../src/nepal.jpg";
import Peoples from "./data"

function App() {
  return (
    <>
      <div className="main">
        <Header />
        <Month isSold={true} month_name = "Octubar"/>
        <hr></hr>
        <Month isSold={true} month_name ="November"/>
        <hr></hr>
        <Month isSold={false} month_name ="December"/>
        <hr></hr>
      <div className="card">
      {
        Peoples.map((elem)=>{
          return(
            <Card name={elem.name} des ={elem.des} date = {elem.date} image_source = {elem.image_source}/>
          )
        })
      }
      </div>

      </div>
    </>
  );
}
export default App;
