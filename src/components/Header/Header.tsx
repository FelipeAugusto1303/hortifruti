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
      navigate("/hortifruti/cart");
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
          "@media (max-width: 600px)": {
            flexDirection: "column",
            height: "150px",
            paddingRight: "0px",
          },
          "@media (max-width: 440px)": {
            height: "175px",
          },
        }}
      >
        <Box
          component="img"
          src="./logo.png"
          alt="logo"
          height="70px"
          sx={{
            "@media (max-width: 600px)": {
              height: "100px",
            },
          }}
        />
        <Box
          data-testid="buttons-container"
          component="div"
          sx={{
            display: "flex",
            gap: "10px",
            "@media (max-width: 600px)": {
              gap: 0,
              justifyContent: "space-between",
              width: "100%",
            },
            "@media (max-width: 440px)": {
              gap: "10px",
              flexDirection: "column",
              justifyContent: "space-between",
              width: "100%",
            },
          }}
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
            onClick={() => navigate("/hortifruti/login")}
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
