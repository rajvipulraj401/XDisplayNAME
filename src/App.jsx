// import React, { useEffect, useState } from "react";
// import "./App.css";

// const App = () => {
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [click, setClicked] = useState(false);

//   return (
//     <div className="container">
//       <h1>Full Name Display</h1>

//       <div className="name-container">
//         <label>
//           First Name:
//           <input
//             type="text"
//             placeholder="Enter your first name"
//             value={firstName}
//             onChange={(event) => {
//               setFirstName(event.target.value);
//             }}
//           />
//         </label>

//         <label>
//           Last Name:
//           <input
//             type="text"
//             placeholder="Enter your last name"
//             value={lastName}
//             onChange={(event) => {
//               setLastName(event.target.value);
//             }}
//           />
//         </label>

//         {/* note- when you want to add a label then use label and inside it use
//         input tag */}
//       </div>
//       {/*
//       <button className="button" onClick={()=>{

//           setName(`${firstName} ${lastName}`);

//       }}> Submit </button> */}
//       <button className="button" onClick={() => setClicked(!click)}>
//         Submit
//       </button>

//       {/* DISPLAY THIS when the button gets clicked so we have kept a state where we storing
//       the name so when the name is not empty display below one */}

//       {firstName && lastName && click && (
//         <h4>{`Full Name: ${firstName} ${lastName}`}</h4>
//       )}

//       {/* Whenever we have to write javascript inside jsx we have to wrap
//       it inside {} so template literals ko wrap kro isme  */}
//     </div>
//   );
// };

// export default App;

// ------------------- using Form and doing the same thing to handle form validation ---------

import React, { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [click, setClicked] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); // Page reload na ho
    if (firstName.trim() && lastName.trim()) {
      setClicked(true);
    } else {
      setClicked(false);
    }

    // WE cannot  toggle it here else it will work incorrectly what will be
    // happening ki sahi name ep bhi dubara click pe view nahi hoga islea
  };

  return (
    <div className="container">
      <h1>Full Name Display</h1>

      <form className="name-container" onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            type="text"
            placeholder="Enter your first name"
            value={firstName}
            required
            onChange={(event) => {
              setFirstName(event.target.value);
              setClicked(false);
            }}
          />
        </label>

        <label>
          Last Name:
          <input
            type="text"
            placeholder="Enter your last name"
            value={lastName}
            required
            //ye just using hhtml form validation
            onChange={(event) => {
              setLastName(event.target.value);
              setClicked(false);
            }}
          />
        </label>

        {/* note- when you want to add a label then use label and inside it use
        input tag */}

        <button className="button">Submit</button>
      </form>

      {/* DISPLAY THIS when the button gets clicked so we have kept a state where we storing
      the name so when the name is not empty display below one */}

      {click && <h4>{`Full Name: ${firstName} ${lastName}`}</h4>}

      {/* Whenever we have to write javascript inside jsx we have to wrap 
      it inside {} so template literals ko wrap kro isme  */}
    </div>
  );
};

export default App;
