import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    // console.log("uppercase was clicked " + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("converted to upperCase", "success");
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("converted to lowerCase", "success");
  };

  const handleClrClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Your all text is clear", "warning");
  };


const handleCopy=()=>{
  navigator.clipboard.writeText(text)
  props.showAlert("Copied to clipboard","success")
}

  // text=qujsqnsmmnsnm wrong way to change the state
  // setText("new text") //right way to change the state

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>{props.heading}</h2>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="mybox"
            rows="8"
            style={{
              backgroundColor: props.mode === "dark" ? "#373636" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
          ></textarea>
          <div className="text-center">
          <button
            disabled={text.length === 0}
            className="btn btn-primary my-3 mx-2"
            onClick={handleUpClick}
          >
            Convert to uppercase
          </button>
          <button
            disabled={text.length === 0}
            className="btn btn-primary my-3 mx-2"
            onClick={handleLoClick}
          >
            Convert to lowercase
          </button>

          <button
            disabled={text.length === 0}
            className="btn btn-primary my-3 mx-2"
            onClick={handleCopy}
          >
            Copy Text
          </button>

          <button
            disabled={text.length === 0}
            className="btn btn-primary my-3 mx-2"
            onClick={handleClrClick}
          >
            Clear Text
          </button>
          </div>
        
      </div>
      <div
        className="container my-2"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>Your text summary</h2>
        <p>
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words and {text.length} characters
        </p>
        <p>
          {0.008 *
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          minutes to read
        </p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Nothing to preview"}
        </p>
        </div>
      </div>
    </>
  );
}
