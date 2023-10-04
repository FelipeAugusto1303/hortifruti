import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import { Box, Typography } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";

type LoginButtonProps = {
  user: {
    name?: string | null;
  };
  onClick: () => void;
  signout: () => void;
};

const LoginButton: React.FC<LoginButtonProps> = ({
  user,
  onClick,
  signout,
}) => {
  return (
    <Box
      data-testid="login-button-container"
      component="div"
      sx={{ display: "flex", alignItems: "center", gap: "5px" }}
    >
      {Object.keys(user).length ? (
        <Box
          component="div"
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            marginRight: "5px",
          }}
        >
          <Typography variant="body2" sx={{ color: "#0000008A" }}>
            Olá, {user.name}
          </Typography>
          <LogoutIcon color="action" onClick={signout} />
        </Box>
      ) : (
        <Box
          component="div"
          sx={{ display: "flex", alignItems: "center" }}
          onClick={onClick}
        >
          <PersonIcon color="action" />
          <Typography variant="body2" sx={{ color: "#0000008A" }}>
            Entrar
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default LoginButton;
