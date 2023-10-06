import {
  Box,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../context/appContext";
import { useReactToPrint } from "react-to-print";
import { getTotalPrice } from "../../common/utils";

const PDFTemplate: React.FC = () => {
  const componentRef = useRef(null);
  const navigate = useNavigate();
  const { userData, cart, clearCart } = useAppContext();

  useEffect(() => {
    if (userData === null) {
      navigate("/hortifruit/");
    }
  }, []);

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "hortifruti-checkout",
  });
  return (
    <Box
      component="div"
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Box
        ref={componentRef}
        component="div"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <Box component="img" alt="logo" src="./logo.png" height="150px" />
        <Typography variant="subtitle2">
          Compra realizada com sucesso, seu pedido já foi mandado para nosso
          fornecedor e já está em separação. Abaixo está seu comprovante de
          compra com todos os detalhes do seu pedido.
        </Typography>
        <Box
          component="div"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            width: "100%",
            maxWidth: 800,
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Resumo da compra:
          </Typography>
        </Box>
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
              <Typography
                variant="subtitle1"
                sx={{ color: "#ea1d2c", fontWeight: "bold" }}
              >
                Total: ${getTotalPrice(cart.items).toFixed(2)}
              </Typography>
            </Box>
          </>
        ) : null}
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
          gap: "20px",
          "@media (max-width: 440px)": {
            alignItems: "flex-end",
            gap: "10px",
            flexDirection: "column",
            width: "100%",
          },
        }}
      >
        <Button
          variant="outlined"
          onClick={() => {
            clearCart();
            navigate("/hortifruti/");
          }}
        >
          Voltar ao inicio
        </Button>
        <Button variant="contained" onClick={handlePrint}>
          Imprimir comprovante
        </Button>
      </Box>
    </Box>
  );
};

export default PDFTemplate;
