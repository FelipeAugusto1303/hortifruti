import { Box, styled } from "@mui/material";

export const HeaderContainer = styled(Box)({
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
});

export const HeaderButtonContainer = styled(Box)({
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
});
