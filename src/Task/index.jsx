// import { useState } from "react";

// const RegistrationForm = () => {
//   const [selectedMonth, setSelectedMonth] = useState(null);

//   const months = [
//     { id: 1, name: "January" },
//     { id: 2, name: "February" },
//     { id: 3, name: "March" },
//     { id: 4, name: "April" },
//     { id: 5, name: "May" },
//     { id: 6, name: "June" },
//     { id: 7, name: "July" },
//     { id: 8, name: "August" },
//     { id: 9, name: "September" },
//     { id: 10, name: "October" },
//     { id: 11, name: "November" },
//     { id: 12, name: "December" },
//   ];

//   const onHandleMonthChange = (event) => {
//     const selectedId = parseInt(event.target.value);
//     const selectedMonthObject = months.find((month) => month.id === selectedId);

//     setSelectedMonth(selectedMonthObject);
//   };

//   return (
//     <div className="container">
//       <div className="sub-container">
//         <div>
//           <h4 className="header-txt">
//             <strong>Birth Date</strong>
//           </h4>
//           <div className="bd-container">
//             <div>
//               <select
//                 className="bd-inputbox"
//                 onChange={onHandleMonthChange}
//               >
//                 <option value="">Select Month</option>
//                 {months.map((item) => (
//                   <option key={item.id} value={item.id} name="months">
//                     {item.name}
//                   </option>
//                 ))}
//               </select>
//             </div>
//           </div>
//         </div>
//       </div>

//       {selectedMonth && (
//         <div>
//           <p>Selected Month: {selectedMonth.name}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default RegistrationForm;
const Data = () => {
  console.log("HEllo All");
  return (
    <div>
      <h1>Hello All</h1>
    </div>
  );
};

export default Data;
