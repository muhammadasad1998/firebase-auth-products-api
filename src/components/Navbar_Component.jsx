import { Button } from "@mui/material";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar_Component = () => {
    const navigate = useNavigate();
  return (
    <div className="bg-primary_color h-20 px-3 flex items-center justify-between">
      <div className="text-3xl text-white font-bold">Logo</div>

      {localStorage.getItem("isLoggedIn") ? (
        <div> 
            {/* <span className="space-x-3 text-white font-medium me-5">Username</span> */}
         <Button sx={{color:"white", backgroundColor:"red"}} onClick={() => {
            localStorage.removeItem("isLoggedIn");
            navigate("/login");
          }}>Logout</Button>
        </div>
        
      ) : (
        <div className="space-x-3 text-white font-medium">
          <Link to="/login">Login</Link>
          <span>|</span>
          <Link to="/signup">Signup</Link>
         
        </div>
      )}
    </div>
  );
};

export { Navbar_Component };
