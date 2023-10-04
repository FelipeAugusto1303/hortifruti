import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import { Box, Typography } from "@mui/material";

type LoginButtonProps = {
  user: {
    name?: string;
  };
};

const LoginButton: React.FC<LoginButtonProps> = ({ user }) => {
  return (
    <Box
      data-testid="login-button-container"
      component="div"
      sx={{ display: "flex", alignItems: "center", gap: "5px" }}
    >
      {Object.keys(user).length ? (
        <Typography variant="body2" sx={{ color: "#0000008A" }}>
          Olá, {user.name}
        </Typography>
      ) : (
        <>
          <PersonIcon color="action" />
          <Typography variant="body2" sx={{ color: "#0000008A" }}>
            Entrar
          </Typography>
        </>
      )}
    </Box>
  );
};

export default LoginButton;
