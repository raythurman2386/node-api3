import React from "react";
import { Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>;<h1>Upload Image</h1>
      {/* Skyelars image upload challenge */}
      <form action="/upload" method="post" enctype="multipart/form-data">
        <input type="file" accept="image/*" name="photo" />
        <input type="submit" value="upload" />
      </form>
    </div>
  );
}

export default App;
