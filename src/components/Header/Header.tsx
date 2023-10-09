import { Box, Divider } from "@mui/material";
import React, { useState } from "react";
import CartButton from "../CartButton/CartButton";
import LoginButton from "../LoginButton/LoginButton";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../context/appContext";
import LoginDialog from "../LoginDialog/LoginDialog";
import { HeaderButtonContainer, HeaderContainer } from "./Header.style";

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
      <HeaderContainer data-testid="header-container">
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
          onClick={() => navigate("/hortifruti/")}
        />
        <HeaderButtonContainer data-testid="buttons-container">
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
        </HeaderButtonContainer>
      </HeaderContainer>

      <Divider sx={{ marginY: "20px", marginX: "10px" }} />
      <LoginDialog open={openDialog} handleClose={handleCloseDialog} />
    </>
  );
};

export default Header;
