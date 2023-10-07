import { Box, styled } from "@mui/material";

export const CartContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

export const ButtonContainer = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  marginTop: "20px",
  width: "100%",
  maxWidth: 800,
  minWidth: 350,
  gap: "20px",
});
