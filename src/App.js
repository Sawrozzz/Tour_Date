import React from "react";
import Month from "./Month";
import Header from "./Header";
import Card from "./Cards";
import Peoples from "./data"
import month_data from "./data2"
import { Key } from "@mui/icons-material";


function App() {
  return (
    <>
      <div className="main">
        <Header />
        {
          month_data.map((e,index)=>{
            return(
              <Month key = {index} month_name={e.month_name} isSold ={e.isSold}   />
            )
          })
        }
       
      <div className="card">
      {
        Peoples.map((elem, id)=>{
          return(
            <Card key={id} name={elem.name} des ={elem.des} date = {elem.date} image_source = {elem.image_source}/>
          )
        })
      }
      </div>

      </div>
    </>
  );
}
export default App;
