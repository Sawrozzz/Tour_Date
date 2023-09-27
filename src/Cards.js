import React  from "react";

function Card ({name, date , image_source,des}){
  return(
    <>
    <div className="mycard">
    <img src={image_source} alt = "nepal"/>
    <p>{name}</p>
    <p>{date}</p>
    <p>{des}</p>
    <button>Buy Tickets</button>
    </div>
    </>
  );
}
export default Card