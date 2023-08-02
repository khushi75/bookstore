import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Booklist = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };
  return (
    <>
      <div>Here is a Booklist.</div>
      <Button variant="contained" onClick={handleClick}>
        Go to Home
      </Button>
    </>
  );
};

export default Booklist;
