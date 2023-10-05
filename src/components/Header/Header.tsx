import { Box, Divider } from "@mui/material";
import React from "react";
import CartButton from "../CartButton/CartButton";
import LoginButton from "../LoginButton/LoginButton";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../context/appContext";

const Header: React.FC = () => {
  const navigate = useNavigate();
  const { userData, signOut, cart } = useAppContext();
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
          <CartButton
            items={cart !== null ? cart.items : []}
            onClick={() => console.log("teste")}
          />
          <LoginButton
            user={
              userData !== null &&
              userData.length > 0 && { name: userData[0].data.name }
            }
            onClick={() => navigate("/login")}
            signout={signOut}
          />
        </Box>
      </Box>
      <Divider sx={{ marginY: "20px", marginX: "10px" }} />
    </>
  );
};

export default Header;
