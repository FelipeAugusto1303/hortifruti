import { Box, Divider } from "@mui/material";
import React, { useState } from "react";
import CartButton from "../CartButton/CartButton";
import LoginButton from "../LoginButton/LoginButton";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../context/appContext";
import LoginDialog from "../LoginDialog/LoginDialog";

const Header: React.FC = () => {
  const navigate = useNavigate();
  const { userData, signOut, cart } = useAppContext();
  const [openDialog, setOpenDialog] = useState<boolean>(false);

  const handleCloseDialog = () => setOpenDialog(false);

  const handleOpenCart = () => {
    if (userData !== null) {
      navigate("/cart");
    } else {
      setOpenDialog(true);
    }
  };
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
            onClick={handleOpenCart}
          />
          <LoginButton
            user={
              userData !== null && userData.length > 0
                ? { name: userData[0].data.name }
                : {}
            }
            onClick={() => navigate("/login")}
            signout={signOut}
          />
        </Box>
      </Box>
      <Divider sx={{ marginY: "20px", marginX: "10px" }} />
      <LoginDialog open={openDialog} handleClose={handleCloseDialog} />
    </>
  );
};

export default Header;
