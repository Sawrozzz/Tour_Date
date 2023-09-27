import React from "react";
import Month from "./Month";
import Header from "./Header";
import Card from "./Cards";
import image1 from "../src/jungle.jpg";
import image2 from "../src/river.jpg";

function App() {
  let image_url =
    "https://media.istockphoto.com/id/637696304/photo/patan.jpg?s=612x612&w=0&k=20&c=-53aSTGBGoOOqX5aoC3Hs1jhZ527v3Id_xOawHHVPpg=";
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
        <Card className="mycard"
          name="Nepal"
          date="sun 14 2012"
          des="Nepal is a beautiful country"
          image_source={image_url}
        />
        <Card
          name="Jungle"
          date="Mon 14 2010"
          des="Jungle are beautifull green and source of oxygen"
          image_source={image1}
        />
        <Card
          name="River"
          date="Tue 13 2015"
          des="Rivers flows like how our life flows "
          image_source={image2}
        />
      </div>

      </div>
    </>
  );
}
export default App;
