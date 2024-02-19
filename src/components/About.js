import React  from 'react'

function About(props) {

  let myStyle = {
    color: props.mode === 'dark'? 'white' :'#042743' ,
    backgroundColor: props.mode ==='dark'?'rgb(36 74 104)':'white',
    // border: '2px solid',
    // borderColor: props.mode === 'dark'? 'white' :'#042743'
  }

    // const [myStyle, setMyStyle] = useState({
    //     color:"black",
    //     backgroundColor:"white"


    // })


    // const [btntext, setBtnText] = useState("Enable light mode")


    //  const toggleStyle = () =>{
    //     if(myStyle.color === "black"){
    //         setMyStyle({
    //              color:"white",
    //              backgroundColor:"black",
    //              border: "1px solid white"
                
    //         })

    //         setBtnText("Enable dark mode")
    //     }
    //     else {
    //         setMyStyle({
    //             color:"black",
    //             backgroundColor:"white"
               
    //        })
    //        setBtnText("Enable light mode")
    //     }
    //  }
  return (
    <div className='container' >
        <h1 className='my-3' style={{color: props.mode ==='dark'?'white':'#042743'}}>About Us</h1>
      <div className="accordion" id="accordionExample">
  <div className="accordion-item" >
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
      <strong> Analyze Your text</strong>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
       Textutils gives you a way to analyze your text quickly and efficiently.Be it word count, character count or
       </div>
    </div>
  </div>
  <div className="accordion-item" style={myStyle}>
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      <strong> Free to use</strong>  
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        Textutils is a free character counter tool that provides instant character count & word count statistics for a given text. 
        Textutils reports the number of words and characters. Thus it is suitable for writing text with word / character limit.
      </div>
    </div>
  </div>
  <div className="accordion-item" style={myStyle}>
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      <strong>Browser Compatible</strong> 
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
       This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opers. It suits to count character
       facebook, blog,books, excel document, pdf document, essays, etc.
      </div>
    </div>
  </div>
</div>
{/* <div className='container my-5'>

<button  className="btn btn-primary" onClick={toggleStyle}>{btntext}</button>
</div> */}
    </div>
  );
};

export default About;

