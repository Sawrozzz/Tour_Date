import React from "react";
import Month from "./Month";
import Header from "./Header";
import Card from "./Cards";
import Peoples from "./data"
import month_data from "./data2"


function App() {
  return (
    <>
      <div className="main">
        <Header />
        {
          month_data.map((e)=>{
            return(
              <Month  month_name={e.month_name} isSold ={e.isSold} />
            )
          })
        }
       
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
