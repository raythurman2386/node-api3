import React from "react";

const UploadImage = () => {
  return (
    <div>
      <h1>Upload Image</h1>
      {/* Skyelars image upload challenge */}
      <form action="/upload" method="post" enctype="multipart/form-data">
        <input type="file" accept="image/*" name="photo" />
        <input type="submit" value="upload" />
      </form>
    </div>
  );
};

export default UploadImage;
