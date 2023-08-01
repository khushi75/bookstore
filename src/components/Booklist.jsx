import React from "react";
import { useNavigate } from "react-router-dom";

const Booklist = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };
  return (
    <>
      <div>Here is a Booklist.</div>
      <button onClick={handleClick}> Go to Home</button>
    </>
  );
};

export default Booklist;
