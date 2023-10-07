import { Box, styled } from "@mui/material";

export const StyledItemsContainer = styled(Box)({
  display: "flex",
  gap: "10px",
  flexWrap: "wrap",
  marginTop: "20px",
  "@media (max-width: 440px)": {
    flexDirection: "column",
    alignItems: "center",
    flexWrap: "nowrap",
  },
});
