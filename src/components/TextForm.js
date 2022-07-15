import React, {useState} from 'react'

export const TextForm = (props) => {


    const handleUpClick = () => {
        // console.log('Text On Change'+ text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert(" Converted to upper case ","success");
    }
    const handleLoClick = () =>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert(" Converted to lower case ","success");
    }
    const handleclearClick = () =>{
        let newText = '';
        setText(newText);
        props.showAlert(" Text has cleared! ","success");
    }
    const handleOnChange  = (event) => {
        // console.log("On change");
        setText(event.target.value);
    }
    // Credits A
    const handleCopy     = () => {
        console.log("I am copy");
        var text = document.getElementById("myBox");
        text.select();
        // it is not necessary to add selection range
        // text.setSelectionRange(0, 9999);
        navigator.clipboard.writeText(text.value);
        props.showAlert(" Copied to clipboard! ","success");
    }
    // Credits Coding wala
    const handleExtraSpaces  = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert(" Extra spaces has removed! ","success");
    }


    const [text, setText]  = useState('');
    return (
        <>
            <div className='container' style={{color: props.mode==='dark'? 'white' : 'black'}}>
                <h3 >{props.heading}</h3>
                <div className="form-group my-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange}  style={{backgroundColor: props.mode==='dark'? 'grey' : 'white',color: props.mode==='dark'? 'white' : 'black'}} id="myBox"  rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-3" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-3" onClick={handleLoClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-3" onClick={handleclearClick}>Clear Text</button>
                <button className="btn btn-primary mx-3" onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-primary mx-3" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            </div>
            <div className="container my-3" style={{color: props.mode==='dark'? 'white' : 'black'}}>
                <h3>Your Text Summary</h3>
                <p>{text.split(" ").length} words, {text.length} characters</p>
                <p>{ 0.008 * text.split(" ").length } Minutes read</p>
                <h5>Preview</h5>
                <p>{text.length>0? text:'Enter something to preview above here'}</p>
            </div>
        </>
    )
}