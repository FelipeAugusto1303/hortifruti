import { Box, styled } from "@mui/material";

export const ItemCardContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "250px",
  minHeight: "340px",
  borderRadius: "20px",
  border: "1px solid #ccc",
  "@media (max-width: 440px)": {
    width: "90%",
  },
});
