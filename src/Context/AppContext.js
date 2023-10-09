// export default function AppContextProvider({ children }) {
//     const [item, setItem] = useState({
//       title: "",
//       description: "",
//       date: "",
//       location: "",
//       contactInfo: "",
//       type: "",
//       Question: "",
//       imageURL: "", // Include the image URL property
//     });
  
//     const [imageURL, setImageURL] = useState('');
//     const [allItems, setAllItems] = useState([]);
//     const handleInput = (event) => {
//         const { name, value, type, files } = event.target;
      
//         if (type === 'file') {
//           const file = files[0];
//           if (file) {
//             const reader = new FileReader();
//             reader.onload = (e) => {
//               setImageURL(e.target.result);
//               setItem((item) => ({
//                 ...item,
//                 [name] : value
//               }));
      
//               // Add the current item to the array
//               setAllItems((prevItems) => [...prevItems, item]);
//             };
//             reader.readAsDataURL(file);
//           }
//         } else {
//           setItem({
//             ...item,
//             [name]: value,
//           });
//         }
//       };
      
  
//     return (
//       <AppContext.Provider value={{ item, setItem,allItems, imageURL, handleInput }}>
//         {children}
//       </AppContext.Provider>
//     );
//   }




// export default function AppContextProvider({ children }) {
//   const [item, setItem] = useState({
//     title: "",
//     description: "",
//     date: "",
//     location: "",
//     contactInfo: "",
//     type: "",
//     Question: "",
//     imageURL: "",
//   });

//   const [imageURL, setImageURL] = useState("");
//   const [allItems, setAllItems] = useState([]);

//   const handleInput = (event) => {
//     const { name, value, type, files } = event.target;

//     if (type === "file") {
//       const file = files[0];
//       if (file) {
//         const reader = new FileReader();
//         reader.onload = (e) => {
//           const newItem = {
//             ...item,
//             [name]: e.target.result,
//           };

//           setItem(newItem);
//           setImageURL(e.target.result);
//         };
//         reader.readAsDataURL(file);
//       }
//     } else {
//       const newItem = {
//         ...item,
//         [name]: value,
//       };

//       setItem(newItem);
//     }
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault(); // Prevent the default form submission behavior
//      console.log(formData);
//     // Create a new object representing the current form data
//     const formData = {
//       ...item,
//       // Any additional data you want to include
//     };

//     // Add the current form data to the array
//     setAllItems((prevItems) => [...prevItems, formData]);

//     // Clear the form fields by setting them to their initial empty state
//     setItem({
//       title: "",
//       description: "",
//       date: "",
//       location: "",
//       contactInfo: "",
//       type: "",
//       Question: "",
//       imageURL: "",
//     });
//     setImageURL("");
//   };

//   return (
//     <AppContext.Provider value={{ item , setItem, allItems, imageURL, handleInput, handleSubmit }}>
//       {children}
//     </AppContext.Provider>
//   );
// }


// import React, { createContext, useState } from "react";

// export const AppContext = createContext();




// AppContext.jsx
import { createContext, useState } from 'react';

export const AppContext = createContext();

export default function AppContextProvider({ children }) {
  const [inData, setInData] = useState([]);
//   const value = {
//     inData,
//     setInData,
//   };
  return <AppContext.Provider value={{inData,setInData}}>{children}</AppContext.Provider>;
}

