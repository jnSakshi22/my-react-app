// import { useState } from "react";
// import "./App.css";
// // import SidebarItem from "./SideBarItems";
// // import Slider from "./Slider";

// const DEFAULT_OPTIONS = [
//   {
//     name: "Brightness",
//     property: "brightness",
//     value: 100,
//     range: {
//       min: 0,
//       max: 200,
//     },
//     unit: "%",
//   },
//   {
//     name: "Contrast",
//     property: "contrast",
//     value: 0,
//     range: {
//       min: 0,
//       max: 200,
//     },
//     unit: "%",
//   },
//   {
//     name: "Saturation",
//     property: "saturate",
//     value: 0,
//     range: {
//       min: 0,
//       max: 200,
//     },
//     unit: "%",
//   },
//   {
//     name: "Grayscale",
//     property: "grayscale",
//     value: 0,
//     range: {
//       min: 0,
//       max: 100,
//     },
//     unit: "%",
//   },
//   {
//     name: "Sepia",
//     property: "sepia",
//     value: 0,
//     range: {
//       min: 0,
//       max: 100,
//     },
//     unit: "%",
//   },
//   {
//     name: "Hue Rotate",
//     property: "hue-rotate",
//     value: 0,
//     range: {
//       min: 0,
//       max: 360,
//     },
//     unit: "deg",
//   },
//   {
//     name: "Blur",
//     property: "blur",
//     value: 0,
//     range: {
//       min: 0,
//       max: 20,
//     },
//     unit: "px",
//   },
// ];

// const FilePicker = () => {
//   const [picture, setPicture] = useState("");
//   const [options, setOptions] = useState(DEFAULT_OPTIONS);
//   const [selectedOptionIndex, setSelectedOptionIndex] = useState(0);
//   // const selectedOption = options[selectedOptionIndex];

//   const onChangePicture = (e) => {
//     console.log("picture: ", picture);
//     setPicture(URL.createObjectURL(e.target.files[0]));
//   };

//   const getImageStyle = () => {
//     const filters = options.map((option) => {
//       return `${option.property}(${option.value}${option.unit})`;
//     });

//     return { filter: filters.join(" ") };
//   };

//   // const handleSliderChange = ({ target }) => {
//   //   setOptions((prevOptions) => {
//   //     return prevOptions.map((option, index) => {
//   //       if (index !== selectedOptionIndex) return option;
//   //       return { ...option, value: target.value };
//   //     });
//   //   });
//   // };
//   return (
//     <div className="container">
//       <h1>Assignment: Image Editor</h1>
//       <div>
//         <div className="sub-container">
//           {picture ? (
//             <>
//               <img
//                 className="selected-image"
//                 src={picture}
//                 // style={getImageStyle}
//               ></img>
//             </>
//           ) : (
//             <>
//               <p>Select a file: </p>
//               <input type="file" onChange={onChangePicture} />
//             </>
//           )}
//         </div>
//         {/* <div>
//           <div className="sidebar">
//             {options.map((option, index) => {
//               return (
//                 <SidebarItem
//                   key={index}
//                   name={option.name}
//                   active={index === selectedOptionIndex}
//                   handleClick={() => setSelectedOptionIndex(index)}
//                 />
//               );
//             })}
//           </div>
//           <Slider
//             min={selectedOption.range.min}
//             max={selectedOption.range.max}
//             value={selectedOption.value}
//             handleChange={handleSliderChange}
//           />
//         </div> */}
//       </div>
//     </div>
//   );
// };

// export default FilePicker;

// // const FilePicker = () => {
// //   const [isSubmit, setIsSubmit] = useState(false);
// //   const [isNExt, setIsNext] = useState(false);
// //   const [picture, setPicture] = useState("");
// //   const [selectedOptionIndex, setSelectedOptionIndex] = useState(0);
// //   const [options, setOptions] = useState(DEFAULT_OPTIONS);
// //   const selectedOption = options[selectedOptionIndex];

// //   const onSubmitClick = () => {
// //     setIsSubmit(true);
// //   };
// //   const onNextClick = () => {
// //     setIsNext(true);
// //   };
// //   const onChangePicture = (e) => {
// //     console.log("picture: ", picture);
// //     setPicture(URL.createObjectURL(e.target.files[0]));
// //   };

// //   console.log(selectedOption);

// //   function handleSliderChange({ target }) {
// //     setOptions((prevOptions) => {
// //       return prevOptions.map((option, index) => {
// //         if (index !== selectedOptionIndex) return option;
// //         return { ...option, value: target.value };
// //       });
// //     });
// //   }

// //   function getImageStyle() {
// //     const filters = options.map((option) => {
// //       return `${option.property}(${option.value}${option.unit})`;
// //     });

// //     return { filter: filters.join(" ") };
// //   }

// //   const downloadImage = () => {
// //     if (picture) {
// //       const link = document.createElement("a");
// //       link.href = picture;
// //       link.download = "filtered_image.png";
// //       link.click();
// //     }
// //   };

// //   console.log("Image Style:", getImageStyle());

// //   return (
// //     <div>
// //       <h1>Please Upload Images Here</h1>

// //       <label>Select a File:</label>
// //       <input type="file" onChange={onChangePicture} />
// //       <button onClick={onSubmitClick}>Submit</button>

// //       {isSubmit && (
// //         <div>
// //           <img
// //             className="playerProfilePic_home_tile"
// //             src={picture}
// //             style={getImageStyle()}
// //           ></img>
// //           <div className="sidebar">
// //             {options.map((option, index) => {
// //               return (
// //                 <SidebarItem
// //                   key={index}
// //                   name={option.name}
// //                   active={index === selectedOptionIndex}
// //                   handleClick={() => setSelectedOptionIndex(index)}
// //                 />
// //               );
// //             })}
// //           </div>
// //           <Slider
// //             min={selectedOption.range.min}
// //             max={selectedOption.range.max}
// //             value={selectedOption.value}
// //             handleChange={handleSliderChange}
// //           />
// //           <button onClick={onNextClick}>Next</button>
// //           <h4>Your Image Upload Successfully!!</h4>
// //         </div>
// //       )}
// //       {isNExt && (
// //         <>
// //           {" "}
// //           <img src={getImageStyle} />{" "}
// //           <button onClick={downloadImage}>Download Image</button>
// //         </>
// //       )}
// //     </div>
// //   );
// // };

// // export default FilePicker;
