import React, { useState } from "react";
import "./ProductUpload.css";
import fileIcon from "../Assets/file.png";

const ProductUploadComponent = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileName, setFileName] = useState("Choose File");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    setFileName(file ? file.name : "Choose File");
  };

  return (
    <div className="Pfile-upload-container">
      <label className="custom-file-upload">
        <img src={fileIcon} alt="File Icon" className="file-icon" />
        {fileName}
      </label>
      <input
        id="file-upload"
        type="file"
        className="file-upload"
        onChange={handleFileChange}
      />
    </div>
  );
};

export default ProductUploadComponent;
