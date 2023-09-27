import React from "react";
// export default function Month() {
//   return (
//     <>
//       <div className="allmonth">
//         <div className="one">
//           September <span>Sold Out</span>
//         </div>
//         <hr></hr>
//         <div className="one">
//           Octobor <span>Sold Out</span>
//         </div>
//         <hr></hr>
//         <div className="one">November</div>
//       </div>
//     </>
//   );
// }

function Month({month_name, isSold}){
  return(
    <div className="allmonth">
    <h3>
    {month_name}
    <span>
    {isSold ? 'Sold Out':  'Available'}
    </span>
    </h3>
    </div>
  );
}
export default Month