import { Box, Divider } from "@mui/material";
import React from "react";
import CartButton from "../CartButton/CartButton";
import LoginButton from "../LoginButton/LoginButton";

const Header: React.FC = () => {
  return (
    <>
      <Box
        data-testid="header-container"
        component="div"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "70px",
          paddingRight: "20px",
        }}
      >
        <Box component="img" src="./logo.png" alt="logo" height="70px" />
        <Box
          data-testid="buttons-container"
          component="div"
          sx={{ display: "flex", gap: "10px" }}
        >
          <LoginButton user={{}} />
          <CartButton items={["1"]} onClick={() => console.log("teste")} />
        </Box>
      </Box>
      <Divider sx={{ marginY: "20px", marginX: "10px" }} />
    </>
  );
};

export default Header;
