// import React, { useState } from 'react';
// import Navbar from './components/Navbar';
// import './App.css';
//  import About from './components/About';
// import TextForm from './components/TextForm';
// import Alert from './components/Alert';
// import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
  

// function App() {

//   const [mode, setMode] = useState('light'); // whether dark mode is enable or not
//   const [alert, setAlert] = useState(null)



//   const showAlert = (message, type)=> {
//     setAlert({
//       msg:message,
//       type:type
//     })
//     setTimeout(() => {
//       setAlert(null);
//     }, 1500);
//   }


//   const toggleMode = () =>{
//     if(mode==='light') {
//       setMode('dark')
//       document.body.style.backgroundColor = "#042743";
//       showAlert("Dark mode has been enabled","success")
//     }
//     else {
//       setMode('light')
//       document.body.style.backgroundColor = "white";
//       showAlert("Light mode has been enabled","success")
//     }
//   }
//   return (
//     <>
//    <Router>
//   <Navbar title="TextUtils"  mode={mode}  toggleMode={toggleMode}  />

//   <Alert alert={alert} />
  
//     <div className='container my-5'>
//      <Routes> 

//       <Route exact path='/about' element={<About   mode={mode}/>} />
//       < Route exact path='/' element={<TextForm showAlert={showAlert} heading=" Try TextUtils - word Counter , Character Counter"  mode={mode} />} />

//       {/* <Route path='/'><TextForm showAlert={showAlert} heading="Enter the text to analyze"  mode={mode} /></Route> */}
//       </Routes>
//       </div>
//       </Router>
    
  
  
//     </>

//   );
// }

// export default App;

import React, {useState} from "react";
import "./App.css";


const App =() =>{

const[show, setShow] = useState(true);
const [mode,setMode] = useState('Light Mode');



const toggleMode = ()=>{
  if(mode==="Light mode"){
    setMode("Dark Mode")
    document.body.style.backgroundColor ="blue";
   
    
  }
  else {
    setMode("Light mode")
    document.body.style.backgroundColor = "pink";
    
  }
  

}

    return (
      <div>
      
        <button onClick={()=>setShow(!show)}  >
      
          {show ? "show":"hide"}
        </button>
        {show && 
         <h1>Hello world!</h1> }

        

         <button onClick={toggleMode}>{mode}</button>
         <h2>Nilam Tambe</h2>


        
         
      </div>
    )
}

export default App;

