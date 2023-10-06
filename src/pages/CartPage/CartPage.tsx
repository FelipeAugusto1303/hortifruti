import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import {
  Alert,
  Box,
  Button,
  Snackbar,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useAppContext } from "../../context/appContext";
import { useNavigate } from "react-router-dom";
import Paper from "@mui/material/Paper";

const CartPage: React.FC = () => {
  const navigate = useNavigate();
  const { userData, cart } = useAppContext();
  const [openError, setOpenError] = useState(false);

  const handleCloseError = () => setOpenError(false);

  useEffect(() => {
    if (userData === null) {
      navigate("/hortifruit/");
    }
  }, []);

  const getTotalPrice = (items: any[]) => {
    var total = 0;
    items.forEach((item) => {
      total = total + item.price * item.qnt;
    });
    return total;
  };

  return (
    <>
      <Header />
      <Box
        component="div"
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <TableContainer component={Paper} sx={{ maxWidth: 800 }}>
          <Table sx={{ minWidth: 350 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: "bold" }}>
                  Nome do produto
                </TableCell>
                <TableCell sx={{ fontWeight: "bold" }} align="right">
                  Preço (R$)
                </TableCell>
                <TableCell sx={{ fontWeight: "bold" }} align="right">
                  Quantidade
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cart !== null
                ? cart.items.map((item) => (
                    <TableRow
                      key={item.id}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {item.name}
                      </TableCell>
                      <TableCell align="right">R$ {item.price}</TableCell>
                      <TableCell align="right">{item.qnt}</TableCell>
                    </TableRow>
                  ))
                : null}
            </TableBody>
          </Table>
        </TableContainer>
        {cart !== null ? (
          <>
            <Box
              component="div"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
                marginTop: "20px",
                width: "100%",
                maxWidth: 800,
                minWidth: 350,
                gap: "20px",
              }}
            >
              <Button
                variant="outlined"
                onClick={() => navigate("/hortifruti/")}
              >
                continuar comprando
              </Button>
              <Typography
                variant="subtitle1"
                sx={{ color: "#ea1d2c", fontWeight: "bold" }}
              >
                Total: ${getTotalPrice(cart.items).toFixed(2)}
              </Typography>
            </Box>
            <Box
              component="div"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
                marginTop: "20px",
                width: "100%",
                maxWidth: 800,
                minWidth: 350,
              }}
            >
              <Button
                variant="contained"
                onClick={() => {
                  if (cart !== null && cart.items.length > 0) {
                    navigate("/hortifruti/checkout");
                  } else {
                    setOpenError(true);
                  }
                }}
              >
                Finalizar Compra
              </Button>
            </Box>
          </>
        ) : null}
        <Snackbar
          open={openError}
          autoHideDuration={3000}
          onClose={handleCloseError}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
        >
          <Alert
            onClose={handleCloseError}
            severity="error"
            sx={{ width: "100%" }}
          >
            É necessário ter produtos no carrinho para seguir com a compra
          </Alert>
        </Snackbar>
      </Box>
    </>
  );
};

export default CartPage;
