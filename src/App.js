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
        <Month />
      </div>
      <div className="mycard">
        <Card
          name="Nepal"
          date="sun 14 2012"
          detail="Nepal is a beautiful country"
          image_source={image_url}
        />
        <Card
          name="Jungle"
          date="Mon 14 2010"
          detail="Jungle are beautifull green and source of oxygen"
          image_source={image1}
        />
        <Card
          name="River"
          date="Tue 13 2015"
          detail="Rivers flows like how our life flows "
          image_source={image2}
        />
      </div>
    </>
  );
}
export default App;
