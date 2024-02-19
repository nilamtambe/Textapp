import React, {useState} from 'react';


function TextForm(props) {

  const [text, setText] = useState('');

  const handleUpClick= () =>{
    // console.log("uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!","success");
  }

  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!","success");
  }
  
  const handleClearClick = () =>{
    let newText = '';
    setText(newText);
    props.showAlert("Text Cleared!","success");
  }



  const handleCopy = () =>{
    // var text = document.getElementById("myBox");
    // text.select();
    // text.setSelectionRange(0,9999);
    navigator.clipboard.writeText(text);
    // document.getSelection().removeAllRanges();
    props.showAlert("Copied to clipboard!","success");

  }
  const handleExtraSpaces = () =>{
    let newText = text.split(/[  ]+/);
    setText(newText.join(" "));
     props.showAlert("Extra space removed!","success");
  }
  const handleOnChange= (event) =>{
    setText(event.target.value);
  }

  return (
    <>
    <div className='container' style={{color:props.mode==='dark'?'white':'#042743'}}>
      <form>
        <h1 className='my-2'>{props.heading} </h1>
  <div className="mb-3">
    {/* <label htmlFor="myBox" className="form-label">Textarea</label> */}
    <textarea className="form-control" id="myBox"  rows="5" value={text} onChange={handleOnChange}  style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'#042743'}}></textarea>
  </div>
 
  <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to uppercase</button> 
  <button  disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLowClick}> Convert to lower case </button>
  <button disabled={text.length===0}  className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear</button> 
  <button disabled={text.length===0}  className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy</button> 
   <button disabled={text.length===0}  className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra spaces</button> 
</form>
    </div>


    <div className='container my-3' style={{color:props.mode==='dark'?'white':'#042743'}}>
      <h2>Your text summary</h2>
      <p> {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length}characters</p>
      <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length}</p>
      <h3>Preview</h3>
      <p>{text.length >0? text:"Nothing to preview"}</p>
    </div>
    </>
  );
};

export default TextForm;
