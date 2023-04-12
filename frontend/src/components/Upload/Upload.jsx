import React, { useState } from "react";
import Button from "@mui/material/Button";
import { Grid } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import img1 from "@/images/img1.png";
import Recommendations from "../ChatBot/Chatbot";

const Upload = () => {
  const [image, setImage] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [chatbot, setChatbot] = useState(false);

  const handleUploadImage = (event) => {
    setIsAnalyzing(true);
    const file = event.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      toast.warn("Please Wait While the Image is being sent", {
        autoClose: 1500,
      });
      toast.success("Analysis Sent !", {
        position: toast.POSITION.TOP_CENTER,
        delay: 2500,
      });

      setTimeout(() => {
        setIsAnalyzing(false);
        setImage(url);
      }, 8000);
    }
    setTimeout(() => {
      setChatbot(true);
    }, 9000);
  };

  const handleShowRandomImage = () => {
    setIsAnalyzing(true);
    toast.warn("Your image is being scanned!", { autoClose: 2000 });
    setTimeout(() => {
      setImage(img1);
      setIsAnalyzing(false);
    }, 5000);
  };

  const handleRemoveImage = () => {
    setTimeout(() => {
      setImage(null);
    }, 2000);
  };

  return (
    <div>
      {image && <img src={image} alt="uploaded image" height={200} />}
      <Grid
        container
        my={4}
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {image && (
          <Button
            component="label"
            xs={4}
            md={2}
            onClick={handleRemoveImage}
            color="error"
          >
            Remove Image
          </Button>
        )}
        <Button
          component="label"
          xs={4}
          md={2}
          // disabled={isAnalyzing || !!image}
        >
          Analyze Image
          <input
            type="file"
            hidden
            accept="image/*"
            onChange={handleUploadImage}
          />
        </Button>
        <Button
          component="label"
          xs={4}
          md={2}
          disabled={isAnalyzing}
          onClick={handleShowRandomImage}
        >
          Scan Image
        </Button>
        <ToastContainer />
      </Grid>
      {chatbot && <Recommendations />}
    </div>
  );
};

export default Upload;
