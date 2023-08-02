import { TextField, Typography, Button } from "@mui/material";
import React, { useState } from "react";

const Form = () => {
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  //   const [UserDetails, setUserDetails] = useState({
  //     Username: "",
  //     Password: "",
  //   });

  const handleSubmit = () => {
    console.log("Username: ", Username);
    console.log("Password: ", Password);
  };
  return (
    <div className="form-demo">
      <Typography variant="h3">Login Here!!</Typography>{" "}
      <TextField
        label="Username"
        variant="outlined"
        value={Username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <TextField
        label="Password"
        variant="outlined"
        value={Password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button variant="contained" onClick={handleSubmit}>
        Submit
      </Button>
    </div>
  );
};

export default Form;
